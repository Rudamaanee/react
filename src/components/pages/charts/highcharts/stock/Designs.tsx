import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import DarkThemedStockChart from './designs/DarkThemedStockChart';
import BlackAndWhiteStockChart from './designs/BlackAndWhiteStockChart';
import DarkThemedCandlestickAndVolume from './designs/DarkThemedCandlestickAndVolume';

const Designs = () => {
  return (
    <Row>
      <Col className="col-12 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>Dark themed Stock chart</code></div>
          </div>
          <div className="card-body row">
            <DarkThemedStockChart />
          </div>
        </div>
      </Col>
      <Col className="col-12 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>Black and white Stock chart</code></div>
          </div>
          <div className="card-body row">
            <BlackAndWhiteStockChart />
          </div>
        </div>
      </Col>
      <Col className="col-12 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>Dark themed candlestick and volume</code></div>
          </div>
          <div className="card-body row">
            <DarkThemedCandlestickAndVolume />
          </div>
        </div>
      </Col>
    </Row>
  );
}
export default Designs;