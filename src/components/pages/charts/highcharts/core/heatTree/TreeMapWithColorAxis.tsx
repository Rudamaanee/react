import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import heatmap from 'highcharts/modules/heatmap';
import treemap from 'highcharts/modules/treemap';
heatmap(Highcharts);
treemap(Highcharts);

const TreeMapWithColorAxis = () => {
  const options = {
    colorAxis: {
      minColor: '#FFFFFF',
      maxColor: Highcharts.getOptions().colors[0]
    },
    series: [{
      type: 'treemap',
      layoutAlgorithm: 'squarified',
      clip: false,
      data: [{
        name: 'A',
        value: 6,
        colorValue: 1
      }, {
        name: 'B',
        value: 6,
        colorValue: 2
      }, {
        name: 'C',
        value: 4,
        colorValue: 3
      }, {
        name: 'D',
        value: 3,
        colorValue: 4
      }, {
        name: 'E',
        value: 2,
        colorValue: 5
      }, {
        name: 'F',
        value: 2,
        colorValue: 6
      }, {
        name: 'G',
        value: 1,
        colorValue: 7
      }]
    }],
    title: {
        text: 'Highcharts Treemap'
    }
  }; //options

  return <HighchartsReact highcharts={Highcharts} options={options} />;
}
export default TreeMapWithColorAxis;