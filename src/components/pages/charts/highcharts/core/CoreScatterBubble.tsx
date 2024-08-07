import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import BubbleChart from './scatterBubble/BubbleChart';
import ScatterPlotWithJitter from './scatterBubble/ScatterPlotWithJitter';
import PackedBubbleChart from './scatterBubble/PackedBubbleChart';
import SplitPackedBubbleChart from './scatterBubble/SplitPackedBubbleChart';
import ThreeDBubbles from './scatterBubble/ThreeDBubbles';

const CoreScatterBubble = () => {
  return (
    <Row>
      <Col className="col-6 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>Bubble chart</code></div>
          </div>
          <div className="card-body row">
            <BubbleChart />
          </div>
        </div>
      </Col>
      <Col className="col-6 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>Scatter plot with jitter</code></div>
          </div>
          <div className="card-body row">
            <ScatterPlotWithJitter />
          </div>
        </div>
      </Col>
      <Col className="col-6 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>Packed bubble chart</code></div>
          </div>
          <div className="card-body row">
            <PackedBubbleChart />
          </div>
        </div>
      </Col>
      <Col className="col-6 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>Split Packed bubble chart</code></div>
          </div>
          <div className="card-body row">
            <SplitPackedBubbleChart />
          </div>
        </div>
      </Col>
      <Col className="col-6 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>3D bubbles</code></div>
          </div>
          <div className="card-body row">
            <ThreeDBubbles />
          </div>
        </div>
      </Col>
    </Row>
  );
}
export default CoreScatterBubble;