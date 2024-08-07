import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import Core from './highcharts/Core';
import Stock from './highcharts/Stock';
import Maps from './highcharts/Maps';
import HighchartsGantt from './highcharts/HighchartsGantt';


const Highcharts = () => {
  
  return (
    <Tabs
      defaultActiveKey="Core"
      id="bs-nav"
      className="mb-3"
    >
      <Tab eventKey="Core" title="Highcharts Core Library">
        <Core />
      </Tab>
      <Tab eventKey="Stock" title="Highcharts Stock Library">
        <Stock />
      </Tab>
      <Tab eventKey="Maps" title="Highcharts Maps Library">
        <Maps />
      </Tab>
      <Tab eventKey="Gantt" title="Highcharts Gantt">
        <HighchartsGantt />
      </Tab>
    </Tabs>
  );
}
export default Highcharts;