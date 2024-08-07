import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AdvancedAccessibleChart from './accessibility/AdvancedAccessibleChart';
import LineStyles from './accessibility/LineStyles';

const CoreAccessibility = () => {
  return (
    <Row>
      <Col className="col-6 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>Advanced accessible chart</code></div>
          </div>
          <div className="card-body row">
            <AdvancedAccessibleChart />
          </div>
        </div>
      </Col>
      <Col className="col-6 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>Line styles</code></div>
          </div>
          <div className="card-body row">
            <LineStyles />
          </div>
        </div>
      </Col>
    </Row>
  );
}
export default CoreAccessibility;