import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import FixedTooltipWithHTML from './dynamic/FixedTooltipWithHTML';
import ZoomToAreaByDoubleClick from './dynamic/ZoomToAreaByDoubleClick';

const General = () => {
  return (
    <Row>
      <Col className="col-12 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>Fixed tooltip with HTML</code></div>
          </div>
          <div className="card-body row">
            <FixedTooltipWithHTML />
          </div>
        </div>
      </Col>
      <Col className="col-12 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>Zoom to area by double click</code></div>
          </div>
          <div className="card-body row">
            <ZoomToAreaByDoubleClick />
          </div>
        </div>
      </Col>
    </Row>
  );
}
export default General;