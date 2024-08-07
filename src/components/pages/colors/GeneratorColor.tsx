import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const GeneratorColor = () => {
  const colorArr = ["10", "20", "30", "40", "50", "60", "70", "80", "90"];

  return (
  <>
    <Row>
      <Col className='col-6'>
        <div className="card btn-box mb-3">
          <div className="card-header bokBlueBg">
            <div className="card-title">bokBlue</div>
          </div>
          <div className="card-body">
            <h6>Lighten</h6>
            {colorArr.map((per, index) => ( 
              <div className={'color-generator lighten-bokBlue-bg-' + colorArr[index]} key={'lighten-bokBlue'+index}>
                {per}
              </div>
            ))}
            <h6 className='mt-3'>Darken</h6>
            {colorArr.map((per, index) => (
              <div className={'color-generator darken-bokBlue-bg-' + colorArr[index]} key={'darken-bokBlue'+index}>
                {per}
              </div>
            ))}
            <h6 className='mt-3'>Tint (Hue + White)</h6>
            {colorArr.map((per, index) => (
              <div className={'color-generator tint-bokBlue-bg-' + colorArr[index]} key={'tint-bokBlue'+index}>
                {per}
              </div>
            ))}
            <h6 className='mt-3'>Shade (Hue + Black)</h6>
            {colorArr.map((per, index) => (
              <div className={'color-generator shade-bokBlue-bg-' + colorArr[index]} key={'shade-bokBlue'+index}>
                {per}
              </div>
            ))}
          </div>
        </div>
      </Col>
      <Col className='col-6'>
        <div className="card btn-box mb-3">
          <div className="card-header bokDarkBlueBg">
            <div className="card-title">bokDarkBlue</div>
          </div>
          <div className="card-body">
            <h6>Lighten</h6>
            {colorArr.map((per, index) => (
              <div className={'color-generator lighten-bokDarkBlue-bg-' + colorArr[index]} key={'lighten-bokDarkBlue'+index}>
                {per}
              </div>
            ))}
            <h6 className='mt-3'>Darken</h6>
            {colorArr.map((per, index) => (
              <div className={'color-generator darken-bokDarkBlue-bg-' + colorArr[index]} key={'darken-bokDarkBlue'+index}>
                {per}
              </div>
            ))}
            <h6 className='mt-3'>Tint</h6>
            {colorArr.map((per, index) => (
              <div className={'color-generator tint-bokDarkBlue-bg-' + colorArr[index]} key={'tint-bokDarkBlue'+index}>
                {per}
              </div>
            ))}
            <h6 className='mt-3'>Shade</h6>
            {colorArr.map((per, index) => (
              <div className={'color-generator shade-bokDarkBlue-bg-' + colorArr[index]} key={'shade-bokDarkBlue'+index}>
                {per}
              </div>
            ))}
          </div>
        </div>
      </Col>
      <Col className='col-6'>
        <div className="card btn-box mb-3">
          <div className="card-header goldBg">
            <div className="card-title">gold</div>
          </div>
          <div className="card-body">
            <h6>Lighten</h6>
            {colorArr.map((per, index) => (
              <div className={'color-generator lighten-gold-bg-' + colorArr[index]} key={'lighten-gold'+index}>
                {per}
              </div>
            ))}
            <h6 className='mt-3'>Darken</h6>
            {colorArr.map((per, index) => (
              <div className={'color-generator darken-gold-bg-' + colorArr[index]} key={'darken-gold'+index}>
                {per}
              </div>
            ))}
            <h6 className='mt-3'>Tint</h6>
            {colorArr.map((per, index) => (
              <div className={'color-generator tint-gold-bg-' + colorArr[index]} key={'tint-gold'+index}>
                {per}
              </div>
            ))}
            <h6 className='mt-3'>Shade</h6>
            {colorArr.map((per, index) => (
              <div className={'color-generator shade-gold-bg-' + colorArr[index]} key={'shade-gold'+index}>
                {per}
              </div>
            ))}
          </div>
        </div>
      </Col>
      <Col className='col-6'>
        <div className="card btn-box mb-3">
          <div className="card-header silverBg">
            <div className="card-title">silver</div>
          </div>
          <div className="card-body">
            <h6>Lighten</h6>
            {colorArr.map((per, index) => (
              <div className={'color-generator lighten-silver-bg-' + colorArr[index]} key={'lighten-silver'+index}>
                {per}
              </div>
            ))}
            <h6 className='mt-3'>Darken</h6>
            {colorArr.map((per, index) => (
              <div className={'color-generator darken-silver-bg-' + colorArr[index]} key={'darken-silver'+index}>
                {per}
              </div>
            ))}
            <h6 className='mt-3'>Tint</h6>
            {colorArr.map((per, index) => (
              <div className={'color-generator tint-silver-bg-' + colorArr[index]} key={'tint-silver'+index}>
                {per}
              </div>
            ))}
            <h6 className='mt-3'>Shade</h6>
            {colorArr.map((per, index) => (
              <div className={'color-generator shade-silver-bg-' + colorArr[index]} key={'shade-silver'+index}>
                {per}
              </div>
            ))}
          </div>
        </div>
      </Col>
      <Col className='col-6'>
        <div className="card btn-box mb-3">
          <div className="card-header bokGrayBg">
            <div className="card-title">bokGray</div>
          </div>
          <div className="card-body">
            <h6>Lighten</h6>
            {colorArr.map((per, index) => (
              <div className={'color-generator lighten-bokGray-bg-' + colorArr[index]} key={'lighten-bokGray'+index}>
                {per}
              </div>
            ))}
            <h6 className='mt-3'>Darken</h6>
            {colorArr.map((per, index) => (
              <div className={'color-generator darken-bokGray-bg-' + colorArr[index]} key={'darken-bokGray'+index}>
                {per}
              </div>
            ))}
            <h6 className='mt-3'>Tint</h6>
            {colorArr.map((per, index) => (
              <div className={'color-generator tint-bokGray-bg-' + colorArr[index]} key={'tint-bokGray'+index}>
                {per}
              </div>
            ))}
            <h6 className='mt-3'>Shade</h6>
            {colorArr.map((per, index) => (
              <div className={'color-generator shade-bokGray-bg-' + colorArr[index]} key={'shade-bokGray'+index}>
                {per}
              </div>
            ))}
          </div>
        </div>
      </Col>
      <Col className='col-6'>
        <div className="card btn-box mb-3">
          <div className="card-header bokLightGrayBg">
            <div className="card-title">bokLightGray</div>
          </div>
          <div className="card-body">
            <h6>Lighten</h6>
            {colorArr.map((per, index) => (
              <div className={'color-generator lighten-bokLightGray-bg-' + colorArr[index]} key={'lighten-bokLightGray'+index}>
                {per}
              </div>
            ))}
            <h6 className='mt-3'>Darken</h6>
            {colorArr.map((per, index) => (
              <div className={'color-generator darken-bokLightGray-bg-' + colorArr[index]} key={'darken-bokLightGray'+index}>
                {per}
              </div>
            ))}
            <h6 className='mt-3'>Tint</h6>
            {colorArr.map((per, index) => (
              <div className={'color-generator tint-bokLightGray-bg-' + colorArr[index]} key={'tint-bokLightGray'+index}>
                {per}
              </div>
            ))}
            <h6 className='mt-3'>Shade</h6>
            {colorArr.map((per, index) => (
              <div className={'color-generator shade-bokLightGray-bg-' + colorArr[index]} key={'shade-bokLightGray'+index}>
                {per}
              </div>
            ))}
          </div>
        </div>
      </Col>
    </Row>
    
    <Row className='mt-5'>
      <Col className='col-6'>
        <div className="card btn-box mb-3">
          <div className="card-header successBg">
            <div className="card-title">success</div>
          </div>
          <div className="card-body">
            <h6>Lighten</h6>
            {colorArr.map((per, index) => (
              <div className={'color-generator lighten-success-bg-' + colorArr[index]} key={'lighten-success'+index}>
                {per}
              </div>
            ))}
            <h6 className='mt-3'>Darken</h6>
            {colorArr.map((per, index) => (
              <div className={'color-generator darken-success-bg-' + colorArr[index]} key={'darken-success'+index}>
                {per}
              </div>
            ))}
            <h6 className='mt-3'>Tint</h6>
            {colorArr.map((per, index) => (
              <div className={'color-generator tint-success-bg-' + colorArr[index]} key={'tint-success'+index}>
                {per}
              </div>
            ))}
            <h6 className='mt-3'>Shade</h6>
            {colorArr.map((per, index) => (
              <div className={'color-generator shade-success-bg-' + colorArr[index]} key={'shade-success'+index}>
                {per}
              </div>
            ))}
          </div>
        </div>
      </Col>
      <Col className='col-6'>
        <div className="card btn-box mb-3">
          <div className="card-header infoBg">
            <div className="card-title">info</div>
          </div>
          <div className="card-body">
            <h6>Lighten</h6>
            {colorArr.map((per, index) => (
              <div className={'color-generator lighten-info-bg-' + colorArr[index]} key={'lighten-info'+index}>
                {per}
              </div>
            ))}
            <h6 className='mt-3'>Darken</h6>
            {colorArr.map((per, index) => (
              <div className={'color-generator darken-info-bg-' + colorArr[index]} key={'darken-info'+index}>
                {per}
              </div>
            ))}
            <h6 className='mt-3'>Tint</h6>
            {colorArr.map((per, index) => (
              <div className={'color-generator tint-info-bg-' + colorArr[index]} key={'tint-info'+index}>
                {per}
              </div>
            ))}
            <h6 className='mt-3'>Shade</h6>
            {colorArr.map((per, index) => (
              <div className={'color-generator shade-info-bg-' + colorArr[index]} key={'shade-info'+index}>
                {per}
              </div>
            ))}
          </div>
        </div>
      </Col>
      <Col className='col-6'>
        <div className="card btn-box mb-3">
          <div className="card-header warningBg">
            <div className="card-title">warning</div>
          </div>
          <div className="card-body">
            <h6>Lighten</h6>
            {colorArr.map((per, index) => (
              <div className={'color-generator lighten-warning-bg-' + colorArr[index]} key={'lighten-warning'+index}>
                {per}
              </div>
            ))}
            <h6 className='mt-3'>Darken</h6>
            {colorArr.map((per, index) => (
              <div className={'color-generator darken-warning-bg-' + colorArr[index]} key={'darken-warning'+index}>
                {per}
              </div>
            ))}
            <h6 className='mt-3'>Tint</h6>
            {colorArr.map((per, index) => (
              <div className={'color-generator tint-warning-bg-' + colorArr[index]} key={'tint-warning'+index}>
                {per}
              </div>
            ))}
            <h6 className='mt-3'>Shade</h6>
            {colorArr.map((per, index) => (
              <div className={'color-generator shade-warning-bg-' + colorArr[index]} key={'shade-warning'+index}>
                {per}
              </div>
            ))}
          </div>
        </div>
      </Col>
      <Col className='col-6'>
        <div className="card btn-box mb-3">
          <div className="card-header dangerBg">
            <div className="card-title">danger</div>
          </div>
          <div className="card-body">
            <h6>Lighten</h6>
            {colorArr.map((per, index) => (
              <div className={'color-generator lighten-danger-bg-' + colorArr[index]} key={'lighten-danger'+index}>
                {per}
              </div>
            ))}
            <h6 className='mt-3'>Darken</h6>
            {colorArr.map((per, index) => (
              <div className={'color-generator darken-danger-bg-' + colorArr[index]} key={'darken-danger'+index}>
                {per}
              </div>
            ))}
            <h6 className='mt-3'>Tint</h6>
            {colorArr.map((per, index) => (
              <div className={'color-generator tint-danger-bg-' + colorArr[index]} key={'tint-danger'+index}>
                {per}
              </div>
            ))}
            <h6 className='mt-3'>Shade</h6>
            {colorArr.map((per, index) => (
              <div className={'color-generator shade-danger-bg-' + colorArr[index]} key={'shade-danger'+index}>
                {per}
              </div>
            ))}
          </div>
        </div>
      </Col>
    </Row>

  </>
  );
};

export default GeneratorColor;
