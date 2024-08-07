import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import General from './stock/general';
import ChartTypes from './stock/ChartTypes';
import VariousFeatures from './stock/VariousFeatures';
import FlagsAndTechnicalIndicators from './stock/FlagsAndTechnicalIndicators';
import Designs from './stock/Designs';

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
      <Tab eventKey="ChartTypes" title="Chart types">
        <ChartTypes />
      </Tab>
      <Tab eventKey="VariousFeatures" title="Various features">
        <VariousFeatures />
      </Tab>
      <Tab eventKey="FlagsAndTechnicalIndicators" title="Flags and Technical indicators">
        <FlagsAndTechnicalIndicators />
      </Tab>
      <Tab eventKey="Designs" title="Designs">
        <Designs />
      </Tab>
    </Tabs>
  );
}
export default Stock;