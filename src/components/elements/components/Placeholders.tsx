import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';
import PageTitArea from '../../layout/PageTitArea';

const BootPlaceholders = () => {
  return (
    <>
      <PageTitArea pageTitHeading="Placeholders" pageTitSubHeading="" />

      <h2>Basic</h2>
      <div className="d-flex justify-content-around">
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Placeholder as={Card.Title} animation="glow">
              <Placeholder style={{ width: '50%' }} />
            </Placeholder>
            <Placeholder as={Card.Text} animation="glow">
              <Placeholder style={{ width: '58%' }} /> <Placeholder style={{ width: '33%' }} /> <Placeholder xs={4} />{' '}
              <Placeholder style={{ width: '50%' }} /> <Placeholder style={{ width: '66%' }} />
            </Placeholder>
            <Placeholder.Button variant="primary" style={{ width: '50%' }} />
          </Card.Body>
        </Card>
      </div>

      <h2 className='mt-4'>Width</h2>
      <Placeholder xs={6} />
      <Placeholder className="w-75" /> <Placeholder style={{ width: '25%' }} />

      <h2 className='mt-4'>Color</h2>
      <Placeholder xs={12} />

      <Placeholder xs={12} bg="primary" />
      <Placeholder xs={12} bg="secondary" />
      <Placeholder xs={12} bg="success" />
      <Placeholder xs={12} bg="danger" />
      <Placeholder xs={12} bg="warning" />
      <Placeholder xs={12} bg="info" />
      <Placeholder xs={12} bg="light" />
      <Placeholder xs={12} bg="dark" />

      <h2 className='mt-4'>Sizing</h2>
      <Placeholder xs={12} size="lg" />
      <Placeholder xs={12} />
      <Placeholder xs={12} size="sm" />
      <Placeholder xs={12} size="xs" />

      <h2 className='mt-4'>Animation</h2>
      <Placeholder as="p" animation="glow">
        <Placeholder xs={12} />
      </Placeholder>
      <Placeholder as="p" animation="wave">
        <Placeholder xs={12} />
      </Placeholder>
    </>
  );
}
export default BootPlaceholders;