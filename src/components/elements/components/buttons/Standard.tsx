import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';


const StandardSolid = () => {
  const [radioValue, setRadioValue] = useState('');

  const radios = [
    { name: 'One', value: '1' },
    { name: 'Two', value: '2' },
    { name: 'Three', value: '3' },
  ];

  return (
    <>
    <Row>
      <Col className='col-12'>
        <div className="card btn-box mb-3">
          <div className="card-header">
            <div className="card-title">General Buttons</div>
          </div>
          <div className="card-body">
            <button type="button" className='btn primary me-2 mb-2'>Primary</button>
            <button type="button" className='btn secondary me-2 mb-2'>Secondary</button>
            <button type="button" className='btn success me-2 mb-2'>Success</button>
            <button type="button" className='btn info me-2 mb-2'>Info</button>
            <button type="button" className='btn warning me-2 mb-2'>Warning</button>
            <button type="button" className='btn danger me-2 mb-2'>Danger</button>
            <button type="button" className='btn light me-2 mb-2'>Light</button>
            <button type="button" className='btn dark me-2 mb-2'>Dark</button>
          </div>
        </div>
      </Col>
    </Row>
    <Row>
      <Col className='col-12'>
        <div className="card btn-box mb-3">
          <div className="card-header">
            <div className="card-title">Disabled State</div>
          </div>
          <div className="card-body">
            <button type="button" disabled className='btn primary me-2 mb-2'>Primary</button>
            <button type="button" disabled className='btn secondary me-2 mb-2'>Secondary</button>
            <button type="button" disabled className='btn success me-2 mb-2'>Success</button>
            <button type="button" disabled className='btn info me-2 mb-2'>Info</button>
            <button type="button" disabled className='btn warning me-2 mb-2'>Warning</button>
            <button type="button" disabled className='btn danger me-2 mb-2'>Danger</button>
            <button type="button" disabled className='btn light me-2 mb-2'>Light</button>
            <button type="button" disabled className='btn dark me-2 mb-2'>Dark</button>
          </div>
        </div>
      </Col>
    </Row>
    <Row>
      <Col className='col-12'>
        <div className="card btn-box mb-3">
          <div className="card-header">
            <div className="card-title">Button with outline</div>
          </div>
          <div className="card-body">
            <button type="button" className='btn outline primary me-2 mb-2'>Primary</button>
            <button type="button" className='btn outline secondary me-2 mb-2'>Secondary</button>
            <button type="button" className='btn outline success me-2 mb-2'>Success</button>
            <button type="button" className='btn outline info me-2 mb-2'>Info</button>
            <button type="button" className='btn outline warning me-2 mb-2'>Warning</button>
            <button type="button" className='btn outline danger me-2 mb-2'>Danger</button>
            <button type="button" className='btn outline light me-2 mb-2'>Light</button>
            <button type="button" className='btn outline dark me-2 mb-2'>Dark</button>
          </div>
        </div>
      </Col>
    </Row>
    <Row>
      <Col className='col-12'>
        <div className="card btn-box mb-3">
          <div className="card-header">
            <div className="card-title">Rounded Buttons</div>
          </div>
          <div className="card-body">
            <button type="button" className='btn pill primary me-2 mb-2'>Primary</button>
            <button type="button" className='btn pill secondary me-2 mb-2'>Secondary</button>
            <button type="button" className='btn pill success me-2 mb-2'>Success</button>
            <button type="button" className='btn pill info me-2 mb-2'>Info</button>
            <button type="button" className='btn pill warning me-2 mb-2'>Warning</button>
            <button type="button" className='btn pill danger me-2 mb-2'>Danger</button>
            <button type="button" className='btn pill light me-2 mb-2'>Light</button>
            <button type="button" className='btn pill dark me-2 mb-2'>Dark</button>
          </div>
        </div>
      </Col>
    </Row>
    <Row>
      <Col className='col-12'>
        <div className="card btn-box mb-3">
          <div className="card-header">
            <div className="card-title">Rounded outlined Buttons</div>
          </div>
          <div className="card-body">
            <button type="button" className='btn outline pill primary me-2 mb-2'>Primary</button>
            <button type="button" className='btn outline pill secondary me-2 mb-2'>Secondary</button>
            <button type="button" className='btn outline pill success me-2 mb-2'>Success</button>
            <button type="button" className='btn outline pill info me-2 mb-2'>Info</button>
            <button type="button" className='btn outline pill warning me-2 mb-2'>Warning</button>
            <button type="button" className='btn outline pill danger me-2 mb-2'>Danger</button>
            <button type="button" className='btn outline pill light me-2 mb-2'>Light</button>
            <button type="button" className='btn outline pill dark me-2 mb-2'>Dark</button>
          </div>
        </div>
      </Col>
    </Row>
    <Row>
      <Col className='col-6'>
        <div className="card btn-box mb-3">
          <div className="card-header">
            <div className="card-title">Button Sizes</div>
          </div>
          <div className="card-body">
            <button type="button" className='btn primary btn-lg mb-2 me-2'>Large .btn-lg</button>
            <button type="button" className='btn primary mb-2 me-2'>Normal .btn</button>
            <button type="button" className='btn primary btn-sm mb-2 me-2'>Small .btn-sm</button>
            <button type="button" className='btn primary btn-xs mb-2 me-2'>Tiny .btn-xs</button>
          </div>
        </div>
      </Col>
      <Col className='col-6'>
        <div className="card btn-box mb-3">
          <div className="card-header">
            <div className="card-title">Button Sizes with rounded</div>
          </div>
          <div className="card-body">
            <button type="button" className='btn pill primary btn-lg mb-2 me-2'>Large .btn-lg</button>
            <button type="button" className='btn pill primary mb-2 me-2'>Normal .btn</button>
            <button type="button" className='btn pill primary btn-sm mb-2 me-2'>Small .btn-sm</button>
            <button type="button" className='btn pill primary btn-xs mb-2 me-2'>Tiny .btn-xs</button>
          </div>
        </div>
      </Col>
    </Row>
    <Row>
      <Col className='col-6'>
        <div className="card btn-box mb-3">
          <div className="card-header">
            <div className="card-title">Block buttons</div>
          </div>
          <div className="card-body">
            <button type="button" className='btn d-block primary mb-2'>Primary</button>
            <button type="button" className='btn d-block secondary'>Secondary</button>
          </div>
        </div>
      </Col>
      <Col className='col-6'>
        <div className="card btn-box mb-3">
          <div className="card-header">
            <div className="card-title">Rounded Block buttons</div>
          </div>
          <div className="card-body">
            <button type="button" className='btn d-block pill primary mb-2'>Primary</button>
            <button type="button" className='btn d-block pill secondary'>Secondary</button>
          </div>
        </div>
      </Col>
    </Row>
    <Row>
      <Col className='col-6'>
        <div className="card btn-box mb-3">
          <div className="card-header">
            <div className="card-title">Block outline buttons</div>
          </div>
          <div className="card-body">
            <button type="button" className='btn d-block outline primary mb-2'>Primary</button>
            <button type="button" className='btn d-block outline secondary'>Secondary</button>
          </div>
        </div>
      </Col>
      <Col className='col-6'>
        <div className="card btn-box mb-3">
          <div className="card-header">
            <div className="card-title">Rounded outline Block buttons</div>
          </div>
          <div className="card-body">
            <button type="button" className='btn d-block pill outline primary mb-2'>Primary</button>
            <button type="button" className='btn d-block pill outline secondary'>Secondary</button>
          </div>
        </div>
      </Col>
    </Row>

    <Row>
      <Col className='col-6'>
        <div className="card btn-box mb-3">
          <div className="card-header">
            <div className="card-title">Checkbox Buttons</div>
          </div>
          <div className="card-body">
            <ToggleButtonGroup type="checkbox" defaultValue={[]} className="mb-2 d-block">
              <ToggleButton
                variant="primary"
                id="tbg-check-1" value={1}
                size="sm"
              >
                One
              </ToggleButton>
              <ToggleButton
                variant="primary"
                id="tbg-check-2" value={2}
                size="sm"
              >
                Two
              </ToggleButton>
              <ToggleButton 
                variant="primary"
                id="tbg-check-3" value={3}
                size="sm"
              >
                Three
              </ToggleButton>
            </ToggleButtonGroup>
            
            <ToggleButtonGroup type="checkbox" defaultValue={[]} className="mb-2 d-block">
              <ToggleButton
                variant="secondary"
                id="tbg-check-1" value={1}
                >
                One
              </ToggleButton>
              <ToggleButton
                variant="secondary"
                id="tbg-check-2" value={2}
              >
                Two
              </ToggleButton>
              <ToggleButton 
                variant="secondary"
                id="tbg-check-3" value={3}
              >
                Three
              </ToggleButton>
            </ToggleButtonGroup>

            <ToggleButtonGroup type="checkbox" defaultValue={[]} className="mb-2 d-block">
              <ToggleButton
                variant="success"
                id="tbg-check-1" value={1}
                size="lg"
                >
                One
              </ToggleButton>
              <ToggleButton
                variant="success"
                id="tbg-check-2" value={2}
                size="lg"
              >
                Two
              </ToggleButton>
              <ToggleButton 
                variant="success"
                id="tbg-check-3" value={3}
                size="lg"
              >
                Three
              </ToggleButton>
            </ToggleButtonGroup>
          </div>
        </div>
      </Col>

      <Col className='col-6'>
        <div className="card btn-box mb-3">
          <div className="card-header">
            <div className="card-title">Radio Buttons</div>
          </div>
          <div className="card-body">
            <ButtonGroup className='mb-2 d-block'>
              {radios.map((radio, idx) => (
                <ToggleButton
                  key={idx}
                  id={`radio-${idx}`}
                  type="radio"
                  variant="primary"
                  name="radio"
                  value={radio.value}
                  checked={radioValue === radio.value}
                  onChange={(e) => setRadioValue(e.currentTarget.value)}
                  size='sm'
                >
                  {radio.name}
                </ToggleButton>
              ))}
            </ButtonGroup>

            <ButtonGroup className='mb-2 d-block'>
              {radios.map((radio, idx) => (
                <ToggleButton
                  key={idx}
                  id={`radio-${idx}`}
                  type="radio"
                  variant="secondary"
                  name="radio"
                  value={radio.value}
                  checked={radioValue === radio.value}
                  onChange={(e) => setRadioValue(e.currentTarget.value)}
                >
                  {radio.name}
                </ToggleButton>
              ))}
            </ButtonGroup>

            <ButtonGroup className='mb-2 d-block'>
              {radios.map((radio, idx) => (
                <ToggleButton
                  key={idx}
                  id={`radio-${idx}`}
                  type="radio"
                  variant="success"
                  name="radio"
                  value={radio.value}
                  checked={radioValue === radio.value}
                  onChange={(e) => setRadioValue(e.currentTarget.value)}
                  size='lg'
                >
                  {radio.name}
                </ToggleButton>
              ))}
            </ButtonGroup>
          </div>
        </div>
      </Col>
    </Row>
    </>
  );
}

export default StandardSolid;
