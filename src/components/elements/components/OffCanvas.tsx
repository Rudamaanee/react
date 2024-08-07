import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import PageTitArea from '../../layout/PageTitArea';

const BootOffCanvas = () => {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);

  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);
  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow3(true);

  return (
    <>
      <PageTitArea pageTitHeading="OffCanvas" pageTitSubHeading="" />

      <h2>Basic</h2>
      <Button variant="primary" onClick={handleShow1}>
        Launch
      </Button>

      <Offcanvas show={show1} onHide={handleClose1}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas1</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>

      <h2 className='mt-4'>Responsive</h2>
      <Button variant="primary" className="d-lg-none" onClick={handleShow2}>
        Launch
      </Button>

      <Alert variant="info" className="d-none d-lg-block">
        Resize your browser to show the responsive offcanvas toggle.
      </Alert>

      <Offcanvas show={show2} onHide={handleClose2} responsive="lg">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Responsive offcanvas2</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <p className="mb-0">
            This is content within an <code>.offcanvas-lg</code>.
          </p>
        </Offcanvas.Body>
      </Offcanvas>

      <h2 className='mt-4'>Static backdrop</h2>
      <Button variant="primary" onClick={handleShow3}>
        Toggle static offcanvas
      </Button>

      <Offcanvas show={show3} onHide={handleClose3} backdrop="static">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas3</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          I will not close if you click outside of me.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
export default BootOffCanvas;