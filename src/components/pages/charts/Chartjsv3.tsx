import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import VerticalBar from './chartjs/VerticalBar';
import HorizontalBar from './chartjs/HorizontalBar';
import StackedBar from './chartjs/StackedBar';
import GroupedBar from './chartjs/GroupedBar';
import Area from './chartjs/Area';
import Line from './chartjs/Line';
import MultiaxisLine from './chartjs/MultiaxisLine';
import Pie from './chartjs/Pie';
import Doughnut from './chartjs/Doughnut';
import PolarArea from './chartjs/PolarArea';
import Radar from './chartjs/Radar';
import Scatter from './chartjs/Scatter';
import Bubble from './chartjs/Bubble';
import Multitype from './chartjs/Multitype';
import ChartEvents from './chartjs/ChartEvents';
import ChartRef from './chartjs/ChartRef';
import Gradient from './chartjs/Gradient';

const Chartjsv3 = () => {
  
  return (
    <Row>
      <Col className="col-6 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>Vertical Bar Chart</code></div>
          </div>
          <div className="card-body row">
            <VerticalBar />
          </div>
        </div>
      </Col>
      <Col className="col-6 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>Horizontal Bar Chart</code></div>
          </div>
          <div className="card-body row">
            <HorizontalBar />
          </div>
        </div>
      </Col>
      <Col className="col-6 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>Stacked Bar Chart</code></div>
          </div>
          <div className="card-body row">
            <StackedBar />
          </div>
        </div>
      </Col>
      <Col className="col-6 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>Grouped Bar Chart</code></div>
          </div>
          <div className="card-body row">
            <GroupedBar />
          </div>
        </div>
      </Col>
      <Col className="col-6 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>Area Chart</code></div>
          </div>
          <div className="card-body row">
            <Area />
          </div>
        </div>
      </Col>
      <Col className="col-6 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>Line Chart</code></div>
          </div>
          <div className="card-body row">
            <Line />
          </div>
        </div>
      </Col>
      <Col className="col-6 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>Multiaxis Line Chart</code></div>
          </div>
          <div className="card-body row">
            <MultiaxisLine />
          </div>
        </div>
      </Col>
      <Col className="col-6 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>Scatter Chart</code></div>
          </div>
          <div className="card-body row">
            <Scatter />
          </div>
        </div>
      </Col>
      <Col className="col-6 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>Pie Chart</code></div>
          </div>
          <div className="card-body row">
            <Pie />
          </div>
        </div>
      </Col>
      <Col className="col-6 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>Doughnut Chart</code></div>
          </div>
          <div className="card-body row">
            <Doughnut />
          </div>
        </div>
      </Col>
      <Col className="col-6 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>Polar Area Chart</code></div>
          </div>
          <div className="card-body row">
            <PolarArea />
          </div>
        </div>
      </Col>
      <Col className="col-6 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>Radar Chart</code></div>
          </div>
          <div className="card-body row">
            <Radar />
          </div>
        </div>
      </Col>
      <Col className="col-6 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>Bubble Chart</code></div>
          </div>
          <div className="card-body row">
            <Bubble />
          </div>
        </div>
      </Col>
      <Col className="col-6 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>Multitype Chart</code></div>
          </div>
          <div className="card-body row">
            <Multitype />
          </div>
        </div>
      </Col>
      <Col className="col-6 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>Chart Events</code></div>
          </div>
          <div className="card-body row">
            <ChartEvents />
          </div>
        </div>
      </Col>
      <Col className="col-6 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>Chart Ref</code></div>
          </div>
          <div className="card-body row">
            <ChartRef />
          </div>
        </div>
      </Col>
      <Col className="col-6 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>Gradient Chart</code></div>
          </div>
          <div className="card-body row">
            <Gradient />
          </div>
        </div>
      </Col>
    </Row>
  );
}
export default Chartjsv3;