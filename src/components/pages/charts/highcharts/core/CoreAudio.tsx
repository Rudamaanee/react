import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import BasicContextCues from './audio/BasicContextCues';
import SonifiedFunction from './audio/SonifiedFunction';

const CoreAudio = () => {
  return (
    <Row>
      <Col className="col-6 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>Basic context cues</code></div>
          </div>
          <div className="card-body row">
            <BasicContextCues />
          </div>
        </div>
      </Col>
      <Col className="col-6 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>Sonified function</code></div>
          </div>
          <div className="card-body row">
            <SonifiedFunction />
          </div>
        </div>
      </Col>
    </Row>
  );
}
export default CoreAudio;