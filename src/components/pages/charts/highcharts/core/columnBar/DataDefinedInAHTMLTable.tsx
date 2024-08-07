import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import HighchartsMore from 'highcharts/highcharts-more'

const VerticalBar = () => {
  HighchartsMore(Highcharts)
  const options = {
    data: {
      table: 'datatable'
    },
    chart: {
      type: 'column'
    },
    title: {
      text: 'Live births in Norway'
    },
    subtitle: {
      text:
        'Source: <a href="https://www.ssb.no/en/statbank/table/04231" target="_blank">SSB</a>'
    },
    xAxis: {
      type: 'category'
    },
    yAxis: {
      allowDecimals: false,
      title: {
        text: 'Amount'
      }
    }
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
}
export default VerticalBar;