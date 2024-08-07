import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LineChart from './Line/LineChart';
import SplineWithSymbols from './Line/SplineWithSymbols';
import WithDataLabels from './Line/WithDataLabels';
import SplineWithInvertedAxes from './Line/SplineWithInvertedAxes';
import LogarithmicAxis from './Line/LogarithmicAxis';
import WithAnnotations from './Line/WithAnnotations';
import LineChartWith500kPoints from './Line/LineChartWith500kPoints';
import SplineWithPlotBands from './Line/SplineWithPlotBands';
import TimeDataWithIrreqular from './Line/TimeDataWithIrreqular';

const CoreLine = () => {
  return (
    <Row>
      <Col className="col-12 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>Line Chart</code></div>
          </div>
          <div className="card-body row">
            <LineChart />
          </div>
        </div>
      </Col>
      <Col className="col-6 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>Spline with symbols</code></div>
          </div>
          <div className="card-body row">
            <SplineWithSymbols />
          </div>
        </div>
      </Col>
      <Col className="col-6 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>With data labels</code></div>
          </div>
          <div className="card-body row">
            <WithDataLabels />
          </div>
        </div>
      </Col>
      <Col className="col-6 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>Spline with inverted axes</code></div>
          </div>
          <div className="card-body row">
            <SplineWithInvertedAxes />
          </div>
        </div>
      </Col>
      <Col className="col-6 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>Logarithmic axis</code></div>
          </div>
          <div className="card-body row">
            <LogarithmicAxis />
          </div>
        </div>
      </Col>
      <Col className="col-6 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>With annotations</code></div>
          </div>
          <div className="card-body row">
            <WithAnnotations />
          </div>
        </div>
      </Col>
      <Col className="col-6 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>Line chart with 500k points</code></div>
          </div>
          <div className="card-body row">
            <LineChartWith500kPoints />
          </div>
        </div>
      </Col>
      <Col className="col-6 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>Spline with plot bands</code></div>
          </div>
          <div className="card-body row">
            <SplineWithPlotBands />
          </div>
        </div>
      </Col>
      <Col className="col-6 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>Time data with irregular intervals</code></div>
          </div>
          <div className="card-body row">
            <TimeDataWithIrreqular />
          </div>
        </div>
      </Col>
    </Row>
  );
}
export default CoreLine;