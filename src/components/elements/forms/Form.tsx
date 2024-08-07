import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const form = () => {

  return (
    <>
    <Row>
      <Col className='col-12'>
        <div className="card btn-box mb-3">
          <div className="card-header">
            <div className="card-title">INPUTS</div>
          </div>
          <div className="card-body">
            <Row>
              <Col className='col-4'>
                <small className="form-info mb-1">Input Type Text</small>
                <input type="text" placeholder="Input Type Text" defaultValue="Name" />
                <input type="text" placeholder="Input Type Text" defaultValue="Name" className='mt-1' disabled />
              </Col>
              <Col className='col-4'>
                <small className="form-info mb-1">Input Type Password</small>
                <input type="password" placeholder="Input Type Password" defaultValue="Password" />
                <input type="password" placeholder="Input Type Password" defaultValue="Password" className='mt-1' disabled />
              </Col>
              <Col className='col-4'>
                <small className="form-info mb-1">Input Type Tel</small>
                <input type="tel" placeholder="Input Type Tel" defaultValue="010-1234-5678" />
                <input type="tel" placeholder="Input Type Tel" defaultValue="010-1234-5678" className='mt-1' disabled />
              </Col>
            </Row>
            <Row className='mt-2'>
              <Col className='col-4'>
                <small className="form-info mb-1">Input Type Email</small>
                <input type="email" placeholder="Input Type Email" defaultValue="abc@example.com" />
                <input type="email" placeholder="Input Type Email" defaultValue="abc@example.com" className='mt-1' disabled />
              </Col>
              <Col className='col-4'>
                <small className="form-info mb-1">Input Type URL</small>
                <input type="url" placeholder="Input Type URL" defaultValue="http://google.com" />
                <input type="url" placeholder="Input Type URL" defaultValue="http://google.com" className='mt-1' disabled />
              </Col>
              <Col className='col-4'>
                <small className="form-info mb-1">Input Type Search</small>
                <input type="search" placeholder="Input Type Search" defaultValue="how to..." />
                <input type="search" placeholder="Input Type Search" defaultValue="how to..." className='mt-1' disabled />
              </Col>
            </Row>
            <Row className='mt-2'>
              <Col className='col-4'>
                <small className="form-info mb-1">Input Type Number</small>
                <input type="number" step="0.01" placeholder="Input Type Number" />
                <input type="number" step="0.01" placeholder="Input Type Number" className='mt-1' disabled />
              </Col>
              <Col className='col-4'>
                <small className="form-info mb-1">Input Type Date Time</small>
                <input type="datetime-local" placeholder="Input Type Date Time" defaultValue="2024-05-13T22:33:00" />
                <input type="datetime-local" placeholder="Input Type Date Time" defaultValue="2024-05-13T22:33:00" className='mt-1' disabled />
              </Col>
              <Col className='col-4'>
                <small className="form-info mb-1">Input Type Date</small>
                <input type="date" min="2024-05-24" max="2024-08-31" placeholder="Input Type Date" defaultValue="2024-05-13" />
                <input type="date" min="2024-05-24" max="2024-08-31" placeholder="Input Type Date" defaultValue="2024-05-13" className='mx-1' disabled />
              </Col>
            </Row>
            <Row className='mt-2'>
              <Col className='col-4'>
                <small className="form-info mb-1">Input Type Time</small>
                <input type="time" placeholder="Input Type Time" defaultValue="22:33:00" />
                <input type="time" placeholder="Input Type Time" defaultValue="22:33:00" className='mx-1' disabled />
              </Col>
              <Col className='col-4'>
                <small className="form-info mb-1">Input Type Week</small>
                <input type="week" placeholder="Input Type Week" defaultValue="2024-W33" />
                <input type="week" placeholder="Input Type Week" defaultValue="2024-W33" className='mt-1' disabled />
              </Col>
              <Col className='col-4'>
                <small className="form-info mb-1">Input Type Month</small>
                <input type="month" placeholder="Input Type Month" defaultValue="2024-08" />
                <input type="month" placeholder="Input Type Month" defaultValue="2024-08" className='mx-1' disabled />
              </Col>
            </Row>
            <Row className='mt-2'>
              <Col className='col-4'>
                <small className="form-info mb-1">Input Type Color</small>
                <input type="color" placeholder="Input Type Color" defaultValue="#005596" />
                <input type="color" placeholder="Input Type Color" defaultValue="#005596" className='mx-1' disabled />
              </Col>
              <Col className='col-4'>
                <small className="form-info mb-1">Input Type Range</small>
                <input type="range" placeholder="Input Type Range" />
                <input type="range" placeholder="Input Type Range" className='mt-1' disabled />
              </Col>
              <Col className='col-4'>
                <small className="form-info mb-1">Input Type File</small>
                <input type="file" name="" id="" className='w-100' />
                <input type="file" name="" id="" className='w-100 mt-1' disabled />
              </Col>
            </Row>
          </div>
        </div>
      </Col>
    </Row>

    <Row>
      <Col className='col-6'>
        <div className="card btn-box mb-3">
          <div className="card-header">
            <div className="card-title">Checkbox</div>
          </div>
          <div className="card-body">
            <input type="checkbox" className="chk-input" id="chk1" name="chk" defaultChecked />
            <label className="chk-label" htmlFor="chk1">1</label>
            <input type="checkbox" className="chk-input" id="chk2" name="chk" />
            <label className="chk-label" htmlFor="chk2">2</label>
            <input type="checkbox" className="chk-input" id="chk3" name="chk" disabled/>
            <label className="chk-label" htmlFor="chk3">3 (disabled)</label>
            <input type="checkbox" className="chk-input" id="chk4" name="chk" defaultChecked disabled/>
            <label className="chk-label" htmlFor="chk4">4 (checked/disabled)</label>
          </div>
        </div>
      </Col>
      <Col className='col-6'>
        <div className="card btn-box mb-3">
          <div className="card-header">
            <div className="card-title">Radio</div>
          </div>
          <div className="card-body">
            <input type="radio" className="rdo-input" id="rdo1" name="rdo" defaultChecked />
            <label className="rdo-label" htmlFor="rdo1">1</label>
            <input type="radio" className="rdo-input" id="rdo2" name="rdo" />
            <label className="rdo-label" htmlFor="rdo2">2</label>
            <input type="radio" className="rdo-input" id="rdo3" name="rdo" disabled />
            <label className="rdo-label" htmlFor="rdo3">3 (disabled)</label>
            <input type="radio" className="rdo-input" id="rdo4" name="rdo1" defaultChecked disabled />
            <label className="rdo-label" htmlFor="rdo4">4 (checked/disabled)</label>
          </div>
        </div>
      </Col>
    </Row>
      
    <Row>
      <Col className='col-12'>
        <div className="card btn-box mb-3">
          <div className="card-header">
            <div className="card-title">Select</div>
          </div>
          <div className="card-body">
            <Row>
              <Col className='col-4'>
                <select className='w-100'>
                  <option>기본 select</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </Col>
              <Col className='col-4'>
                <div className="sel w-100">
                  <select>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
              </Col>
              <Col className='col-4'>
                <div className="sel d1 w-100">
                  <select>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
              </Col>
              <Col className='col-4'>
                <select className='w-100 mt-1' disabled>
                  <option>기본 select</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </Col>
              <Col className='col-4'>
                <div className="sel w-100 mt-1 disabled">
                  <select disabled>
                    <option>기본 select</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
              </Col>
              <Col className='col-4'>
                <div className="sel d1 w-100 mt-1 disabled">
                  <select disabled>
                    <option>기본 select</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </Col>
    </Row>
      
    <Row>
      <Col className='col-6'>
        <div className="card btn-box mb-3">
          <div className="card-header">
            <div className="card-title">Textarea</div>
          </div>
          <div className="card-body">
            <textarea name="" id="" cols={30} rows={3} className='w-100'></textarea>
            <textarea name="" id="" cols={30} rows={3} className='w-100 mt-1' disabled></textarea>
          </div>
        </div>
      </Col>
      <Col className='col-6'>
        <div className="card btn-box mb-3">
          <div className="card-header">
            <div className="card-title">Swich</div>
          </div>
          <div className="card-body">
            <div className="form-check form-switch">
              <input className="form-check-input" id="flexSwitchCheckDefault" type="checkbox" />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Default switch checkbox input</label>
            </div>
            <div className="form-check form-switch mt-2">
              <input className="form-check-input" id="flexSwitchCheckChecked" type="checkbox" defaultChecked />
              <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Checked switch checkbox input</label>
            </div>
            <div className="form-check form-switch mt-2">
              <input className="form-check-input" id="flexSwitchCheckDisabled" type="checkbox" disabled />
              <label className="form-check-label" htmlFor="flexSwitchCheckDisabled">Disabled switch checkbox input</label>
            </div>
            <div className="form-check form-switch mt-2">
              <input className="form-check-input" id="flexSwitchCheckCheckedDisabled" type="checkbox" defaultChecked disabled />
              <label className="form-check-label" htmlFor="flexSwitchCheckCheckedDisabled">Disabled checked switch checkbox input</label>
            </div>
            <div className="form-check form-switch d-inline-block">
              <input className="form-check-input" type="checkbox" />
            </div>
            <div className="form-check form-switch d-inline-block mx-2">
              <input className="form-check-input" type="checkbox" disabled />
            </div>
            <div className="form-check form-switch d-inline-block  mx-2">
              <input className="form-check-input" type="checkbox" defaultChecked disabled />
            </div>
          </div>
        </div>
      </Col>
    </Row>
      
    </>
  );
}

export default form;
