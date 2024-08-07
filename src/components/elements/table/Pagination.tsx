import { BsChevronBarLeft, BsChevronBarRight, BsChevronLeft, BsChevronRight, BsThreeDots } from "react-icons/bs";
import PageTitArea from '../../layout/PageTitArea';

const Pagination = () => {
    
  return (
    <>
      <PageTitArea pageTitHeading="Pagination" pageTitSubHeading="" />

      <div className="guideWrap">
        <div className="grid">
          <div className="colorWrap col-12">
            <h2>Pagination</h2>
            <div className="pagination">
              <button type="button" className="page first"><BsChevronBarLeft /></button>
              <button type="button" className="page prev"><BsChevronLeft /></button>
              <button type="button" className="page active">1</button>
              <button type="button" className="page">2</button>
              <button type="button" className="page">3</button>
              <button type="button" className="page">4</button>
              <button type="button" className="page">5</button>
              <button type="button" className="page">6</button>
              <button type="button" className="page">7</button>
              <button type="button" className="page">8</button>
              <button type="button" className="page">9</button>
              <button type="button" className="page">10</button>
              <button type="button" className="page next"><BsChevronRight /></button>
              <button type="button" className="page last"><BsChevronBarRight /></button>
            </div>

            <div className="pagination mt-5">
              <button type="button" className="page first"><BsChevronBarLeft /></button>
              <button type="button" className="page prev"><BsChevronLeft /></button>
              <button type="button" className="page active">1</button>
              <button type="button" className="page">2</button>
              <button type="button" className="page">3</button>
              <button type="button" className="page">4</button>
              <button type="button" className="page">5</button>
              <button type="button" className="page">6</button>
              <button type="button" className="page">7</button>
              <button type="button" className="page">8</button>
              <button type="button" className="page">9</button>
              <button type="button" className="page">10</button>
              <button type="button" className="page"><BsThreeDots /></button>
              <button type="button" className="page">20</button>
              <button type="button" className="page next"><BsChevronRight /></button>
              <button type="button" className="page last"><BsChevronBarRight /></button>
            </div>

            <h2 className="mt-5">Pagination Line</h2>
            <div className="pagination line">
              <button type="button" className="page first"><BsChevronBarLeft /></button>
              <button type="button" className="page prev"><BsChevronLeft /></button>
              <button type="button" className="page active">1</button>
              <button type="button" className="page">2</button>
              <button type="button" className="page">3</button>
              <button type="button" className="page">4</button>
              <button type="button" className="page">5</button>
              <button type="button" className="page">6</button>
              <button type="button" className="page">7</button>
              <button type="button" className="page">8</button>
              <button type="button" className="page">9</button>
              <button type="button" className="page">10</button>
              <button type="button" className="page next"><BsChevronRight /></button>
              <button type="button" className="page last"><BsChevronBarRight /></button>
            </div>
            <div className="pagination line mt-5">
              <button type="button" className="page first"><BsChevronBarLeft /></button>
              <button type="button" className="page prev"><BsChevronLeft /></button>
              <button type="button" className="page active">1</button>
              <button type="button" className="page">2</button>
              <button type="button" className="page">3</button>
              <button type="button" className="page">4</button>
              <button type="button" className="page">5</button>
              <button type="button" className="page">6</button>
              <button type="button" className="page">7</button>
              <button type="button" className="page">8</button>
              <button type="button" className="page">9</button>
              <button type="button" className="page">10</button>
              <button type="button" className="page"><BsThreeDots /></button>
              <button type="button" className="page">20</button>
              <button type="button" className="page next"><BsChevronRight /></button>
              <button type="button" className="page last"><BsChevronBarRight /></button>
            </div>

            <h2 className="mt-5">Pagination circle</h2>
            <div className="pagination circle">
              <button type="button" className="page first"><BsChevronBarLeft /></button>
              <button type="button" className="page prev"><BsChevronLeft /></button>
              <button type="button" className="page active">1</button>
              <button type="button" className="page">2</button>
              <button type="button" className="page">3</button>
              <button type="button" className="page">4</button>
              <button type="button" className="page">5</button>
              <button type="button" className="page">6</button>
              <button type="button" className="page">7</button>
              <button type="button" className="page">8</button>
              <button type="button" className="page">9</button>
              <button type="button" className="page">10</button>
              <button type="button" className="page next"><BsChevronRight /></button>
              <button type="button" className="page last"><BsChevronBarRight /></button>
            </div>

            <div className="pagination line circle  mt-5">
              <button type="button" className="page first"><BsChevronBarLeft /></button>
              <button type="button" className="page prev"><BsChevronLeft /></button>
              <button type="button" className="page active">1</button>
              <button type="button" className="page">2</button>
              <button type="button" className="page">3</button>
              <button type="button" className="page">4</button>
              <button type="button" className="page">5</button>
              <button type="button" className="page">6</button>
              <button type="button" className="page">7</button>
              <button type="button" className="page">8</button>
              <button type="button" className="page">9</button>
              <button type="button" className="page">10</button>
              <button type="button" className="page next"><BsChevronRight /></button>
              <button type="button" className="page last"><BsChevronBarRight /></button>
            </div>
            <div className="pagination line circle mt-5">
              <button type="button" className="page first"><BsChevronBarLeft /></button>
              <button type="button" className="page prev"><BsChevronLeft /></button>
              <button type="button" className="page active">1</button>
              <button type="button" className="page">2</button>
              <button type="button" className="page">3</button>
              <button type="button" className="page">4</button>
              <button type="button" className="page">5</button>
              <button type="button" className="page">6</button>
              <button type="button" className="page">7</button>
              <button type="button" className="page">8</button>
              <button type="button" className="page">9</button>
              <button type="button" className="page">10</button>
              <button type="button" className="page"><BsThreeDots /></button>
              <button type="button" className="page">20</button>
              <button type="button" className="page next"><BsChevronRight /></button>
              <button type="button" className="page last"><BsChevronBarRight /></button>
            </div>

          </div>
        </div>
      </div>
    </>
  ); //return
};

export default Pagination;
