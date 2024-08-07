import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PageTitArea from '../layout/PageTitArea';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

const Breadcrumbs = () => {
  return (
    <>
      <PageTitArea pageTitHeading="Breadcrumbs" pageTitSubHeading="" />

      <Row>
        <Col className='col-12'>
          <div className="card btn-box mb-3">
            <div className="card-header">
              <div className="card-title">Breadcrumbs</div>
            </div>
            <div className="card-body">
              <Breadcrumb>
                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                  Library
                </Breadcrumb.Item>
                <Breadcrumb.Item active>Data</Breadcrumb.Item>
              </Breadcrumb>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Breadcrumbs;
