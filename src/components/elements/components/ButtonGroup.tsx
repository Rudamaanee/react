import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

const BootButtonGroup = () => {
  return (
    <>
      <h2>Basic</h2>
      <ButtonGroup aria-label="Basic example">
        <Button variant="secondary">Left</Button>
        <Button variant="secondary">Middle</Button>
        <Button variant="secondary">Right</Button>
      </ButtonGroup>

      <h2 className='mt-4'>Button toolbar</h2>
      <ButtonToolbar aria-label="Toolbar with button groups">
        <ButtonGroup className="me-2" aria-label="First group">
          <Button>1</Button> <Button>2</Button> <Button>3</Button>{' '}
          <Button>4</Button>
        </ButtonGroup>
        <ButtonGroup className="me-2" aria-label="Second group">
          <Button>5</Button> <Button>6</Button> <Button>7</Button>
        </ButtonGroup>
        <ButtonGroup aria-label="Third group">
          <Button>8</Button>
        </ButtonGroup>
      </ButtonToolbar>
      <br />

      <ButtonToolbar className="mb-3" aria-label="Toolbar with Button groups">
        <ButtonGroup className="me-2" aria-label="First group">
          <Button variant="secondary">1</Button>{' '}
          <Button variant="secondary">2</Button>{' '}
          <Button variant="secondary">3</Button>{' '}
          <Button variant="secondary">4</Button>
        </ButtonGroup>
        <InputGroup>
          <InputGroup.Text id="btnGroupAddon">@</InputGroup.Text>
          <Form.Control
            type="text"
            placeholder="Input group example"
            aria-label="Input group example"
            aria-describedby="btnGroupAddon"
          />
        </InputGroup>
      </ButtonToolbar>
      <ButtonToolbar
        className="justify-content-between"
        aria-label="Toolbar with Button groups"
      >
        <ButtonGroup aria-label="First group">
          <Button variant="secondary">1</Button>{' '}
          <Button variant="secondary">2</Button>{' '}
          <Button variant="secondary">3</Button>{' '}
          <Button variant="secondary">4</Button>
        </ButtonGroup>
        <InputGroup>
          <InputGroup.Text id="btnGroupAddon2">@</InputGroup.Text>
          <Form.Control
            type="text"
            placeholder="Input group example"
            aria-label="Input group example"
            aria-describedby="btnGroupAddon2"
          />
        </InputGroup>
      </ButtonToolbar>

      <h2 className='mt-4'>Sizing</h2>
      <ButtonGroup size="lg" className="mb-2">
        <Button>Left</Button>
        <Button>Middle</Button>
        <Button>Right</Button>
      </ButtonGroup>
      <br />
      <ButtonGroup className="mb-2">
        <Button>Left</Button>
        <Button>Middle</Button>
        <Button>Right</Button>
      </ButtonGroup>
      <br />
      <ButtonGroup size="sm">
        <Button>Left</Button>
        <Button>Middle</Button>
        <Button>Right</Button>
      </ButtonGroup>

      <h2 className='mt-4'>Nesting</h2>
      <ButtonGroup>
        <Button>1</Button>
        <Button>2</Button>

        <DropdownButton as={ButtonGroup} title="Dropdown" id="bg-nested-dropdown">
          <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
          <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
        </DropdownButton>
      </ButtonGroup>

      <h2 className='mt-4'>Vertical variation</h2>
      <ButtonGroup vertical>
        <Button>Button</Button>
        <Button>Button</Button>

        <DropdownButton
          as={ButtonGroup}
          title="Dropdown"
          id="bg-vertical-dropdown-1"
        >
          <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
          <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
        </DropdownButton>

        <Button>Button</Button>
        <Button>Button</Button>

        <DropdownButton
          as={ButtonGroup}
          title="Dropdown"
          id="bg-vertical-dropdown-2"
        >
          <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
          <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
        </DropdownButton>

        <DropdownButton
          as={ButtonGroup}
          title="Dropdown"
          id="bg-vertical-dropdown-3"
        >
          <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
          <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
        </DropdownButton>
      </ButtonGroup>
    </>
  );
}
export default BootButtonGroup;