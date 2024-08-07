import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button';
import PageTitArea from '../../layout/PageTitArea';

const BootSpinners = () => {
  return (
    <>
      <PageTitArea pageTitHeading="Forms" pageTitSubHeading="" />

      <h2>Basic</h2>
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>

      <h2 className='mt-4'>Animations</h2>
      <Spinner animation="border" />
      <Spinner animation="grow" />

      <h2 className='mt-4'>Variants</h2>
      <Spinner animation="border" variant="primary" />
      <Spinner animation="border" variant="secondary" />
      <Spinner animation="border" variant="success" />
      <Spinner animation="border" variant="danger" />
      <Spinner animation="border" variant="warning" />
      <Spinner animation="border" variant="info" />
      <Spinner animation="border" variant="light" />
      <Spinner animation="border" variant="dark" />
      <Spinner animation="grow" variant="primary" />
      <Spinner animation="grow" variant="secondary" />
      <Spinner animation="grow" variant="success" />
      <Spinner animation="grow" variant="danger" />
      <Spinner animation="grow" variant="warning" />
      <Spinner animation="grow" variant="info" />
      <Spinner animation="grow" variant="light" />
      <Spinner animation="grow" variant="dark" />

      <h2 className='mt-4'>Sizing</h2>
      <Spinner animation="border" size="sm" />
      <Spinner animation="border" />
      <Spinner animation="grow" size="sm" />
      <Spinner animation="grow" />

      <h2 className='mt-4'>Buttons</h2>
      <Button variant="primary" disabled>
        <Spinner
          as="span"
          animation="border"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        <span className="visually-hidden">Loading...</span>
      </Button>{' '}
      <Button variant="primary" disabled>
        <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
          className='me-2'
        />
        Loading...
      </Button>

      <h2 className='mt-4'>Accessibility</h2>
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </>
  );
}
export default BootSpinners;