import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import PageTitArea from '../../layout/PageTitArea';
import Form from './Form';
import FormGroup from './FormGroup';

const FormsTab = () => {

  return (
    <>
      <PageTitArea pageTitHeading="Forms" pageTitSubHeading="" />

      <Tabs
        defaultActiveKey="form"
        id="bs-nav"
        className="mb-3"
      >
        <Tab eventKey="form" title="Form">
          <Form />
        </Tab>
        <Tab eventKey="formGroup" title="FormGroup">
          <FormGroup />
        </Tab>
      </Tabs>
    </>
  );
}

export default FormsTab;
