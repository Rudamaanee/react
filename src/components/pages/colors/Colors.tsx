import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import BokColor from './BokColor';
import Color12 from './Color12';
import ChartColor from './ChartColor';
import GeneratorColor from './GeneratorColor';

const ColorTab = () => {
  return (
    <div>
      <Tabs
        defaultActiveKey="BokColor"
        id="bs-nav"
        className="mb-3"
      >
        <Tab eventKey="BokColor" title="BokColor">
          <BokColor />
        </Tab> { /* Tab1 */ }

        <Tab eventKey="Color12" title="Color12">
          <Color12 />
        </Tab> { /* Tab2 */ }

        <Tab eventKey="ChartColor" title="ChartColor">
          <ChartColor />
        </Tab> { /* Tab3 */ }

        <Tab eventKey="GeneratorColor" title="GeneratorColor">
          <GeneratorColor />
        </Tab> { /* Tab4 */ }
      </Tabs>
    </div>
  );
}
export default ColorTab;