import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PieChart from './pie/PieChart';
import DonutChart from './pie/DonutChart';
import PieWithMonochromeFill from './pie/PieWithMonochromeFill';
import PieWithLegend from './pie/PieWithLegend';
import PieWithDrilldown from './pie/PieWithDrilldown';
import PieWithGradientFill from './pie/PieWithGradientFill';
import SemiCircleDonut from './pie/SemiCircleDonut';

const CorePie = () => {
  return (
    <Row>
      <Col className="col-6 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>Pie chart</code></div>
          </div>
          <div className="card-body row">
            <PieChart />
          </div>
        </div>
      </Col>
      <Col className="col-6 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>Donut chart</code></div>
          </div>
          <div className="card-body row">
            <DonutChart />
          </div>
        </div>
      </Col>
      <Col className="col-6 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>Pie with monochrome fill</code></div>
          </div>
          <div className="card-body row">
            <PieWithMonochromeFill />
          </div>
        </div>
      </Col>
      <Col className="col-6 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>Pie with legend</code></div>
          </div>
          <div className="card-body row">
            <PieWithLegend />
          </div>
        </div>
      </Col>
      <Col className="col-6 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>Pie with drilldown</code></div>
          </div>
          <div className="card-body row">
            <PieWithDrilldown />
          </div>
        </div>
      </Col>
      <Col className="col-6 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>Pie with gradient fill</code></div>
          </div>
          <div className="card-body row">
            <PieWithGradientFill />
          </div>
        </div>
      </Col>
      <Col className="col-6 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>Semi circle donut</code></div>
          </div>
          <div className="card-body row">
            <SemiCircleDonut />
          </div>
        </div>
      </Col>
    </Row>
  );
}
export default CorePie;