import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import HC_3d from 'highcharts/highcharts-3d';
HC_3d(Highcharts);

const TheeDDonut = () => {
  const options = {
    chart: {
      type: 'pie',
      options3d: {
        enabled: true,
        alpha: 45
      }
    },
    title: {
      text: 'Beijing 2022 gold medals by country',
      align: 'left'
    },
    subtitle: {
      text: '3D donut in Highcharts',
      align: 'left'
    },
    plotOptions: {
      pie: {
        innerSize: 100,
        depth: 45
      }
    },
    series: [{
      name: 'Medals',
      data: [
        ['Norway', 16],
        ['Germany', 12],
        ['USA', 8],
        ['Sweden', 8],
        ['Netherlands', 8],
        ['ROC', 6],
        ['Austria', 7],
        ['Canada', 4],
        ['Japan', 3]
      ]
    }]
  }; //options

  return <HighchartsReact highcharts={Highcharts} options={options} />;
}
export default TheeDDonut;