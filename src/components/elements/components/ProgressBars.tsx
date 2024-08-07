import ProgressBar from 'react-bootstrap/ProgressBar';
import PageTitArea from '../../layout/PageTitArea';

const ProgressBars = () => {
  const now = 60;

  return (
    <>
      <PageTitArea pageTitHeading="ProgressBars" pageTitSubHeading="" />

      <h2>Basic</h2>
      <ProgressBar now={60} />

      <h2 className='mt-4'>With label</h2>
      <ProgressBar now={now} label={`${now}%`} />

      <h2 className='mt-4'>Screenreader only label</h2>
      <ProgressBar now={now} label={`${now}%`} visuallyHidden />

      <h2 className='mt-4'>Contextual alternatives</h2>
      <ProgressBar variant="success" now={40} />
      <ProgressBar variant="info" now={20} />
      <ProgressBar variant="warning" now={60} />
      <ProgressBar variant="danger" now={80} />

      <h2 className='mt-4'>Striped</h2>
      <ProgressBar striped variant="success" now={40} />
      <ProgressBar striped variant="info" now={20} />
      <ProgressBar striped variant="warning" now={60} />
      <ProgressBar striped variant="danger" now={80} />

      <h2 className='mt-4'>Animated</h2>
      <ProgressBar animated now={45} />

      <h2 className='mt-4'>Stacked</h2>
      <ProgressBar>
        <ProgressBar striped variant="success" now={35} key={1} />
        <ProgressBar variant="warning" now={20} key={2} />
        <ProgressBar striped variant="danger" now={10} key={3} />
      </ProgressBar>
    </>
  );
}
export default ProgressBars;