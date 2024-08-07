import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import FlagsMarkingEvents from './general/FlagsMarkingEvents';
import IntradayCandlestick from './general/IntradayCandlestick';
// import IntradayWithBreaks from './general/IntradayWithBreaks';
// import IntradayArea from './general/IntradayArea';
// import TwoPanesCandlestickAndVolume from './general/TwoPanesCandlestickAndVolume';
// import SingleLineSeries from './general/SingleLineSeries';
import CumulativeSum from './general/CumulativeSum';
// import DynamicallyUpdatedData from './general/DynamicallyUpdatedData';

const General = () => {
  return (
    <Row>
      <Col className="col-6 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>Flags marking events</code></div>
          </div>
          <div className="card-body row">
            <FlagsMarkingEvents />
          </div>
        </div>
      </Col>
      <Col className="col-6 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>Intraday candlestick</code></div>
          </div>
          <div className="card-body row">
            <IntradayCandlestick />
          </div>
        </div>
      </Col>
      {/* <Col className="col-6 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>Intraday with breaks</code></div>
          </div>
          <div className="card-body row">
            <IntradayWithBreaks />
          </div>
        </div>
      </Col>
      <Col className="col-6 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>Intraday area</code></div>
          </div>
          <div className="card-body row">
            <IntradayArea />
          </div>
        </div>
      </Col>
      <Col className="col-6 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>Two panes, candlestick and volume</code></div>
          </div>
          <div className="card-body row">
            <TwoPanesCandlestickAndVolume />
          </div>
        </div>
      </Col>
      <Col className="col-6 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>Single line series</code></div>
          </div>
          <div className="card-body row">
            <SingleLineSeries />
          </div>
        </div>
      </Col> */}
     <Col className="col-6 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>Cumulative Sum</code></div>
          </div>
          <div className="card-body row">
            <CumulativeSum />
          </div>
        </div>
      </Col>
      {/* <Col className="col-6 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>Dynamically updated data</code></div>
          </div>
          <div className="card-body row">
            <DynamicallyUpdatedData />
          </div>
        </div>
      </Col> */}
    </Row>
  );
}
export default General;