import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MultipleAxes from './combinations/MultipleAxes';
import DualAxes from './combinations/DualAxes';
import ScatterWithTrendLine from './combinations/ScatterWithTrendLine';
import ColumnLineAndPie from './combinations/ColumnLineAndPie';

const CoreScatterBubble = () => {
  return (
    <Row>
      <Col className="col-6 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>Multiple axes</code></div>
          </div>
          <div className="card-body row">
            <MultipleAxes />
          </div>
        </div>
      </Col>
      <Col className="col-6 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>Dual axes, line and column</code></div>
          </div>
          <div className="card-body row">
            <DualAxes />
          </div>
        </div>
      </Col>
      <Col className="col-6 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>Scatter with trend line</code></div>
          </div>
          <div className="card-body row">
            <ScatterWithTrendLine />
          </div>
        </div>
      </Col>
      <Col className="col-6 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>Column, line and pie</code></div>
          </div>
          <div className="card-body row">
            <ColumnLineAndPie />
          </div>
        </div>
      </Col>
    </Row>
  );
}
export default CoreScatterBubble;