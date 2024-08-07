import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { BsTrash, BsSearch } from "react-icons/bs";
import { IoSave, IoSaveOutline } from "react-icons/io5";

const HorizontalIcons = () => {

  return (
    <Row>
      <Col className='col-6'>
        <div className="card btn-box mb-3">
          <div className="card-header">
            <div className="card-title">solid</div>
          </div>
          <div className="card-body">
            <ButtonGroup className='d-block'>
            </ButtonGroup>
            <ButtonGroup>
              <Button variant="solid-primary" className='me-2 mb-2'><IoSave /> <span>저장</span></Button>
              <Button variant="solid-primary" className='me-2 mb-2'><IoSaveOutline /> <span>저장</span></Button>
              <Button variant="solid-primary" className='me-2 mb-2'><BsTrash /> <span>삭제</span></Button>
              <Button variant="solid-primary" className='me-2 mb-2'><BsSearch /> <span>검색</span></Button>
            </ButtonGroup>
          </div>
        </div>
      </Col> {/* solid */}
    </Row>
  );
}

export default HorizontalIcons;
