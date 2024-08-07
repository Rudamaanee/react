import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import PageTitArea from '../../layout/PageTitArea';

const BootListGroups = () => {
  const alertClicked = () => {
    alert('You clicked the third ListGroupItem');
  };

  return (
    <>
      <PageTitArea pageTitHeading="ListGroup" pageTitSubHeading="" />

      <h2>Basic</h2>
      <ListGroup>
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Morbi leo risus</ListGroup.Item>
        <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>

      <h2 className='mt-4'>Active items</h2>
      <ListGroup as="ul">
        <ListGroup.Item as="li" active>
          Cras justo odio
        </ListGroup.Item>
        <ListGroup.Item as="li">Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item as="li" disabled>
          Morbi leo risus
        </ListGroup.Item>
        <ListGroup.Item as="li">Porta ac consectetur ac</ListGroup.Item>
      </ListGroup>
      
      <h2 className='mt-4'>Disabled items</h2>
      <ListGroup>
        <ListGroup.Item disabled>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Morbi leo risus</ListGroup.Item>
        <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
      </ListGroup>

      <h2 className='mt-4'>Actionable items</h2>
      <ListGroup defaultActiveKey="#link1">
        <ListGroup.Item action href="#link1">
          Link 1
        </ListGroup.Item>
        <ListGroup.Item action href="#link2" disabled>
          Link 2
        </ListGroup.Item>
        <ListGroup.Item action onClick={alertClicked}>
          This one is a button
        </ListGroup.Item>
      </ListGroup>

      <h2 className='mt-4'>Flush</h2>
      <ListGroup variant="flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Morbi leo risus</ListGroup.Item>
        <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
      </ListGroup>

      <h2 className='mt-4'>Numbered</h2>
      <ListGroup as="ol" numbered>
        <ListGroup.Item as="li">Cras justo odio</ListGroup.Item>
        <ListGroup.Item as="li">Cras justo odio</ListGroup.Item>
        <ListGroup.Item as="li">Cras justo odio</ListGroup.Item>
      </ListGroup>
      <br/>

      <ListGroup as="ol" numbered>
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">Subheading</div>
            Cras justo odio
          </div>
          <Badge bg="primary" pill>
            14
          </Badge>
        </ListGroup.Item>
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">Subheading</div>
            Cras justo odio
          </div>
          <Badge bg="primary" pill>
            14
          </Badge>
        </ListGroup.Item>
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">Subheading</div>
            Cras justo odio
          </div>
          <Badge bg="primary" pill>
            14
          </Badge>
        </ListGroup.Item>
      </ListGroup>

      <h2 className='mt-4'>Horizontal</h2>
      <ListGroup horizontal>
        <ListGroup.Item>This</ListGroup.Item>
        <ListGroup.Item>ListGroup</ListGroup.Item>
        <ListGroup.Item>renders</ListGroup.Item>
        <ListGroup.Item>horizontally!</ListGroup.Item>
      </ListGroup> 
      <br/>

      {['sm', 'md', 'lg', 'xl', 'xxl'].map((breakpoint) => (
        <ListGroup key={breakpoint} horizontal={breakpoint} className="my-2">
          <ListGroup.Item>This ListGroup</ListGroup.Item>
          <ListGroup.Item>renders horizontally</ListGroup.Item>
          <ListGroup.Item>on {breakpoint}</ListGroup.Item>
          <ListGroup.Item>and above!</ListGroup.Item>
        </ListGroup>
      ))}

      <h2 className='mt-4'>Contextual classes</h2>
      <ListGroup>
        <ListGroup.Item>No style</ListGroup.Item>
        <ListGroup.Item variant="primary">Primary</ListGroup.Item>
        <ListGroup.Item variant="secondary">Secondary</ListGroup.Item>
        <ListGroup.Item variant="success">Success</ListGroup.Item>
        <ListGroup.Item variant="danger">Danger</ListGroup.Item>
        <ListGroup.Item variant="warning">Warning</ListGroup.Item>
        <ListGroup.Item variant="info">Info</ListGroup.Item>
        <ListGroup.Item variant="light">Light</ListGroup.Item>
        <ListGroup.Item variant="dark">Dark</ListGroup.Item>
      </ListGroup>
      <br/>
      <ListGroup>
        <ListGroup.Item>No style</ListGroup.Item>
        <ListGroup.Item variant="primary">Primary</ListGroup.Item>
        <ListGroup.Item action variant="secondary">
          Secondary
        </ListGroup.Item>
        <ListGroup.Item action variant="success">
          Success
        </ListGroup.Item>
        <ListGroup.Item action variant="danger">
          Danger
        </ListGroup.Item>
        <ListGroup.Item action variant="warning">
          Warning
        </ListGroup.Item>
        <ListGroup.Item action variant="info">
          Info
        </ListGroup.Item>
        <ListGroup.Item action variant="light">
          Light
        </ListGroup.Item>
        <ListGroup.Item action variant="dark">
          Dark
        </ListGroup.Item>
      </ListGroup>

      <h2 className='mt-4'>Tabbed Interfaces</h2>
      <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
        <Row>
          <Col sm={4}>
            <ListGroup>
              <ListGroup.Item action href="#link1">
                Link 1
              </ListGroup.Item>
              <ListGroup.Item action href="#link2">
                Link 2
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col sm={8}>
            <Tab.Content>
              <Tab.Pane eventKey="#link1">Tab pane content 1</Tab.Pane>
              <Tab.Pane eventKey="#link2">Tab pane content 2</Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </>
  );
}
export default BootListGroups;