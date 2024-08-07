import Carousel from 'react-bootstrap/Carousel';
import PageTitArea from '../../layout/PageTitArea';

const BootCarousel = () => {
  return (
    <>
      <PageTitArea pageTitHeading="Dropdown" pageTitSubHeading="" />

      <h2>Basic</h2>
      <Carousel className='ty1'>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require('../../../assets/images/dummy/carousels1.svg').default}
            alt="First slide"
          />
          <Carousel.Caption>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            <h3>First slide label</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require('../../../assets/images/dummy/carousels2.svg').default}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require('../../../assets/images/dummy/carousels3.svg').default}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}
export default BootCarousel;