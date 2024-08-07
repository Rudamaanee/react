import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const VerticalBar = () => {
  const colors = Highcharts.getOptions().colors.map((c, i) =>
  Highcharts.color(Highcharts.getOptions().colors[0])
    .brighten((i - 3) / 7)
    .get()
  ); //colors

  const options = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie'
    },
    title: {
      text: 'Browser market shares in February, 2022',
      align: 'left'
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
      point: {
        valueSuffix: '%'
      }
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        colors,
        borderRadius: 5,
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b><br>{point.percentage:.1f} %',
          distance: -50,
          filter: {
            property: 'percentage',
            operator: '>',
            value: 4
          }
        }
      }
    },
    series: [{
      name: 'Share',
      data: [
        { name: 'Chrome', y: 74.03 },
        { name: 'Edge', y: 12.66 },
        { name: 'Firefox', y: 4.96 },
        { name: 'Safari', y: 2.49 },
        { name: 'Internet Explorer', y: 2.31 },
        { name: 'Other', y: 3.398 }
      ]
    }]
  }; //options

  return <HighchartsReact highcharts={Highcharts} options={options} />;
}
export default VerticalBar;