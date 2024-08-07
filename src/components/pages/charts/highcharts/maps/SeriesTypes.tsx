import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import TileMapDiamonds from './seriesTypes/TileMapDiamonds';
import Tilemaphoneycomb from './seriesTypes/Tilemaphoneycomb';

const General = () => {
  return (
    <Row>
      <Col className="col-12 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>Tile map, diamonds</code></div>
          </div>
          <div className="card-body row">
            <TileMapDiamonds />
          </div>
        </div>
      </Col>
      <Col className="col-12 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>Tile map, honeycomb</code></div>
          </div>
          <div className="card-body row">
            <Tilemaphoneycomb />
          </div>
        </div>
      </Col>
    </Row>
  );
}
export default General;