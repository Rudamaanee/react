import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import xrange from 'highcharts/modules/xrange';
import exporting from 'highcharts/modules/exporting';
xrange(Highcharts)
exporting(Highcharts);

const XRangeSeries = () => {
  const options = {
    chart: {
      type: 'xrange'
    },
    title: {
      text: 'Highcharts X-range'
    },
    accessibility: {
      point: {
        descriptionFormat: '{add index 1}. {yCategory}, {x:%A %e %B %Y} ' +
          'to {x2:%A %e %B %Y}.'
      }
    },
    xAxis: {
      type: 'datetime'
    },
    yAxis: {
      title: {
        text: ''
      },
      categories: ['Prototyping', 'Development', 'Testing'],
      reversed: true
    },
    series: [{
      name: 'Project 1',
      // pointPadding: 0,
      // groupPadding: 0,
      borderColor: 'gray',
      pointWidth: 20,
      data: [{
        x: Date.UTC(2014, 10, 21),
        x2: Date.UTC(2014, 11, 2),
        y: 0,
        partialFill: 0.25
      }, {
        x: Date.UTC(2014, 11, 2),
        x2: Date.UTC(2014, 11, 5),
        y: 1
      }, {
        x: Date.UTC(2014, 11, 8),
        x2: Date.UTC(2014, 11, 9),
        y: 2
      }, {
        x: Date.UTC(2014, 11, 9),
        x2: Date.UTC(2014, 11, 19),
        y: 1
      }, {
        x: Date.UTC(2014, 11, 10),
        x2: Date.UTC(2014, 11, 23),
        y: 2
      }],
      dataLabels: {
        enabled: true
      }
    }]
  }; //options

  return <HighchartsReact highcharts={Highcharts} options={options} />;
}
export default XRangeSeries;