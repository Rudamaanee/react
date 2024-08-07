
import { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Popover from 'react-bootstrap/Popover';
import Overlay from 'react-bootstrap/Overlay';
import PageTitArea from '../../layout/PageTitArea';

const popover = (
  <Popover id="popover-basic">
    <Popover.Header as="h3">Popover right</Popover.Header>
    <Popover.Body>
      And here's some <strong>amazing</strong> content. It's very engaging.
      right?
    </Popover.Body>
  </Popover>
);

const BootPopovers = () => {
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  const handleClick = () => {
    setShow(!show);
    setTarget(target);
  };

  return (
    <>
      <PageTitArea pageTitHeading="Popovers" pageTitSubHeading="" />

      <h2>Basic</h2>
      <OverlayTrigger trigger="click" placement="right" overlay={popover}>
        <Button variant="success">Click me to see</Button>
      </OverlayTrigger>
      <br />
      <div className='my-5'></div>

      <OverlayTrigger
        trigger="click"
        key={'top'}
        placement={'top'}
        overlay={
          <Popover id={`popover-positioned-top`}>
            <Popover.Header as="h3">{`Popover top`}</Popover.Header>
            <Popover.Body>
              <strong>Holy guacamole!</strong> Check this info.
            </Popover.Body>
          </Popover>
        }
      >
        <Button variant="secondary" className='mx-5'>Popover on top</Button>
      </OverlayTrigger>
      
      <OverlayTrigger
        trigger="click"
        key={'right'}
        placement={'right'}
        overlay={
          <Popover id={`popover-positioned-right`}>
            <Popover.Header as="h3">{`Popover right`}</Popover.Header>
            <Popover.Body>
              <strong>Holy guacamole!</strong> Check this info.
            </Popover.Body>
          </Popover>
        }
      >
        <Button variant="secondary" className='mx-5'>Popover on right</Button>
      </OverlayTrigger>
      
      <OverlayTrigger
        trigger="click"
        key={'bottom'}
        placement={'bottom'}
        overlay={
          <Popover id={`popover-positioned-bottom`}>
            <Popover.Header as="h3">{`Popover bottom`}</Popover.Header>
            <Popover.Body>
              <strong>Holy guacamole!</strong> Check this info.
            </Popover.Body>
          </Popover>
        }
      >
        <Button variant="secondary" className='mx-5'>Popover on bottom</Button>
      </OverlayTrigger>
      
      <OverlayTrigger
        trigger="click"
        key={'left'}
        placement={'left'}
        overlay={
          <Popover id={`popover-positioned-left`}>
            <Popover.Header as="h3">{`Popover left`}</Popover.Header>
            <Popover.Body>
              <strong>Holy guacamole!</strong> Check this info.
            </Popover.Body>
          </Popover>
        }
      >
        <Button variant="secondary" className='mx-5'>Popover on left</Button>
      </OverlayTrigger>
      
      <h2 className='mt-4'>Disabled elements</h2>
      <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Tooltip!</Tooltip>}>
        <span className="d-inline-block">
          <Button disabled style={{ pointerEvents: 'none' }}>
            Disabled button
          </Button>
        </span>
      </OverlayTrigger>

      <h2 className='mt-4'>Changing containers</h2>
      <div ref={ref}>
        <Button onClick={handleClick}>Holy guacamole!</Button>

        <Overlay
          show={show}
          target={target}
          placement="bottom"
          container={ref}
          containerPadding={20}
        >
          <Popover id="popover-contained">
            <Popover.Header as="h3">Popover bottom</Popover.Header>
            <Popover.Body>
              <strong>Holy guacamole!</strong> Check this info.
            </Popover.Body>
          </Popover>
        </Overlay>
      </div>
    </>
  );
}
export default BootPopovers;