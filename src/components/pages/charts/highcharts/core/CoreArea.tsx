import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import BasicArea from './area/BasicArea';
import PercentageArea from './area/PercentageArea';
import StackedArea from './area/StackedArea';
import AreaSpline from './area/AreaSpline';
import InvertedAxes from './area/InvertedAxes';
import AreaWithNegativeValues from './area/AreaWithNegativeValues';
import AreaRangeAndLine from './area/AreaRangeAndLine';
import FanChart from './area/FanChart';
import AreaWithMissingPoints from './area/AreaWithMissingPoints';
import StackedInvertedArea from './area/StackedInvertedArea';

const Core = () => {
  return (
    <Row>
      <Col className="col-6 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>Basic area</code></div>
          </div>
          <div className="card-body row">
            <BasicArea />
          </div>
        </div>
      </Col>
      <Col className="col-6 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>Percentage area</code></div>
          </div>
          <div className="card-body row">
            <PercentageArea />
          </div>
        </div>
      </Col>
      <Col className="col-6 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>Stacked area</code></div>
          </div>
          <div className="card-body row">
            <StackedArea />
          </div>
        </div>
      </Col>
      <Col className="col-6 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>Area-spline</code></div>
          </div>
          <div className="card-body row">
            <AreaSpline />
          </div>
        </div>
      </Col>
      <Col className="col-6 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>Inverted axes</code></div>
          </div>
          <div className="card-body row">
            <InvertedAxes />
          </div>
        </div>
      </Col>
      <Col className="col-6 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>Area with negative values</code></div>
          </div>
          <div className="card-body row">
            <AreaWithNegativeValues />
          </div>
        </div>
      </Col>
      <Col className="col-6 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>Area range and line</code></div>
          </div>
          <div className="card-body row">
            <AreaRangeAndLine />
          </div>
        </div>
      </Col>
      <Col className="col-6 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>Fan chart</code></div>
          </div>
          <div className="card-body row">
            <FanChart />
          </div>
        </div>
      </Col>
      <Col className="col-6 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>Area with missing points</code></div>
          </div>
          <div className="card-body row">
            <AreaWithMissingPoints />
          </div>
        </div>
      </Col>
      <Col className="col-6 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>Stacked inverted area</code></div>
          </div>
          <div className="card-body row">
            <StackedInvertedArea />
          </div>
        </div>
      </Col>
    </Row>
  );
}
export default Core;