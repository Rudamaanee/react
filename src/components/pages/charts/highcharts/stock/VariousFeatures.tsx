import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import ResponsiveChart from './variousFeatures/ResponsiveChart';
import StandalonInvertedNavigatorMaskeNavigator from './variousFeatures/StandalonInvertedNavigatorMaskeNavigator';
import DisabledScrollbar from './variousFeatures/DisabledScrollbar';
import StyledScrollbar from './variousFeatures/StyledScrollbar';
import ReversedYAxis from './variousFeatures/ReversedYAxis';
import PlotBandsOnYAxis from './variousFeatures/PlotBandsOnYAxis';
import PlotLinesOnYAxis from './variousFeatures/PlotLinesOnYAxis';
import DisabledNavigator from './variousFeatures/DisabledNavigator';
import RangeSelectorWithDataGrouping from './variousFeatures/RangeSelectorWithDataGrouping';
import InvertedNavigator from './variousFeatures/InvertedNavigator';

const VariousFeatures = () => {
  return (
    <Row>
      <Col className="col-12 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>Responsive chart</code></div>
          </div>
          <div className="card-body row">
            <ResponsiveChart />
          </div>
        </div>
      </Col>
      <Col className="col-12 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>Inverted navigator mask</code></div>
          </div>
          <div className="card-body row">
            <StandalonInvertedNavigatorMaskeNavigator />
          </div>
        </div>
      </Col>
      <Col className="col-12 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>Disabled scrollbar</code></div>
          </div>
          <div className="card-body row">
            <DisabledScrollbar />
          </div>
        </div>
      </Col>
      <Col className="col-12 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>Styled scrollbar</code></div>
          </div>
          <div className="card-body row">
            <StyledScrollbar />
          </div>
        </div>
      </Col>
      <Col className="col-12 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>Reversed Y axis</code></div>
          </div>
          <div className="card-body row">
            <ReversedYAxis />
          </div>
        </div>
      </Col>
      <Col className="col-12 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>Plot bands on Y axis</code></div>
          </div>
          <div className="card-body row">
            <PlotBandsOnYAxis />
          </div>
        </div>
      </Col>
      <Col className="col-12 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>Plot lines on Y axis</code></div>
          </div>
          <div className="card-body row">
            <PlotLinesOnYAxis />
          </div>
        </div>
      </Col>
      <Col className="col-12 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>Disabled navigator</code></div>
          </div>
          <div className="card-body row">
            <DisabledNavigator />
          </div>
        </div>
      </Col>
      <Col className="col-12 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>Range selector with data grouping</code></div>
          </div>
          <div className="card-body row">
            <RangeSelectorWithDataGrouping />
          </div>
        </div>
      </Col>
      <Col className="col-12 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>Inverted navigator</code></div>
          </div>
          <div className="card-body row">
            <InvertedNavigator />
          </div>
        </div>
      </Col>
    </Row>
  );
}
export default VariousFeatures;