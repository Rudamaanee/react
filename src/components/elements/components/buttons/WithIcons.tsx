import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import PageTitArea from '../../../layout/PageTitArea';
import HorizontalIcons from './HorizontalIcons';
import VerticalIcons from './VerticalIcons';

const WithIcons = () => {
  return (
    <>
      <PageTitArea pageTitHeading="Button Widh Icon" pageTitSubHeading="아이콘을 포함하고 있는 버튼 유형" />

      <Tabs
        defaultActiveKey="horizontalIcons"
        id="bs-nav"
        className="mb-3"
      >
        <Tab eventKey="horizontalIcons" title="Horizontal Icons">
          <HorizontalIcons />
        </Tab>
        <Tab eventKey="VerticalIcons" title="VerticalIcons Icons">
          <VerticalIcons />
        </Tab>
      </Tabs>
    </>
  );
}

export default WithIcons;
