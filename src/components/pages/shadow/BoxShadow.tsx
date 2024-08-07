import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const BoxShadow = () => {

  return (
    <Row>
      {Array(96).fill(0).map((_, i) => (
        <Col className='col-2 mb-5' key={'n' + i}>
          <div className={"ex box-shadow n" + (i)}>
            #{i}
          </div>
        </Col>
      ))}
    </Row>
  );
};

export default BoxShadow;
