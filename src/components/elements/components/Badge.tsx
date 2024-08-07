import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import PageTitArea from '../../layout/PageTitArea';

const BootBadge = () => {
  return (
    <>
      <PageTitArea pageTitHeading="Badge" pageTitSubHeading="" />

      <h1>
        Example heading <Badge bg="secondary">New</Badge>
      </h1>
      <h2>
        Example heading <Badge bg="secondary">New</Badge>
      </h2>
      <h3>
        Example heading <Badge bg="secondary">New</Badge>
      </h3>
      <h4>
        Example heading <Badge bg="secondary">New</Badge>
      </h4>
      <h5>
        Example heading <Badge bg="secondary">New</Badge>
      </h5>
      <h6>
        Example heading <Badge bg="secondary">New</Badge>
      </h6>

      <Button variant="primary">
        Profile <Badge bg="secondary">9</Badge>
        <span className="visually-hidden">unread messages</span>
      </Button>

      <h2 className='mt-4'>Contextual variations</h2>
      <Stack direction="horizontal" gap={2}>
        <Badge bg="primary">Primary</Badge>
        <Badge bg="secondary">Secondary</Badge>
        <Badge bg="success">Success</Badge>
        <Badge bg="danger">Danger</Badge>
        <Badge bg="warning" text="dark">
          Warning
        </Badge>
        <Badge bg="info">Info</Badge>
        <Badge bg="light" text="dark">
          Light
        </Badge>
        <Badge bg="dark">Dark</Badge>
      </Stack>

      <h2 className='mt-4'>Pill badges</h2>
      <Stack direction="horizontal" gap={2}>
        <Badge pill bg="primary">
          Primary
        </Badge>
        <Badge pill bg="secondary">
          Secondary
        </Badge>
        <Badge pill bg="success">
          Success
        </Badge>
        <Badge pill bg="danger">
          Danger
        </Badge>
        <Badge pill bg="warning" text="dark">
          Warning
        </Badge>
        <Badge pill bg="info">
          Info
        </Badge>
        <Badge pill bg="light" text="dark">
          Light
        </Badge>
        <Badge pill bg="dark">
          Dark
        </Badge>
      </Stack>
    </>
  );
}
export default BootBadge;