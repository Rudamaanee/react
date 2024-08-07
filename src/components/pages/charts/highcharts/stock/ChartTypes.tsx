import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import ColumnRange from './chartTypes/ColumnRange';
import Column from './chartTypes/Column';
import OHLC from './chartTypes/OHLC';
import Candlestick from './chartTypes/Candlestick';
import AreaSplineRange from './chartTypes/AreaSplineRange';
import OrderBookChart from './chartTypes/OrderBookChart';
import DepthChart from './chartTypes/DepthChart';
import AreaRange from './chartTypes/AreaRange';
import AreaSpline from './chartTypes/AreaSpline';
import StepLine from './chartTypes/StepLine';
import Spline from './chartTypes/Spline';
import HollowCandlestick from './chartTypes/HollowCandlestick';
import HLC from './chartTypes/HLC';
import PointMarkersOnly from './chartTypes/PointMarkersOnly';
import RenkoSeries from './chartTypes/RenkoSeries';

const ChartTypes = () => {
  return (
    <Row>
      <Col className="col-12 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>Column range</code></div>
          </div>
          <div className="card-body row">
            <ColumnRange />
          </div>
        </div>
      </Col>
      <Col className="col-12 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>Column</code></div>
          </div>
          <div className="card-body row">
            <Column />
          </div>
        </div>
      </Col>
      <Col className="col-12 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>OHLC</code></div>
          </div>
          <div className="card-body row">
            <OHLC />
          </div>
        </div>
      </Col>
      <Col className="col-12 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>Candlestick</code></div>
          </div>
          <div className="card-body row">
            <Candlestick />
          </div>
        </div>
      </Col>
      <Col className="col-12 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>Area spline range</code></div>
          </div>
          <div className="card-body row">
            <AreaSplineRange />
          </div>
        </div>
      </Col>
      <Col className="col-12 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>Order book chart</code></div>
          </div>
          <div className="card-body row">
            <OrderBookChart />
          </div>
        </div>
      </Col>
      <Col className="col-12 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>Depth chart</code></div>
          </div>
          <div className="card-body row">
            <DepthChart />
          </div>
        </div>
      </Col>
      <Col className="col-12 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>Area range</code></div>
          </div>
          <div className="card-body row">
            <AreaRange />
          </div>
        </div>
      </Col>
      <Col className="col-12 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>Area spline</code></div>
          </div>
          <div className="card-body row">
            <AreaSpline />
          </div>
        </div>
      </Col>
      <Col className="col-12 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>Step line</code></div>
          </div>
          <div className="card-body row">
            <StepLine />
          </div>
        </div>
      </Col>
      <Col className="col-12 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>Spline</code></div>
          </div>
          <div className="card-body row">
            <Spline />
          </div>
        </div>
      </Col>
      <Col className="col-12 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>Hollow Candlestick</code></div>
          </div>
          <div className="card-body row">
            <HollowCandlestick />
          </div>
        </div>
      </Col>
      <Col className="col-12 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>HLC</code></div>
          </div>
          <div className="card-body row">
            <HLC />
          </div>
        </div>
      </Col>
      <Col className="col-12 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>Point markers only</code></div>
          </div>
          <div className="card-body row">
            <PointMarkersOnly />
          </div>
        </div>
      </Col>
      <Col className="col-12 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>Renko series</code></div>
          </div>
          <div className="card-body row">
            <RenkoSeries />
          </div>
        </div>
      </Col>
    </Row>
  );
}
export default ChartTypes;