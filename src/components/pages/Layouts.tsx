import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ImgSrc from '../../assets/images/dummy/carousels1.svg'

const Layouts = () => {
  return (
    <div className="guideWrap layouts">
      <h2>Layouts</h2>
      <Container fluid>
        <Row>
          <Col className="item col-full">Header</Col>
        </Row>
        <Row className=''>
          <Col className="item lnb">Lnb</Col>
          <Col className="item content">
            <div className="flex-container">
              <div className=""><img src={ImgSrc} alt="" /></div>
              <div className="">B</div>
              <div className="">C</div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="item col-full">Footer</Col>
        </Row>
      </Container>
    </div>
  );
};

export default Layouts;
