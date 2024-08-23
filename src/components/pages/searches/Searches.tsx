import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import SearchFilter from './SearchFilter';
import MustGoPlace from './MustGoPlace';

const Searchs = () => {
  return (
    <div>
      <Tabs
        defaultActiveKey="SearchFilter"
        id="bs-nav"
        className="mb-3"
      >
        <Tab eventKey="SearchFilter" title="SearchFilter">
          <SearchFilter />
        </Tab>

        <Tab eventKey="MustGoPlace" title="MustGoPlace">
          <MustGoPlace />
        </Tab>
      </Tabs>
    </div>
  );
}
export default Searchs;