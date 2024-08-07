import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';

import highcharts_more from 'highcharts/highcharts-more';
import exporting from 'highcharts/modules/exporting';
highcharts_more(Highcharts);
exporting(Highcharts);

const VerticalBar = () => {
  const options = {
    chart: {
      type: 'spline'
    },
    title: {
      text: 'My chart'
    },
    series: [
      {
        data: [1, 2, 1, 4, 3, 6]
      }
    ]
  }; //options

  return <HighchartsReact highcharts={Highcharts} constructorType={"stockChart"} options={options} />;
}
export default VerticalBar;