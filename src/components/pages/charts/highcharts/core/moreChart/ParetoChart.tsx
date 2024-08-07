import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import pareto from 'highcharts/modules/pareto';
import exporting from 'highcharts/modules/exporting';
pareto(Highcharts)
exporting(Highcharts);

const ParetoChart = () => {
  const options = {
    chart: {
      renderTo: 'container',
      type: 'column'
    },
    title: {
      text: 'Restaurants Complaints'
    },
    tooltip: {
      shared: true
    },
    xAxis: {
      categories: [
        'Overpriced',
        'Small portions',
        'Wait time',
        'Food is tasteless',
        'No atmosphere',
        'Not clean',
        'Too noisy',
        'Unfriendly staff'
      ],
      crosshair: true
    },
    yAxis: [{
      title: {
        text: ''
      }
    }, {
      title: {
        text: ''
      },
      minPadding: 0,
      maxPadding: 0,
      max: 100,
      min: 0,
      opposite: true,
      labels: {
        format: '{value}%'
      }
    }],
    series: [{
      type: 'pareto',
      name: 'Pareto',
      yAxis: 1,
      zIndex: 10,
      baseSeries: 1,
      tooltip: {
        valueDecimals: 2,
        valueSuffix: '%'
      }
    }, {
      name: 'Complaints',
      type: 'column',
      zIndex: 2,
      data: [755, 222, 151, 86, 72, 51, 36, 10]
    }]
  }; //options

  return <HighchartsReact highcharts={Highcharts} options={options} />;
}
export default ParetoChart;