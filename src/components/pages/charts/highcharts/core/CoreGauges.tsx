import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import GaugeSeries from './gauges/GaugeSeries';
// import MultipleKPIGauge from './gauges/MultipleKPIGauge';

const CoreGauges = () => {
  return (
    <Row>
      <Col className="col-6 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>Gauge series</code></div>
          </div>
          <div className="card-body row">
            {/* <GaugeSeries /> */}
          </div>
        </div>
      </Col>
      <Col className="col-6 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>Multiple KPI gauge</code></div>
          </div>
          <div className="card-body row">
            {/* <MultipleKPIGauge /> */}
          </div>
        </div>
      </Col>
    </Row>
  );
}
export default CoreGauges;