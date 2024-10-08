import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';

import exporting from 'highcharts/modules/exporting';
// import export_data from 'highcharts/modules/export-data';
import accessibility from 'highcharts/modules/accessibility';
exporting(Highcharts);
// export_data(Highcharts);
accessibility(Highcharts);

const DynamicallyUpdatedData = () => {
  const options = {
    chart: {
      events: {
        load: function () {

            // set up the updating of the chart each second
          const series = this.series[0];
          setInterval(function () {
            const x = (new Date()).getTime(), // current time
                  y = Math.round(Math.random() * 100);
            series.addPoint([x, y], true, true);
          }, 1000);
        }
      }
    },

    accessibility: {
      enabled: false
    },

    time: {
      useUTC: false
    },

    rangeSelector: {
      buttons: [{
        count: 1,
        type: 'minute',
        text: '1M'
      }, {
        count: 5,
        type: 'minute',
        text: '5M'
      }, {
        type: 'all',
        text: 'All'
      }],
      inputEnabled: false,
      selected: 0
    },

    title: {
      text: 'Live random data'
    },

    exporting: {
      enabled: false
    },

    series: [{
      name: 'Random data',
      data: (function () {
          // generate an array of random data
        const data = [],
            time = (new Date()).getTime();

        for (let i = -999; i <= 0; i += 1) {
          data.push([
            time + i * 1000,
            Math.round(Math.random() * 100)
          ]);
        }
        return data;
      }())
    }]
  }; //options

  return <HighchartsReact highcharts={Highcharts} constructorType={"stockChart"} options={options} />;
}
export default DynamicallyUpdatedData;