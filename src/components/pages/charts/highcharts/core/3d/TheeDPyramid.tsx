import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import HC_3d from 'highcharts/highcharts-3d';
import Funnel from "highcharts/modules/funnel3d";
import cylinder from "highcharts/modules/cylinder";
import pyramid3d from "highcharts/modules/pyramid3d";
HC_3d(Highcharts);
Funnel(Highcharts);
cylinder(Highcharts);
pyramid3d(Highcharts);

const TheeDPyramid = () => {
  const options = {
    chart: {
      type: 'pyramid3d',
      options3d: {
        enabled: true,
        alpha: 10,
        depth: 50,
        viewDistance: 50
      }
    },
    title: {
      text: 'Highcharts Pyramid3D Chart'
    },
    plotOptions: {
      series: {
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b> ({point.y:,.0f})',
          allowOverlap: true,
          x: 10,
          y: -5
        },
        width: '60%',
        height: '80%',
        center: ['50%', '45%']
      }
    },
    series: [{
      name: 'Unique users',
      data: [
        ['Website visits', 15654],
        ['Downloads', 4064],
        ['Requested price list', 1987],
        ['Invoice sent', 976],
        ['Finalized', 846]
      ]
    }]
  }; //options

  return <HighchartsReact highcharts={Highcharts} options={options} />;
}
export default TheeDPyramid;