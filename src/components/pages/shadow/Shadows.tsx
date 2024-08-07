import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import PageTitArea from '../../layout/PageTitArea';
import BoxShadow from './BoxShadow';
import TextShadow from './TextShadow';

const Shadows = () => {

  return (
  <>
    <PageTitArea pageTitHeading="Shadows" pageTitSubHeading="" />

    <Tabs
        defaultActiveKey="BoxShadow"
        id="bs-nav"
        className="mb-3"
    >
      <Tab eventKey="BoxShadow" title="box-shadow">
        <BoxShadow />
      </Tab>

      <Tab eventKey="TextShadow" title="text-shadow">
        <TextShadow />
      </Tab>
    </Tabs>
  </>
  );
};

export default Shadows;
