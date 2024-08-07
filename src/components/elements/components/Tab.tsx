import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const BootTab = () => {
  return (
    <div>
      <Tabs
        defaultActiveKey="tab1"
        id="bs-nav"
        className="mb-3"
      >
        <Tab eventKey="tab1" title="Tab1">
          Tab1
        </Tab> { /* Tab1 */ }

        <Tab eventKey="tab2" title="Tab2">
          Tab2
        </Tab> { /* Tab2 */ }

        <Tab eventKey="tab3" title="Tab3">
          Tab3
        </Tab> { /* Tab3 */ }

      </Tabs>
    </div>
  );
}
export default BootTab;