import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import FlagsPlacement from './flagsAndTechnicalIndicators/FlagsPlacement';
import SMAAndVolumeByPrice from './flagsAndTechnicalIndicators/SMAAndVolumeByPrice';
import MACDAndPivotPoints from './flagsAndTechnicalIndicators/MACDAndPivotPoints';
import TechnicalAnalysisWithAnnotations from './flagsAndTechnicalIndicators/TechnicalAnalysisWithAnnotations';
import FlagsShapesAndColors from './flagsAndTechnicalIndicators/FlagsShapesAndColors';

const FlagsAndTechnicalIndicators = () => {
  return (
    <Row>
      <Col className="col-12 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>Flags placement</code></div>
          </div>
          <div className="card-body row">
            <FlagsPlacement />
          </div>
        </div>
      </Col>
      <Col className="col-12 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>SMA and Volume by price</code></div>
          </div>
          <div className="card-body row">
            <SMAAndVolumeByPrice />
          </div>
        </div>
      </Col>
      <Col className="col-12 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>MACD and Pivot points</code></div>
          </div>
          <div className="card-body row">
            <MACDAndPivotPoints />
          </div>
        </div>
      </Col>
      <Col className="col-12 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>Technical analysis with annotations</code></div>
          </div>
          <div className="card-body row">
            <TechnicalAnalysisWithAnnotations />
          </div>
        </div>
      </Col>
      <Col className="col-12 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>Flags shapes and colors</code></div>
          </div>
          <div className="card-body row">
            <FlagsShapesAndColors />
          </div>
        </div>
      </Col>
    </Row>
  );
}
export default FlagsAndTechnicalIndicators;