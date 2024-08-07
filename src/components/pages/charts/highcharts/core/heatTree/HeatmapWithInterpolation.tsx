import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import heatmap from 'highcharts/modules/heatmap';
heatmap(Highcharts);

const VerticalBar = () => {
  const options = {
    chart: {
      height: '100%',
      type: 'heatmap',
      plotBackgroundImage: 'https://www.highcharts.com/samples/graphics/example-screenshot.png'
    },
    title: {
      text: 'Interpolated heatmap image displaying user activity on a website'
    },
    yAxis: {
      title: {
        text: undefined
      },
      endOnTick: false,
      visible: false,
      minPadding: 0,
      maxPadding: 0
    },
    xAxis: {
      visible: false,
      margin: 0,
      minPadding: 0,
      maxPadding: 0
    },
    tooltip: {
      pointFormat: '{point.value:.0f} interactions in this region'
    },
    legend: {
      title: {
        text: 'User interactions per region'
      }
    },
    colorAxis: {
      stops: [
        [0, 'rgba(61, 0, 255, 0.2)'],
        [0.3, 'rgba(0, 255, 188, 0.3)'],
        [0.6, 'rgba(194, 255, 0, 0.6)'],
        [0.9, 'rgba(255, 0, 67, 0.9)']
      ]
    },
    series: [{
      name: 'User activity',
      //data: JSON.parse(document.getElementById('data').innerText),
      data: [
        {"x":0,"y":0,"value":0},{"x":1,"y":0,"value":0},{"x":2,"y":0,"value":0},{"x":3,"y":0,"value":0},{"x":4,"y":0,"value":0},{"x":5,"y":0,"value":0},{"x":6,"y":0,"value":0},{"x":7,"y":0,"value":0},{"x":8,"y":0,"value":0},{"x":9,"y":0,"value":0},{"x":10,"y":0,"value":0},{"x":11,"y":0,"value":0},{"x":12,"y":0,"value":0},{"x":13,"y":0,"value":0},{"x":14,"y":0,"value":0},{"x":15,"y":0,"value":0},{"x":16,"y":0,"value":0},{"x":17,"y":0,"value":0},{"x":18,"y":0,"value":0},{"x":19,"y":0,"value":0},{"x":20,"y":0,"value":0},{"x":21,"y":0,"value":0},{"x":22,"y":0,"value":0},{"x":23,"y":0,"value":0},{"x":24,"y":0,"value":0},{"x":25,"y":0,"value":0},{"x":26,"y":0,"value":0},{"x":27,"y":0,"value":0},{"x":28,"y":0,"value":0},{"x":29,"y":0,"value":0},{"x":30,"y":0,"value":0},{"x":0,"y":1,"value":0},{"x":1,"y":1,"value":0},{"x":2,"y":1,"value":0},{"x":3,"y":1,"value":0},{"x":4,"y":1,"value":0},{"x":5,"y":1,"value":0},{"x":6,"y":1,"value":0},{"x":7,"y":1,"value":0},{"x":8,"y":1,"value":0},{"x":9,"y":1,"value":0},{"x":10,"y":1,"value":0},{"x":11,"y":1,"value":0},{"x":12,"y":1,"value":0},{"x":13,"y":1,"value":0},{"x":14,"y":1,"value":0},{"x":15,"y":1,"value":0},{"x":16,"y":1,"value":0},{"x":17,"y":1,"value":0},{"x":18,"y":1,"value":0},{"x":19,"y":1,"value":0},{"x":20,"y":1,"value":0},{"x":21,"y":1,"value":0},{"x":22,"y":1,"value":0},{"x":23,"y":1,"value":0},{"x":24,"y":1,"value":0},{"x":25,"y":1,"value":0},{"x":26,"y":1,"value":0},{"x":27,"y":1,"value":0},{"x":28,"y":1,"value":0},{"x":29,"y":1,"value":0},{"x":30,"y":1,"value":0},{"x":0,"y":2,"value":0},{"x":1,"y":2,"value":0},{"x":2,"y":2,"value":0},{"x":3,"y":2,"value":0},{"x":4,"y":2,"value":0},{"x":5,"y":2,"value":0},{"x":6,"y":2,"value":0},{"x":7,"y":2,"value":0},{"x":8,"y":2,"value":0},{"x":9,"y":2,"value":0},{"x":10,"y":2,"value":0},{"x":11,"y":2,"value":0},{"x":12,"y":2,"value":0},{"x":13,"y":2,"value":0},{"x":14,"y":2,"value":0},{"x":15,"y":2,"value":0},{"x":16,"y":2,"value":0},{"x":17,"y":2,"value":0},{"x":18,"y":2,"value":0},{"x":19,"y":2,"value":0},{"x":20,"y":2,"value":0},{"x":21,"y":2,"value":0},{"x":22,"y":2,"value":0},{"x":23,"y":2,"value":0},{"x":24,"y":2,"value":0},{"x":25,"y":2,"value":0},{"x":26,"y":2,"value":0},{"x":27,"y":2,"value":0},{"x":28,"y":2,"value":0},{"x":29,"y":2,"value":0},{"x":30,"y":2,"value":0},{"x":0,"y":3,"value":0},{"x":1,"y":3,"value":0},{"x":2,"y":3,"value":0},{"x":3,"y":3,"value":0},{"x":4,"y":3,"value":0},{"x":5,"y":3,"value":0},{"x":6,"y":3,"value":0},{"x":7,"y":3,"value":0},{"x":8,"y":3,"value":0},{"x":9,"y":3,"value":0},{"x":10,"y":3,"value":0},{"x":11,"y":3,"value":0},{"x":12,"y":3,"value":0},{"x":13,"y":3,"value":0},{"x":14,"y":3,"value":0},{"x":15,"y":3,"value":0},{"x":16,"y":3,"value":0},{"x":17,"y":3,"value":0},{"x":18,"y":3,"value":0},{"x":19,"y":3,"value":0},{"x":20,"y":3,"value":0},{"x":21,"y":3,"value":0},{"x":22,"y":3,"value":0},{"x":23,"y":3,"value":0},{"x":24,"y":3,"value":0},{"x":25,"y":3,"value":0},{"x":26,"y":3,"value":0},{"x":27,"y":3,"value":0},{"x":28,"y":3,"value":0},{"x":29,"y":3,"value":0},{"x":30,"y":3,"value":0},{"x":0,"y":4,"value":0},{"x":1,"y":4,"value":0},{"x":2,"y":4,"value":0},{"x":3,"y":4,"value":0},{"x":4,"y":4,"value":0},{"x":5,"y":4,"value":0},{"x":6,"y":4,"value":0},{"x":7,"y":4,"value":0},{"x":8,"y":4,"value":0},{"x":9,"y":4,"value":0},{"x":10,"y":4,"value":0},{"x":11,"y":4,"value":0},{"x":12,"y":4,"value":0},{"x":13,"y":4,"value":0},{"x":14,"y":4,"value":0},{"x":15,"y":4,"value":0},{"x":16,"y":4,"value":0},{"x":17,"y":4,"value":0},{"x":18,"y":4,"value":0},{"x":19,"y":4,"value":0},{"x":20,"y":4,"value":0},{"x":21,"y":4,"value":0},{"x":22,"y":4,"value":0},{"x":23,"y":4,"value":0},{"x":24,"y":4,"value":0},{"x":25,"y":4,"value":0},{"x":26,"y":4,"value":0},{"x":27,"y":4,"value":0},{"x":28,"y":4,"value":0},{"x":29,"y":4,"value":0},{"x":30,"y":4,"value":0},{"x":0,"y":5,"value":0},{"x":1,"y":5,"value":0},{"x":2,"y":5,"value":0},{"x":3,"y":5,"value":0},{"x":4,"y":5,"value":0},{"x":5,"y":5,"value":0},{"x":6,"y":5,"value":0},{"x":7,"y":5,"value":0},{"x":8,"y":5,"value":0},{"x":9,"y":5,"value":0},{"x":10,"y":5,"value":0},{"x":11,"y":5,"value":0},{"x":12,"y":5,"value":0},{"x":13,"y":5,"value":0},{"x":14,"y":5,"value":0},{"x":15,"y":5,"value":0},{"x":16,"y":5,"value":0},{"x":17,"y":5,"value":0},{"x":18,"y":5,"value":0},{"x":19,"y":5,"value":0},{"x":20,"y":5,"value":0},{"x":21,"y":5,"value":0},{"x":22,"y":5,"value":0},{"x":23,"y":5,"value":0},{"x":24,"y":5,"value":0},{"x":25,"y":5,"value":0},{"x":26,"y":5,"value":0},{"x":27,"y":5,"value":0},{"x":28,"y":5,"value":0},{"x":29,"y":5,"value":0},{"x":30,"y":5,"value":0},{"x":0,"y":6,"value":0},{"x":1,"y":6,"value":0},{"x":2,"y":6,"value":0},{"x":3,"y":6,"value":0},{"x":4,"y":6,"value":0},{"x":5,"y":6,"value":0},{"x":6,"y":6,"value":0},{"x":7,"y":6,"value":0},{"x":8,"y":6,"value":0},{"x":9,"y":6,"value":0},{"x":10,"y":6,"value":0},{"x":11,"y":6,"value":0},{"x":12,"y":6,"value":0},{"x":13,"y":6,"value":0},{"x":14,"y":6,"value":0},{"x":15,"y":6,"value":0},{"x":16,"y":6,"value":0},{"x":17,"y":6,"value":0},{"x":18,"y":6,"value":0},{"x":19,"y":6,"value":0},{"x":20,"y":6,"value":0},{"x":21,"y":6,"value":0},{"x":22,"y":6,"value":0},{"x":23,"y":6,"value":0},{"x":24,"y":6,"value":0},{"x":25,"y":6,"value":0},{"x":26,"y":6,"value":0},{"x":27,"y":6,"value":0},{"x":28,"y":6,"value":0},{"x":29,"y":6,"value":0},{"x":30,"y":6,"value":0},{"x":0,"y":7,"value":0},{"x":1,"y":7,"value":0},{"x":2,"y":7,"value":0},{"x":3,"y":7,"value":0},{"x":4,"y":7,"value":0},{"x":5,"y":7,"value":0},{"x":6,"y":7,"value":0},{"x":7,"y":7,"value":0},{"x":8,"y":7,"value":0},{"x":9,"y":7,"value":0},{"x":10,"y":7,"value":0},{"x":11,"y":7,"value":0},{"x":12,"y":7,"value":0},{"x":13,"y":7,"value":0},{"x":14,"y":7,"value":0},{"x":15,"y":7,"value":0},{"x":16,"y":7,"value":0},{"x":17,"y":7,"value":0},{"x":18,"y":7,"value":0},{"x":19,"y":7,"value":0},{"x":20,"y":7,"value":0},{"x":21,"y":7,"value":0},{"x":22,"y":7,"value":0},{"x":23,"y":7,"value":0},{"x":24,"y":7,"value":0},{"x":25,"y":7,"value":0},{"x":26,"y":7,"value":0},{"x":27,"y":7,"value":0},{"x":28,"y":7,"value":0},{"x":29,"y":7,"value":0},{"x":30,"y":7,"value":0},{"x":0,"y":8,"value":0},{"x":1,"y":8,"value":0},{"x":2,"y":8,"value":0},{"x":3,"y":8,"value":0},{"x":4,"y":8,"value":0},{"x":5,"y":8,"value":0},{"x":6,"y":8,"value":0},{"x":7,"y":8,"value":0},{"x":8,"y":8,"value":0},{"x":9,"y":8,"value":0},{"x":10,"y":8,"value":0},{"x":11,"y":8,"value":0},{"x":12,"y":8,"value":0},{"x":13,"y":8,"value":0},{"x":14,"y":8,"value":0},{"x":15,"y":8,"value":0},{"x":16,"y":8,"value":0},{"x":17,"y":8,"value":0},{"x":18,"y":8,"value":0},{"x":19,"y":8,"value":0},{"x":20,"y":8,"value":0},{"x":21,"y":8,"value":0},{"x":22,"y":8,"value":0},{"x":23,"y":8,"value":0},{"x":24,"y":8,"value":0},{"x":25,"y":8,"value":0},{"x":26,"y":8,"value":0},{"x":27,"y":8,"value":0},{"x":28,"y":8,"value":0},{"x":29,"y":8,"value":0},{"x":30,"y":8,"value":0},{"x":0,"y":9,"value":0},{"x":1,"y":9,"value":0},{"x":2,"y":9,"value":0},{"x":3,"y":9,"value":0},{"x":4,"y":9,"value":0},{"x":5,"y":9,"value":0},{"x":6,"y":9,"value":0},{"x":7,"y":9,"value":0},{"x":8,"y":9,"value":0},{"x":9,"y":9,"value":0},{"x":10,"y":9,"value":0},{"x":11,"y":9,"value":0},{"x":12,"y":9,"value":0},{"x":13,"y":9,"value":0},{"x":14,"y":9,"value":0},{"x":15,"y":9,"value":0},{"x":16,"y":9,"value":0},{"x":17,"y":9,"value":0},{"x":18,"y":9,"value":0},{"x":19,"y":9,"value":0},{"x":20,"y":9,"value":0},{"x":21,"y":9,"value":0},{"x":22,"y":9,"value":0},{"x":23,"y":9,"value":0},{"x":24,"y":9,"value":0},{"x":25,"y":9,"value":0},{"x":26,"y":9,"value":0},{"x":27,"y":9,"value":0},{"x":28,"y":9,"value":0},{"x":29,"y":9,"value":0},{"x":30,"y":9,"value":0},{"x":0,"y":10,"value":0},{"x":1,"y":10,"value":0},{"x":2,"y":10,"value":0},{"x":3,"y":10,"value":0},{"x":4,"y":10,"value":0},{"x":5,"y":10,"value":0},{"x":6,"y":10,"value":32.102719036025235},{"x":7,"y":10,"value":35.42148136984633},{"x":8,"y":10,"value":61.65601659602907},{"x":9,"y":10,"value":50.96436726203402},{"x":10,"y":10,"value":3.3262875028101964},{"x":11,"y":10,"value":0},{"x":12,"y":10,"value":0},{"x":13,"y":10,"value":0},{"x":14,"y":10,"value":0},{"x":15,"y":10,"value":0},{"x":16,"y":10,"value":0},{"x":17,"y":10,"value":0},{"x":18,"y":10,"value":0},{"x":19,"y":10,"value":0},{"x":20,"y":10,"value":0},{"x":21,"y":10,"value":0},{"x":22,"y":10,"value":0},{"x":23,"y":10,"value":0},{"x":24,"y":10,"value":0},{"x":25,"y":10,"value":0},{"x":26,"y":10,"value":0},{"x":27,"y":10,"value":0},{"x":28,"y":10,"value":0},{"x":29,"y":10,"value":0},{"x":30,"y":10,"value":0},{"x":0,"y":11,"value":0},{"x":1,"y":11,"value":0},{"x":2,"y":11,"value":0},{"x":3,"y":11,"value":0},{"x":4,"y":11,"value":0},{"x":5,"y":11,"value":0},{"x":6,"y":11,"value":73.32614511390307},{"x":7,"y":11,"value":92.3563361489389},{"x":8,"y":11,"value":97.88673658540915},{"x":9,"y":11,"value":92.96851101299737},{"x":10,"y":11,"value":10.717622272627272},{"x":11,"y":11,"value":0},{"x":12,"y":11,"value":0},{"x":13,"y":11,"value":0},{"x":14,"y":11,"value":0},{"x":15,"y":11,"value":0},{"x":16,"y":11,"value":0},{"x":17,"y":11,"value":0},{"x":18,"y":11,"value":0},{"x":19,"y":11,"value":0},{"x":20,"y":11,"value":0},{"x":21,"y":11,"value":0},{"x":22,"y":11,"value":0},{"x":23,"y":11,"value":0},{"x":24,"y":11,"value":0},{"x":25,"y":11,"value":0},{"x":26,"y":11,"value":0},{"x":27,"y":11,"value":0},{"x":28,"y":11,"value":0},{"x":29,"y":11,"value":0},{"x":30,"y":11,"value":0},{"x":0,"y":12,"value":0},{"x":1,"y":12,"value":0},{"x":2,"y":12,"value":0},{"x":3,"y":12,"value":0},{"x":4,"y":12,"value":0},{"x":5,"y":12,"value":0},{"x":6,"y":12,"value":0},{"x":7,"y":12,"value":0},{"x":8,"y":12,"value":0},{"x":9,"y":12,"value":0},{"x":10,"y":12,"value":0},{"x":11,"y":12,"value":0},{"x":12,"y":12,"value":0},{"x":13,"y":12,"value":0},{"x":14,"y":12,"value":0},{"x":15,"y":12,"value":0},{"x":16,"y":12,"value":0},{"x":17,"y":12,"value":0},{"x":18,"y":12,"value":16.94832017818849},{"x":19,"y":12,"value":20.877398494462287},{"x":20,"y":12,"value":24.29839630291769},{"x":21,"y":12,"value":22.10141498344175},{"x":22,"y":12,"value":26.12721759368794},{"x":23,"y":12,"value":2.438842891760566},{"x":24,"y":12,"value":0},{"x":25,"y":12,"value":0},{"x":26,"y":12,"value":0},{"x":27,"y":12,"value":0},{"x":28,"y":12,"value":0},{"x":29,"y":12,"value":0},{"x":30,"y":12,"value":0},{"x":0,"y":13,"value":0},{"x":1,"y":13,"value":0},{"x":2,"y":13,"value":0},{"x":3,"y":13,"value":0},{"x":4,"y":13,"value":0},{"x":5,"y":13,"value":0},{"x":6,"y":13,"value":0},{"x":7,"y":13,"value":0},{"x":8,"y":13,"value":0},{"x":9,"y":13,"value":0},{"x":10,"y":13,"value":0},{"x":11,"y":13,"value":0},{"x":12,"y":13,"value":0},{"x":13,"y":13,"value":0},{"x":14,"y":13,"value":0},{"x":15,"y":13,"value":0},{"x":16,"y":13,"value":0},{"x":17,"y":13,"value":0},{"x":18,"y":13,"value":15.757423193443527},{"x":19,"y":13,"value":16.14364249005262},{"x":20,"y":13,"value":30.306900145651788},{"x":21,"y":13,"value":26.911137684464023},{"x":22,"y":13,"value":20.124959339535877},{"x":23,"y":13,"value":2.857562391697501},{"x":24,"y":13,"value":0},{"x":25,"y":13,"value":0},{"x":26,"y":13,"value":0},{"x":27,"y":13,"value":0},{"x":28,"y":13,"value":0},{"x":29,"y":13,"value":0},{"x":30,"y":13,"value":0},{"x":0,"y":14,"value":0},{"x":1,"y":14,"value":0},{"x":2,"y":14,"value":0},{"x":3,"y":14,"value":0},{"x":4,"y":14,"value":0},{"x":5,"y":14,"value":0},{"x":6,"y":14,"value":0},{"x":7,"y":14,"value":0},{"x":8,"y":14,"value":0},{"x":9,"y":14,"value":0},{"x":10,"y":14,"value":0},{"x":11,"y":14,"value":0},{"x":12,"y":14,"value":0},{"x":13,"y":14,"value":0},{"x":14,"y":14,"value":0},{"x":15,"y":14,"value":0},{"x":16,"y":14,"value":0},{"x":17,"y":14,"value":0},{"x":18,"y":14,"value":20.954612376995396},{"x":19,"y":14,"value":23.547017841915373},{"x":20,"y":14,"value":22.341089745856472},{"x":21,"y":14,"value":33.822700703114926},{"x":22,"y":14,"value":28.655612270981187},{"x":23,"y":14,"value":4.758421754904218},{"x":24,"y":14,"value":0},{"x":25,"y":14,"value":0},{"x":26,"y":14,"value":0},{"x":27,"y":14,"value":0},{"x":28,"y":14,"value":0},{"x":29,"y":14,"value":0},{"x":30,"y":14,"value":0},{"x":0,"y":15,"value":0},{"x":1,"y":15,"value":0},{"x":2,"y":15,"value":0},{"x":3,"y":15,"value":0},{"x":4,"y":15,"value":0},{"x":5,"y":15,"value":0},{"x":6,"y":15,"value":0},{"x":7,"y":15,"value":0},{"x":8,"y":15,"value":0},{"x":9,"y":15,"value":0},{"x":10,"y":15,"value":0},{"x":11,"y":15,"value":0},{"x":12,"y":15,"value":0},{"x":13,"y":15,"value":0},{"x":14,"y":15,"value":0},{"x":15,"y":15,"value":0},{"x":16,"y":15,"value":0},{"x":17,"y":15,"value":0},{"x":18,"y":15,"value":22.59776326104488},{"x":19,"y":15,"value":28.764244833611667},{"x":20,"y":15,"value":26.040379050576323},{"x":21,"y":15,"value":25.427583592520623},{"x":22,"y":15,"value":29.693490374845656},{"x":23,"y":15,"value":5.629474001024466},{"x":24,"y":15,"value":0},{"x":25,"y":15,"value":0},{"x":26,"y":15,"value":0},{"x":27,"y":15,"value":0},{"x":28,"y":15,"value":0},{"x":29,"y":15,"value":0},{"x":30,"y":15,"value":0},{"x":0,"y":16,"value":0},{"x":1,"y":16,"value":0},{"x":2,"y":16,"value":0},{"x":3,"y":16,"value":0},{"x":4,"y":16,"value":0},{"x":5,"y":16,"value":0},{"x":6,"y":16,"value":0},{"x":7,"y":16,"value":0},{"x":8,"y":16,"value":0},{"x":9,"y":16,"value":0},{"x":10,"y":16,"value":0},{"x":11,"y":16,"value":0},{"x":12,"y":16,"value":0},{"x":13,"y":16,"value":0},{"x":14,"y":16,"value":0},{"x":15,"y":16,"value":0},{"x":16,"y":16,"value":0},{"x":17,"y":16,"value":0},{"x":18,"y":16,"value":0},{"x":19,"y":16,"value":0},{"x":20,"y":16,"value":0},{"x":21,"y":16,"value":0},{"x":22,"y":16,"value":0},{"x":23,"y":16,"value":0},{"x":24,"y":16,"value":0},{"x":25,"y":16,"value":0},{"x":26,"y":16,"value":0},{"x":27,"y":16,"value":0},{"x":28,"y":16,"value":0},{"x":29,"y":16,"value":0},{"x":30,"y":16,"value":0},{"x":0,"y":17,"value":0},{"x":1,"y":17,"value":0},{"x":2,"y":17,"value":0},{"x":3,"y":17,"value":0},{"x":4,"y":17,"value":0},{"x":5,"y":17,"value":0},{"x":6,"y":17,"value":0},{"x":7,"y":17,"value":0},{"x":8,"y":17,"value":0},{"x":9,"y":17,"value":0},{"x":10,"y":17,"value":0},{"x":11,"y":17,"value":0},{"x":12,"y":17,"value":0},{"x":13,"y":17,"value":0},{"x":14,"y":17,"value":0},{"x":15,"y":17,"value":0},{"x":16,"y":17,"value":0},{"x":17,"y":17,"value":0},{"x":18,"y":17,"value":0},{"x":19,"y":17,"value":0},{"x":20,"y":17,"value":0},{"x":21,"y":17,"value":0},{"x":22,"y":17,"value":0},{"x":23,"y":17,"value":0},{"x":24,"y":17,"value":0},{"x":25,"y":17,"value":0},{"x":26,"y":17,"value":0},{"x":27,"y":17,"value":0},{"x":28,"y":17,"value":0},{"x":29,"y":17,"value":0},{"x":30,"y":17,"value":0},{"x":0,"y":18,"value":0},{"x":1,"y":18,"value":0},{"x":2,"y":18,"value":0},{"x":3,"y":18,"value":0},{"x":4,"y":18,"value":0},{"x":5,"y":18,"value":0},{"x":6,"y":18,"value":0},{"x":7,"y":18,"value":0},{"x":8,"y":18,"value":0},{"x":9,"y":18,"value":0},{"x":10,"y":18,"value":0},{"x":11,"y":18,"value":0},{"x":12,"y":18,"value":0},{"x":13,"y":18,"value":0},{"x":14,"y":18,"value":0},{"x":15,"y":18,"value":0},{"x":16,"y":18,"value":0},{"x":17,"y":18,"value":0},{"x":18,"y":18,"value":0},{"x":19,"y":18,"value":0},{"x":20,"y":18,"value":0},{"x":21,"y":18,"value":0},{"x":22,"y":18,"value":0},{"x":23,"y":18,"value":0},{"x":24,"y":18,"value":0},{"x":25,"y":18,"value":0},{"x":26,"y":18,"value":0},{"x":27,"y":18,"value":0},{"x":28,"y":18,"value":0},{"x":29,"y":18,"value":0},{"x":30,"y":18,"value":0},{"x":0,"y":19,"value":0},{"x":1,"y":19,"value":0},{"x":2,"y":19,"value":0},{"x":3,"y":19,"value":0},{"x":4,"y":19,"value":0},{"x":5,"y":19,"value":0},{"x":6,"y":19,"value":0},{"x":7,"y":19,"value":0},{"x":8,"y":19,"value":0},{"x":9,"y":19,"value":0},{"x":10,"y":19,"value":0},{"x":11,"y":19,"value":0},{"x":12,"y":19,"value":0},{"x":13,"y":19,"value":0},{"x":14,"y":19,"value":0},{"x":15,"y":19,"value":0},{"x":16,"y":19,"value":0},{"x":17,"y":19,"value":0},{"x":18,"y":19,"value":0},{"x":19,"y":19,"value":0},{"x":20,"y":19,"value":0},{"x":21,"y":19,"value":0},{"x":22,"y":19,"value":0},{"x":23,"y":19,"value":0},{"x":24,"y":19,"value":0},{"x":25,"y":19,"value":0},{"x":26,"y":19,"value":0},{"x":27,"y":19,"value":0},{"x":28,"y":19,"value":0},{"x":29,"y":19,"value":0},{"x":30,"y":19,"value":0},{"x":0,"y":20,"value":0},{"x":1,"y":20,"value":0},{"x":2,"y":20,"value":0},{"x":3,"y":20,"value":0},{"x":4,"y":20,"value":0},{"x":5,"y":20,"value":0},{"x":6,"y":20,"value":0},{"x":7,"y":20,"value":0},{"x":8,"y":20,"value":0},{"x":9,"y":20,"value":0},{"x":10,"y":20,"value":0},{"x":11,"y":20,"value":0},{"x":12,"y":20,"value":0},{"x":13,"y":20,"value":0},{"x":14,"y":20,"value":0},{"x":15,"y":20,"value":0},{"x":16,"y":20,"value":0},{"x":17,"y":20,"value":0},{"x":18,"y":20,"value":0},{"x":19,"y":20,"value":0},{"x":20,"y":20,"value":0},{"x":21,"y":20,"value":0},{"x":22,"y":20,"value":0},{"x":23,"y":20,"value":0},{"x":24,"y":20,"value":0},{"x":25,"y":20,"value":0},{"x":26,"y":20,"value":0},{"x":27,"y":20,"value":0},{"x":28,"y":20,"value":0},{"x":29,"y":20,"value":0},{"x":30,"y":20,"value":0},{"x":0,"y":21,"value":0},{"x":1,"y":21,"value":51.26742814828358},{"x":2,"y":21,"value":72.76184499613218},{"x":3,"y":21,"value":57.61999188068722},{"x":4,"y":21,"value":51.19044085901118},{"x":5,"y":21,"value":60.91845837462087},{"x":6,"y":21,"value":6.586553432293205},{"x":7,"y":21,"value":0},{"x":8,"y":21,"value":0},{"x":9,"y":21,"value":0},{"x":10,"y":21,"value":0},{"x":11,"y":21,"value":0},{"x":12,"y":21,"value":0},{"x":13,"y":21,"value":0},{"x":14,"y":21,"value":0},{"x":15,"y":21,"value":0},{"x":16,"y":21,"value":0},{"x":17,"y":21,"value":0},{"x":18,"y":21,"value":0},{"x":19,"y":21,"value":3.801554181310027},{"x":20,"y":21,"value":19.76710377757195},{"x":21,"y":21,"value":38.53050475000395},{"x":22,"y":21,"value":49.19575185419413},{"x":23,"y":21,"value":70.11103777880503},{"x":24,"y":21,"value":72.78138125348576},{"x":25,"y":21,"value":88.50696674732262},{"x":26,"y":21,"value":75.30155927351024},{"x":27,"y":21,"value":65.93974866002931},{"x":28,"y":21,"value":40.23378214800387},{"x":29,"y":21,"value":27.21959620870907},{"x":30,"y":21,"value":6.17832116322722},{"x":0,"y":22,"value":0},{"x":1,"y":22,"value":56.236524156954516},{"x":2,"y":22,"value":65.24544530607783},{"x":3,"y":22,"value":91.0429503404542},{"x":4,"y":22,"value":49.94398124343467},{"x":5,"y":22,"value":71.84591671341514},{"x":6,"y":22,"value":7.7399075171290015},{"x":7,"y":22,"value":0},{"x":8,"y":22,"value":0},{"x":9,"y":22,"value":0},{"x":10,"y":22,"value":0},{"x":11,"y":22,"value":0},{"x":12,"y":22,"value":0},{"x":13,"y":22,"value":0},{"x":14,"y":22,"value":0},{"x":15,"y":22,"value":0},{"x":16,"y":22,"value":0},{"x":17,"y":22,"value":0},{"x":18,"y":22,"value":0},{"x":19,"y":22,"value":17.151290435111108},{"x":20,"y":22,"value":29.248631348786713},{"x":21,"y":22,"value":41.516990835332045},{"x":22,"y":22,"value":75.53469002948935},{"x":23,"y":22,"value":82.36877145752942},{"x":24,"y":22,"value":100.63843038689471},{"x":25,"y":22,"value":97.18729856315494},{"x":26,"y":22,"value":94.92248902189849},{"x":27,"y":22,"value":77.88906646902421},{"x":28,"y":22,"value":67.49210785747692},{"x":29,"y":22,"value":46.26809017358618},{"x":30,"y":22,"value":17.849999999999998}
      ],
      interpolation: true
    }],
    responsive: {
      rules: [{
        condition: {
          minWidth: 600
        },
        chartOptions: {
          chart: {
            height: 550
          }
        }
      }]
    }
  }; //options

  return <HighchartsReact highcharts={Highcharts} options={options} />;
}
export default VerticalBar;