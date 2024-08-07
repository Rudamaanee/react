import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import HighchartsMore from 'highcharts/highcharts-more'
import exporting from 'highcharts/modules/exporting';
HighchartsMore(Highcharts)
exporting(Highcharts);

const Waterfall = () => {
  const options = {
    chart: {
      type: 'waterfall'
    },

    title: {
      text: 'Highcharts Waterfall'
    },

    xAxis: {
      type: 'category'
    },

    yAxis: {
      title: {
        text: 'USD'
      }
    },

    legend: {
      enabled: false
    },

    tooltip: {
      //pointFormat: '<b>${point.y:,.2f}</b> USD'
    },

    series: [{
      upColor: Highcharts.getOptions().colors[2],
      color: Highcharts.getOptions().colors[3],
      data: [{
        name: 'Start',
        y: 120000
      }, {
        name: 'Product Revenue',
        y: 569000
      }, {
        name: 'Service Revenue',
        y: 231000
      }, {
        name: 'Positive Balance',
        isIntermediateSum: true,
        color: Highcharts.getOptions().colors[1]
      }, {
        name: 'Fixed Costs',
        y: -342000
      }, {
        name: 'Variable Costs',
        y: -233000
      }, {
        name: 'Balance',
        isSum: true,
        color: Highcharts.getOptions().colors[1]
      }],
      dataLabels: {
        enabled: true,
        format: '{divide y 1000}k'
      },
      pointPadding: 0
    }]
  }; //options

  return <HighchartsReact highcharts={Highcharts} options={options} />;
}
export default Waterfall;