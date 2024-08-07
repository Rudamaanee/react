import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import PageTitArea from '../../layout/PageTitArea';
import Bootstrap from './Bootstrap';
import Make from './Make';

const IconsAll = () => {

  return (
    <>
      <PageTitArea pageTitHeading="Icons" pageTitSubHeading="bootstrap" />

      <Tabs
        defaultActiveKey="make"
        id="bs-nav"
        className="mb-3"
      >
        <Tab eventKey="make" title="Make">
          <Make />
        </Tab>
        <Tab eventKey="bootstrap" title="Bootstrap">
          <Bootstrap />
        </Tab>
      </Tabs>
    </>
  );
}

export default IconsAll;
