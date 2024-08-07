import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import AnimatedLinesOnAWorldMap from './general/AnimatedLinesOnAWorldMap';
import GeoJSONWithRiversAndCities from './general/GeoJSONWithRiversAndCities';
import CategorizedAreas from './general/CategorizedAreas';

const General = () => {
  return (
    <Row>
      <Col className="col-12 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>Animated lines on a world map</code></div>
          </div>
          <div className="card-body row">
              <AnimatedLinesOnAWorldMap />
          </div>
        </div>
      </Col>
      <Col className="col-12 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>GeoJSON with rivers and cities</code></div>
          </div>
          <div className="card-body row">
              <GeoJSONWithRiversAndCities />
          </div>
        </div>
      </Col>
      <Col className="col-12 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>Categorized areas</code></div>
          </div>
          <div className="card-body row">
              <CategorizedAreas />
          </div>
        </div>
      </Col>
    </Row>
  );
}
export default General;