import { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Overlay from 'react-bootstrap/Overlay';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Image from 'react-bootstrap/Image';

const BootOverlay = () => {
  const [show1, setShow1] = useState(false);
  const target = useRef(null);

  return (
    <>
      <h2>Creating an Overlay</h2>
      <Button variant="danger" ref={target} onClick={() => setShow1(!show1)}>
        Click me to see
      </Button>
      <Overlay target={target.current} show={show1} placement="right">
        {({
          placement: _placement,
          arrowProps: _arrowProps,
          show: _show,
          popper: _popper,
          hasDoneInitialMeasure: _hasDoneInitialMeasure,
          ...props
        }) => (
          <div
            {...props}
            style={{
              position: 'absolute',
              backgroundColor: 'rgba(255, 100, 100, 0.85)',
              padding: '2px 10px',
              color: 'white',
              borderRadius: 3,
              ...props.style,
            }}
          >
            Simple tooltip
          </div>
        )}
      </Overlay>

      <h2 className='mt-4'>OverlayTrigger</h2>
      <OverlayTrigger
        placement="right"
        delay={{ show: 250, hide: 400 }}
        overlay={
          <Tooltip id="button-tooltip">
            Simple tooltip
          </Tooltip>
        }
      >
        <Button variant="success">Hover me to see</Button>
      </OverlayTrigger>

      <h2 className='mt-4'>Customizing trigger behavior</h2>
      <OverlayTrigger
        placement="bottom"
        overlay={<Tooltip id="button-tooltip-2">Check out this avatar</Tooltip>}
      >
        {({ ref, ...triggerHandler }) => (
          <Button
            variant="light"
            {...triggerHandler}
            className="d-inline-flex align-items-center"
          >
            <Image
              ref={ref}
              roundedCircle
              src="holder.js/20x20?text=J&bg=28a745&fg=FFF"
            />
            <span className="ms-1">Hover to see</span>
          </Button>
        )}
      </OverlayTrigger>
    </>
  );
}
export default BootOverlay;