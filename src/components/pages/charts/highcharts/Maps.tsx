import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import General from './maps/General';
import Dynamic from './maps/Dynamic';
import SeriesTypes from './maps/SeriesTypes';

const Stock = () => {
  return (
    <Tabs
      defaultActiveKey="General"
      id="bs-nav"
      className="type1 mb-3"
    >
      <Tab eventKey="General" title="General">
        <General />
      </Tab>
      <Tab eventKey="Dynamic" title="Dynamic">
        <Dynamic />
      </Tab>
      <Tab eventKey="SeriesTypes" title="Series types">
        <SeriesTypes />
      </Tab>
    </Tabs>
  );
}

export default Stock;