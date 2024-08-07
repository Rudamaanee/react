import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const FormGroup = () => {

  return (
    <>
    <Row>
      <Col className='col-12'>
        <div className="card btn-box mb-3">
          <div className="card-header">
            <div className="card-title">Floating Label</div>
          </div>
          <div className="card-body row">
            <Col className='col-md-6 mb-3'>
              <div className="form-floating">
                <input type="text" className="form-control" id="tb-fname" placeholder="Enter Name here" />
                <label htmlFor="tb-fname">Name</label>
              </div>
            </Col>
            <Col className='col-md-6 mb-3'>
              <div className="form-floating">
                <input type="email" className="form-control" id="tb-email" placeholder="name@example.com" />
                <label htmlFor="tb-email">Email address</label>
              </div>
            </Col>
          </div>
        </div>
      </Col>
    </Row>
    <Row>
      <Col className='col-12'>
        <div className="card btn-box mb-3">
          <div className="card-header">
            <div className="card-title">INPUTS</div>
          </div>
          <div className="card-body">
            <input type="date" defaultValue={'2024-05-20'} /><span className='tilde'>~</span><input type="date" defaultValue={'2024-05-27'} />
            <input type="radio" name="date" id="all" className='rdo-input' /> <label className="rdo-label" htmlFor='all'>전체</label>
            <input type="radio" name="date" id="lastmonth" className='rdo-input' /> <label className="rdo-label" htmlFor='lastmonth'>최근 1달</label>
            <input type="radio" name="date" id="day" className='rdo-input' /> <label className="rdo-label" htmlFor='day'>당일</label>
          </div>
        </div>
      </Col>
    </Row>
    </>
  );
}

export default FormGroup;
