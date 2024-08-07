import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ThreeDColumnWithStackingAndGrouping from './3d/ThreeDColumnWithStackingAndGrouping';
import TheeDDonut from './3d/TheeDDonut';
import TheeDFunnel from './3d/TheeDFunnel';
import TheeDAreaChart from './3d/TheeDAreaChart';
import TheeDPyramid from './3d/TheeDPyramid';
import TheeDColumnWithNullAnd0Values from './3d/TheeDColumnWithNullAnd0Values';
import TheeDPie from './3d/TheeDPie';
import TheeDCylinder from './3d/TheeDCylinder';

const Core3D = () => {
  return (
    <Row>
      <Col className="col-6 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>3D column with stacking and grouping</code></div>
          </div>
          <div className="card-body row">
            <ThreeDColumnWithStackingAndGrouping />
          </div>
        </div>
      </Col>
      <Col className="col-6 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>3D donut</code></div>
          </div>
          <div className="card-body row">
            <TheeDDonut />
          </div>
        </div>
      </Col>
      <Col className="col-6 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>3D funnel</code></div>
          </div>
          <div className="card-body row">
            <TheeDFunnel />
          </div>
        </div>
      </Col>
      <Col className="col-6 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>3D area chart</code></div>
          </div>
          <div className="card-body row">
            <TheeDAreaChart />
          </div>
        </div>
      </Col>
      <Col className="col-6 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>3D pyramid</code></div>
          </div>
          <div className="card-body row">
            <TheeDPyramid />
          </div>
        </div>
      </Col>
      <Col className="col-6 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>3D column with null and 0 values</code></div>
          </div>
          <div className="card-body row">
            <TheeDColumnWithNullAnd0Values />
          </div>
        </div>
      </Col>
      <Col className="col-6 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>3D pie</code></div>
          </div>
          <div className="card-body row">
            <TheeDPie />
          </div>
        </div>
      </Col>
      <Col className="col-6 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>3D cylinder</code></div>
          </div>
          <div className="card-body row">
            <TheeDCylinder />
          </div>
        </div>
      </Col>
    </Row>
  );
}
export default Core3D;