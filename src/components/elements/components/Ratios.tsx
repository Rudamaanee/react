import PageTitArea from "../../layout/PageTitArea";
import Ratio from 'react-bootstrap/Ratio';

const Ratios = () => {
  return (
    <>
      <PageTitArea pageTitHeading="Aspect ratios" pageTitSubHeading="" />

      <div className='ratio-example'>
        {['1x1', '4x3', '16x9', '21x9'].map((ratio) => (
          <Ratio key={ratio} aspectRatio={ratio}>
            <div>{ratio}</div>
          </Ratio>
        ))}      
      </div>

      <h2 className='mt-4'>Custom</h2>
      <div className='ratio-example'>
        <Ratio aspectRatio={1 / 2}>
          <div>2x1</div>
        </Ratio>
        <Ratio aspectRatio={50}>
          <div>2x1</div>
        </Ratio>
      </div>
    </>
  );
}
export default Ratios;