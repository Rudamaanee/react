import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import HC_3d from 'highcharts/highcharts-3d';
import Funnel from "highcharts/modules/funnel3d";
import cylinder from "highcharts/modules/cylinder";
HC_3d(Highcharts);
Funnel(Highcharts);
cylinder(Highcharts);

const TheeDFunnel = () => {
  const options = {
    chart: {
      type: 'funnel3d',
      options3d: {
        enabled: true,
        alpha: 10,
        depth: 50,
        viewDistance: 50
      }
    },
    title: {
      text: 'Highcharts Funnel3D Chart'
    },
    accessibility: {
      screenReaderSection: {
        beforeChartFormat: '<{headingTagName}>' +
          '{chartTitle}</{headingTagName}><div>{typeDescription}</div>' +
          '<div>{chartSubtitle}</div><div>{chartLongdesc}</div>'
      }
    },
    plotOptions: {
      series: {
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b> ({point.y:,.0f})',
          allowOverlap: true,
          y: 10
        },
        neckWidth: '30%',
        neckHeight: '25%',
        width: '80%',
        height: '80%'
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
export default TheeDFunnel;