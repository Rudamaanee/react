import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import CoreLine from './core/CoreLine';
import CoreArea from './core/CoreArea';
import CoreColumnBar from './core/CoreColumnBar';
import CorePie from './core/CorePie';
import CoreScatterBubble from './core/CoreScatterBubble';
import CoreCombinations from './core/CoreCombinations';
import CorestyledMode from './core/CorestyledMode';
import CoreAccessibility from './core/CoreAccessibility';
import CoreAudio from './core/CoreAudio';
import Core3D from './core/Core3D';
import CoreGauges from './core/CoreGauges';
import CoreHeatTree from './core/CoreHeatTree';
import CoreTreesNetworks from './core/CoreTreesNetworks';
import CoreMoreChart from './core/CoreMoreChart';

const Core = () => {
  return (
    <Tabs
      defaultActiveKey="CoreLine"
      id="bs-nav"
      className="type1 mb-3"
    >
      <Tab eventKey="CoreLine" title="Line Charts">
        <CoreLine />
      </Tab>
      <Tab eventKey="CoreArea" title="Area Charts">
        <CoreArea />
      </Tab>
      <Tab eventKey="CoreColumnBar" title="Column and bar charts">
        <CoreColumnBar />
      </Tab>
      <Tab eventKey="CorePie" title="Pie">
        <CorePie />
      </Tab>
      <Tab eventKey="CoreScatterBubble" title="Scatter and Bubble Charts">
        <CoreScatterBubble />
      </Tab>
      <Tab eventKey="CoreCombinations" title="Combinations">
        <CoreCombinations />
      </Tab>
      <Tab eventKey="CorestyledMode" title="Styled mode">
        <CorestyledMode />
      </Tab>
      <Tab eventKey="CoreAccessibility" title="Accessibility">
        <CoreAccessibility />
      </Tab>
      <Tab eventKey="CoreAudio" title="Audio Charts">
        <CoreAudio />
      </Tab>
      <Tab eventKey="Core3D" title="3D Charts">
        <Core3D />
      </Tab>
      <Tab eventKey="CoreGauges" title="Gauges">
        <CoreGauges />
      </Tab>
      <Tab eventKey="CoreHeatTree" title="Heat and tree maps">
        <CoreHeatTree />
      </Tab>
      <Tab eventKey="CoreTreesNetworks" title="Trees and netwroks">
        <CoreTreesNetworks />
      </Tab>
      <Tab eventKey="CoreMoreChart" title="More chart types">
        <CoreMoreChart />
      </Tab>
    </Tabs>
  );
}
export default Core;