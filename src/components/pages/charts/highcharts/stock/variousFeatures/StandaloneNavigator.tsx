import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';

import navigator from 'highcharts/modules/navigator';
import exporting from 'highcharts/modules/exporting';
navigator(Highcharts);
exporting(Highcharts);

const StandaloneNavigator = () => {
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
export default StandaloneNavigator;