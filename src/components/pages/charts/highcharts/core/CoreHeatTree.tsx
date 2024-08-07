import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import HeatmapWithInterpolation from './heatTree/HeatmapWithInterpolation';
import HeatMap from './heatTree/HeatMap';
import TreeMapWithColorAxis from './heatTree/TreeMapWithColorAxis';
import CalendarHeatmap from './heatTree/CalendarHeatmap';
import LargeTreeMap from './heatTree/LargeTreeMap';
import TreeMapWithLevels from './heatTree/TreeMapWithLevels';
import TileMapHoneycomb from './heatTree/TileMapHoneycomb';
import LargeHeatMap from './heatTree/LargeHeatMap';

const CoreGauges = () => {
  return (
    <Row>
      <Col className="col-6 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>Heatmap with interpolation</code></div>
          </div>
          <div className="card-body row">
            <HeatmapWithInterpolation />
          </div>
        </div>
      </Col>
      <Col className="col-6 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>Heat map</code></div>
          </div>
          <div className="card-body row">
            <HeatMap />
          </div>
        </div>
      </Col>
      <Col className="col-6 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>Tree map with color axis</code></div>
          </div>
          <div className="card-body row">
            <TreeMapWithColorAxis />
          </div>
        </div>
      </Col>
      <Col className="col-6 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>Calendar Heatmap</code></div>
          </div>
          <div className="card-body row">
            <CalendarHeatmap />
          </div>
        </div>
      </Col>
      <Col className="col-6 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>Large tree map</code></div>
          </div>
          <div className="card-body row">
            <LargeTreeMap />
          </div>
        </div>
      </Col>
      <Col className="col-6 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>Tree map with levels</code></div>
          </div>
          <div className="card-body row">
            <TreeMapWithLevels />
          </div>
        </div>
      </Col>
      <Col className="col-6 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>Tile map, honeycomb</code></div>
          </div>
          <div className="card-body row">
            <TileMapHoneycomb />
          </div>
        </div>
      </Col>
      <Col className="col-6 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>Large heat map</code></div>
          </div>
          <div className="card-body row">
            <LargeHeatMap />
          </div>
        </div>
      </Col>
    </Row>
  );
}
export default CoreGauges;