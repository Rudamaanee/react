import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import StyledModeColumn from './styledMode/StyledModeColumn';
import StyledModePie from './styledMode/StyledModePie';

const CorestyledMode = () => {
  return (
    <Row>
      <Col className="col-6 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>Styled mode column</code></div>
          </div>
          <div className="card-body row">
            <StyledModeColumn />
          </div>
        </div>
      </Col>
      <Col className="col-6 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>Styled mode pie</code></div>
          </div>
          <div className="card-body row">
            <StyledModePie />
          </div>
        </div>
      </Col>
    </Row>
  );
}
export default CorestyledMode;