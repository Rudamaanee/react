import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PageTitArea from '../layout/PageTitArea';

const Flex = () => {
  return (
    <>
      <PageTitArea pageTitHeading="Flex" pageTitSubHeading="" />

      <Row>
        <Col className='col-12'>
          <div className="card btn-box mb-3">
            <div className="card-header">
              <div className="card-title">Flex Behaviors</div>
            </div>
            <div className="card-body">
              <div className="d-flex p-2 bg-body-secondary mb-2">Flexbox container!</div>
              <div className="d-inline-flex p-2 bg-body-secondary">Inline flexbox container!</div>
            </div>
          </div>
        </Col>
      </Row>

      <Row>
        <Col className='col-12'>
          <div className="card btn-box mb-3">
            <div className="card-header">
              <div className="card-title">Direction Row</div>
            </div>
            <div className="card-body">
              <div className="d-flex bg-body-secondary mb-3 flex-row">
                <div className="p-2 bg-body-secondary border">Flex item 1</div>
                <div className="p-2 bg-body-secondary border">Flex item 2</div>
                <div className="p-2 bg-body-secondary border">Flex item 3</div>
              </div>
              <div className="d-flex bg-body-secondary mb-3 flex-row-reverse">
                <div className="p-2 bg-body-secondary border">Flex item 1</div>
                <div className="p-2 bg-body-secondary border">Flex item 2</div>
                <div className="p-2 bg-body-secondary border">Flex item 3</div>
              </div>
            </div>
          </div>
        </Col>
      </Row>

      <Row>
        <Col className='col-12'>
          <div className="card btn-box mb-3">
            <div className="card-header">
              <div className="card-title">Direction Column</div>
            </div>
            <div className="card-body">
              <div className="d-flex bg-body-secondary mb-3 flex-column">
                <div className="p-2 bg-body-secondary border">Flex item 1</div>
                <div className="p-2 bg-body-secondary border">Flex item 2</div>
                <div className="p-2 bg-body-secondary border">Flex item 3</div>
              </div>
              <div className="d-flex bg-body-secondary mb-3 flex-column-reverse">
                <div className="p-2 bg-body-secondary border">Flex item 1</div>
                <div className="p-2 bg-body-secondary border">Flex item 2</div>
                <div className="p-2 bg-body-secondary border">Flex item 3</div>
              </div>
            </div>
          </div>
        </Col>
      </Row>

      <Row>
        <Col className='col-12'>
          <div className="card btn-box mb-3">
            <div className="card-header">
              <div className="card-title">Justify Content</div>
            </div>
            <div className="card-body">
              <div className="d-flex justify-content-start bg-body-secondary mb-2">
                <div className="p-2 bg-body-secondary border">Flex Item</div>
              </div>
              <div className="d-flex justify-content-end bg-body-secondary mb-2">
                <div className="p-2 bg-body-secondary border">Flex Item</div>
              </div>
              <div className="d-flex justify-content-center bg-body-secondary mb-2">
                <div className="p-2 bg-body-secondary border">Flex Item</div>
              </div>
              <div className="d-flex justify-content-between bg-body-secondary mb-2">
                <div className="p-2 bg-body-secondary border">Flex Item</div>
              </div>
              <div className="d-flex justify-content-around bg-body-secondary mb-2">
                <div className="p-2 bg-body-secondary border">Flex Item</div>
              </div>
            </div>
          </div>
        </Col>
      </Row>

      <Row>
        <Col className='col-12'>
          <div className="card btn-box mb-3">
            <div className="card-header">
              <div className="card-title">Align items</div>
            </div>
            <div className="card-body">
              <div className="d-flex align-items-start bg-body-secondary mb-2" style={{height: '5rem'}}>
                <div className="p-2 bg-body-secondary border">Flex item</div>
              </div>
              <div className="d-flex align-items-end bg-body-secondary mb-2" style={{height: '5rem'}}>
                <div className="p-2 bg-body-secondary border">Flex item</div>
              </div>
              <div className="d-flex align-items-center bg-body-secondary mb-2" style={{height: '5rem'}}>
                <div className="p-2 bg-body-secondary border">Flex item</div>
              </div>
              <div className="d-flex align-items-baseline bg-body-secondary mb-2" style={{height: '5rem'}}>
                <div className="p-2 bg-body-secondary border">Flex item</div>
              </div>
              <div className="d-flex align-items-stretch bg-body-secondary mb-2" style={{height: '5rem'}}>
                <div className="p-2 bg-body-secondary border">Flex item</div>
              </div>
            </div>
          </div>
        </Col>
      </Row>

      <Row>
        <Col className='col-12'>
          <div className="card btn-box mb-3">
            <div className="card-header">
              <div className="card-title">Align self</div>
            </div>
            <div className="card-body">
              <div className="d-flex bg-body-secondary mb-2" style={{height: '5rem'}}>
                <div className="border p-2 bg-body-secondary">Flex Item</div>
                <div className="border p-2 bg-body-secondary align-self-start">Align self start</div>
                <div className="border p-2 bg-body-secondary">Flex Item</div>
              </div>
              <div className="d-flex bg-body-secondary mb-2" style={{height: '5rem'}}>
                <div className="border p-2 bg-body-secondary">Flex Item</div>
                <div className="border p-2 bg-body-secondary align-self-end">Align self end</div>
                <div className="border p-2 bg-body-secondary">Flex Item</div>
              </div>
              <div className="d-flex bg-body-secondary mb-2" style={{height: '5rem'}}>
                <div className="border p-2 bg-body-secondary">Flex Item</div>
                <div className="border p-2 bg-body-secondary align-self-center">Align self center</div>
                <div className="border p-2 bg-body-secondary">Flex Item</div>
              </div>
              <div className="d-flex bg-body-secondary mb-2" style={{height: '5rem'}}>
                <div className="border p-2 bg-body-secondary">Flex Item</div>
                <div className="border p-2 bg-body-secondary align-self-baseline">Align self baseline</div>
                <div className="border p-2 bg-body-secondary">Flex Item</div>
              </div>
              <div className="d-flex bg-body-secondary mb-2" style={{height: '5rem'}}>
                <div className="border p-2 bg-body-secondary">Flex Item</div>
                <div className="border p-2 bg-body-secondary align-self-stretch">Align self stretch</div>
                <div className="border p-2 bg-body-secondary">Flex Item</div>
              </div>
            </div>
          </div>
        </Col>
      </Row>

      <Row>
        <Col className='col-12'>
          <div className="card btn-box mb-3">
            <div className="card-header">
              <div className="card-title">Fill</div>
            </div>
            <div className="card-body">
              <div className="d-flex bg-body-secondary">
                <div className="p-2 flex-fill bg-body-secondary border">Flex item with a lot of content</div>
                <div className="p-2 flex-fill bg-body-secondary border">Flex item</div>
                <div className="p-2 flex-fill bg-body-secondary border">Flex item</div>
              </div>
            </div>
          </div>
        </Col>
      </Row>

      <Row>
        <Col className='col-12'>
          <div className="card btn-box mb-3">
            <div className="card-header">
              <div className="card-title">Flex Grow</div>
            </div>
            <div className="card-body">
              <div className="d-flex bg-body-secondary">
                <div className="p-2 flex-grow-1 bg-body-secondary border">Flex item</div>
                <div className="p-2 bg-body-secondary border">Flex item</div>
                <div className="p-2 bg-body-secondary border">Third flex item</div>
              </div>
            </div>
          </div>
        </Col>
      </Row>

      <Row>
        <Col className='col-12'>
          <div className="card btn-box mb-3">
            <div className="card-header">
              <div className="card-title">Flex Shrink</div>
            </div>
            <div className="card-body">
              <div className="d-flex bg-body-secondary">
                <div className="p-2 w-100 bg-body-secondary border">Flex item</div>
                <div className="p-2 flex-shrink-1 bg-body-secondary border">Flex item</div>
              </div>
            </div>
          </div>
        </Col>
      </Row>

      <Row>
        <Col className='col-12'>
          <div className="card btn-box mb-3">
            <div className="card-header">
              <div className="card-title">Auto margins</div>
            </div>
            <div className="card-body">
              <div className="d-flex bg-body-secondary mb-2">
                <div className="p-2 bg-body-secondary border">Flex item</div>
                <div className="p-2 bg-body-secondary border">Flex item</div>
                <div className="p-2 bg-body-secondary border">Flex item</div>
              </div>
              <div className="d-flex bg-body-secondary mb-2">
                <div className="me-auto p-2 bg-body-secondary border">Flex item</div>
                <div className="p-2 bg-body-secondary border">Flex item</div>
                <div className="p-2 bg-body-secondary border">Flex item</div>
              </div>
              <div className="d-flex bg-body-secondary mb-2">
                <div className="p-2 bg-body-secondary border">Flex item</div>
                <div className="p-2 bg-body-secondary border">Flex item</div>
                <div className="ms-auto p-2 bg-body-secondary border">Flex item</div>
              </div>
            </div>
          </div>
        </Col>
      </Row>

      <Row>
        <Col className='col-12'>
          <div className="card btn-box mb-3">
            <div className="card-header">
              <div className="card-title">With align-items</div>
            </div>
            <div className="card-body">
              <div className="d-flex flex-column bg-body-secondary mb-3 align-items-start" style={{height: "200px;"}}>
                <div className="mb-auto p-2 bg-body-secondary border">Flex item</div>
                <div className="p-2 bg-body-secondary border">Flex item</div>
                <div className="p-2 bg-body-secondary border">Flex item</div>
              </div>
              <div className="d-flex flex-column bg-body-secondary mb-3 align-items-end" style={{height: "200px;"}}>
                <div className="mb-auto p-2 bg-body-secondary border">Flex item</div>
                <div className="p-2 bg-body-secondary border">Flex item</div>
                <div className="p-2 bg-body-secondary border">Flex item</div>
              </div>
            </div>
          </div>
        </Col>
      </Row>

      <Row>
        <Col className='col-12'>
          <div className="card btn-box mb-3">
            <div className="card-header">
              <div className="card-title">Wrap</div>
            </div>
            <div className="card-body">
              <div className="d-flex flex-nowrap mb-3 bg-body-secondary border py-3" style={{width: "8rem"}}>
                <div className="p-2 bg-body-secondary border">Flex item</div>
                <div className="p-2 bg-body-secondary border">Flex item</div>
                <div className="p-2 bg-body-secondary border">Flex item</div>
                <div className="p-2 bg-body-secondary border">Flex item</div>
                <div className="p-2 bg-body-secondary border">Flex item</div>
              </div>
              <div className="d-flex mb-3 bg-body-secondary border flex-wrap">
                <div className="p-2 bg-body-secondary border">Flex item</div>
                <div className="p-2 bg-body-secondary border">Flex item</div>
                <div className="p-2 bg-body-secondary border">Flex item</div>
                <div className="p-2 bg-body-secondary border">Flex item</div>
                <div className="p-2 bg-body-secondary border">Flex item</div>
                <div className="p-2 bg-body-secondary border">Flex item</div>
                <div className="p-2 bg-body-secondary border">Flex item</div>
                <div className="p-2 bg-body-secondary border">Flex item</div>
                <div className="p-2 bg-body-secondary border">Flex item</div>
                <div className="p-2 bg-body-secondary border">Flex item</div>
                <div className="p-2 bg-body-secondary border">Flex item</div>
                <div className="p-2 bg-body-secondary border">Flex item</div>
                <div className="p-2 bg-body-secondary border">Flex item</div>
                <div className="p-2 bg-body-secondary border">Flex item</div>
              </div>
              <div className="d-flex mb-3 bg-body-secondary border flex-wrap-reverse">
                <div className="p-2 bg-body-secondary border">Flex item</div>
                <div className="p-2 bg-body-secondary border">Flex item</div>
                <div className="p-2 bg-body-secondary border">Flex item</div>
                <div className="p-2 bg-body-secondary border">Flex item</div>
                <div className="p-2 bg-body-secondary border">Flex item</div>
                <div className="p-2 bg-body-secondary border">Flex item</div>
                <div className="p-2 bg-body-secondary border">Flex item</div>
                <div className="p-2 bg-body-secondary border">Flex item</div>
                <div className="p-2 bg-body-secondary border">Flex item</div>
                <div className="p-2 bg-body-secondary border">Flex item</div>
                <div className="p-2 bg-body-secondary border">Flex item</div>
                <div className="p-2 bg-body-secondary border">Flex item</div>
                <div className="p-2 bg-body-secondary border">Flex item</div>
                <div className="p-2 bg-body-secondary border">Flex item</div>
              </div>
            </div>
          </div>
        </Col>
      </Row>

      <Row>
        <Col className='col-12'>
          <div className="card btn-box mb-3">
            <div className="card-header">
              <div className="card-title">Order</div>
            </div>
            <div className="card-body">
              <div className="d-flex flex-nowrap bg-body-secondary">
                <div className="order-3 p-2 bg-body-secondary border">First flex item</div>
                <div className="order-2 p-2 bg-body-secondary border">Second flex item</div>
                <div className="order-1 p-2 bg-body-secondary border">Third flex item</div>
              </div>
            </div>
          </div>
        </Col>
      </Row>

      <Row>
        <Col className='col-12'>
          <div className="card btn-box mb-3">
            <div className="card-header">
              <div className="card-title">Aligh content</div>
            </div>
            <div className="card-body">
              <div className="d-flex flex-wrap bg-body-secondary mb-3 align-content-start" style={{height: "300px;"}}>
                <div className="p-2 bg-body-secondary border">Flex item</div>
                <div className="p-2 bg-body-secondary border">Flex item</div>
                <div className="p-2 bg-body-secondary border">Flex item</div>
                <div className="p-2 bg-body-secondary border">Flex item</div>
                <div className="p-2 bg-body-secondary border">Flex item</div>
                <div className="p-2 bg-body-secondary border">Flex item</div>
                <div className="p-2 bg-body-secondary border">Flex item</div>
                <div className="p-2 bg-body-secondary border">Flex item</div>
                <div className="p-2 bg-body-secondary border">Flex item</div>
                <div className="p-2 bg-body-secondary border">Flex item</div>
                <div className="p-2 bg-body-secondary border">Flex item</div>
                <div className="p-2 bg-body-secondary border">Flex item</div>
                <div className="p-2 bg-body-secondary border">Flex item</div>
                <div className="p-2 bg-body-secondary border">Flex item</div>
              </div>
              <div className="d-flex flex-wrap bg-body-secondary mb-3 align-content-center" style={{height: "300px;"}}>
                <div className="p-2 bg-body-secondary border">Flex item</div>
                <div className="p-2 bg-body-secondary border">Flex item</div>
                <div className="p-2 bg-body-secondary border">Flex item</div>
                <div className="p-2 bg-body-secondary border">Flex item</div>
                <div className="p-2 bg-body-secondary border">Flex item</div>
                <div className="p-2 bg-body-secondary border">Flex item</div>
                <div className="p-2 bg-body-secondary border">Flex item</div>
                <div className="p-2 bg-body-secondary border">Flex item</div>
                <div className="p-2 bg-body-secondary border">Flex item</div>
                <div className="p-2 bg-body-secondary border">Flex item</div>
                <div className="p-2 bg-body-secondary border">Flex item</div>
                <div className="p-2 bg-body-secondary border">Flex item</div>
                <div className="p-2 bg-body-secondary border">Flex item</div>
                <div className="p-2 bg-body-secondary border">Flex item</div>
              </div>
              <div className="d-flex flex-wrap bg-body-secondary mb-3 align-content-end" style={{height: "300px;"}}>
                <div className="p-2 bg-body-secondary border">Flex item</div>
                <div className="p-2 bg-body-secondary border">Flex item</div>
                <div className="p-2 bg-body-secondary border">Flex item</div>
                <div className="p-2 bg-body-secondary border">Flex item</div>
                <div className="p-2 bg-body-secondary border">Flex item</div>
                <div className="p-2 bg-body-secondary border">Flex item</div>
                <div className="p-2 bg-body-secondary border">Flex item</div>
                <div className="p-2 bg-body-secondary border">Flex item</div>
                <div className="p-2 bg-body-secondary border">Flex item</div>
                <div className="p-2 bg-body-secondary border">Flex item</div>
                <div className="p-2 bg-body-secondary border">Flex item</div>
                <div className="p-2 bg-body-secondary border">Flex item</div>
                <div className="p-2 bg-body-secondary border">Flex item</div>
                <div className="p-2 bg-body-secondary border">Flex item</div>
              </div>
              <div className="d-flex flex-wrap bg-body-secondary mb-3 align-content-between" style={{height: "300px;"}}>
                <div className="p-2 bg-body-secondary border">Flex item</div>
                <div className="p-2 bg-body-secondary border">Flex item</div>
                <div className="p-2 bg-body-secondary border">Flex item</div>
                <div className="p-2 bg-body-secondary border">Flex item</div>
                <div className="p-2 bg-body-secondary border">Flex item</div>
                <div className="p-2 bg-body-secondary border">Flex item</div>
                <div className="p-2 bg-body-secondary border">Flex item</div>
                <div className="p-2 bg-body-secondary border">Flex item</div>
                <div className="p-2 bg-body-secondary border">Flex item</div>
                <div className="p-2 bg-body-secondary border">Flex item</div>
                <div className="p-2 bg-body-secondary border">Flex item</div>
                <div className="p-2 bg-body-secondary border">Flex item</div>
                <div className="p-2 bg-body-secondary border">Flex item</div>
                <div className="p-2 bg-body-secondary border">Flex item</div>
              </div>
              <div className="d-flex flex-wrap bg-body-secondary mb-3 align-content-around" style={{height: "300px;"}}>
                <div className="p-2 bg-body-secondary border">Flex item</div>
                <div className="p-2 bg-body-secondary border">Flex item</div>
                <div className="p-2 bg-body-secondary border">Flex item</div>
                <div className="p-2 bg-body-secondary border">Flex item</div>
                <div className="p-2 bg-body-secondary border">Flex item</div>
                <div className="p-2 bg-body-secondary border">Flex item</div>
                <div className="p-2 bg-body-secondary border">Flex item</div>
                <div className="p-2 bg-body-secondary border">Flex item</div>
                <div className="p-2 bg-body-secondary border">Flex item</div>
                <div className="p-2 bg-body-secondary border">Flex item</div>
                <div className="p-2 bg-body-secondary border">Flex item</div>
                <div className="p-2 bg-body-secondary border">Flex item</div>
                <div className="p-2 bg-body-secondary border">Flex item</div>
                <div className="p-2 bg-body-secondary border">Flex item</div>
              </div>
              <div className="d-flex flex-wrap bg-body-secondary mb-3 align-content-stretch" style={{height: "300px;"}}>
                <div className="p-2 bg-body-secondary border">Flex item</div>
                <div className="p-2 bg-body-secondary border">Flex item</div>
                <div className="p-2 bg-body-secondary border">Flex item</div>
                <div className="p-2 bg-body-secondary border">Flex item</div>
                <div className="p-2 bg-body-secondary border">Flex item</div>
                <div className="p-2 bg-body-secondary border">Flex item</div>
                <div className="p-2 bg-body-secondary border">Flex item</div>
                <div className="p-2 bg-body-secondary border">Flex item</div>
                <div className="p-2 bg-body-secondary border">Flex item</div>
                <div className="p-2 bg-body-secondary border">Flex item</div>
                <div className="p-2 bg-body-secondary border">Flex item</div>
                <div className="p-2 bg-body-secondary border">Flex item</div>
                <div className="p-2 bg-body-secondary border">Flex item</div>
                <div className="p-2 bg-body-secondary border">Flex item</div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Flex;
