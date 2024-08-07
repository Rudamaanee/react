import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import DownloadPDF from './gantt/DownloadPDF';
import CustomDataLabelsWithSymbols from './gantt/CustomDataLabelsWithSymbols';
import InvertedChart from './gantt/InvertedChart';
import ProgressIndicator from './gantt/ProgressIndicator';

const General = () => {
  return (
    <Row>
      <Col className="col-6 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>Download PDF</code></div>
          </div>
          <div className="card-body row">
              <DownloadPDF />
          </div>
        </div>
      </Col>
      <Col className="col-6 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>Custom data labels with symbols</code></div>
          </div>
          <div className="card-body row">
              <CustomDataLabelsWithSymbols />
          </div>
        </div>
      </Col>
      <Col className="col-6 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>Inverted chart</code></div>
          </div>
          <div className="card-body row">
              <InvertedChart />
          </div>
        </div>
      </Col>
      <Col className="col-6 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>ProgressIndicator</code></div>
          </div>
          <div className="card-body row">
              <ProgressIndicator />
          </div>
        </div>
      </Col>
    </Row>
  );
}
export default General;