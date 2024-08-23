import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';

function Items({ items, loading }) {
  if (loading) 
    return (
      <article aria-busy="true">
        잠시만 기다려주세요. 데이터를 불러오고 있습니다.
      </article>
    );
  return (
    <Row>
      {items.map(item => {
        const goods = item.goods;
        return (
          <Col key={item.id} className="box-shadow n42 place">
            <header>
              <div className="img"><img src={item.img} alt={item.name} /></div>
              <Link to={item.url} target="_blank" className='name'>{item.name}</Link>
              <span>{item.town}</span>
            </header>
            <div className="goods">
              <div>{item.city}</div>
              <div>{item.county}</div>
              {goods.map(good => {
                return (
                  <div key={good.id}>
                    <span>{good.name}</span>
                    <span>{good.note}</span>
                  </div>
                ); //return
              })} {/* goods.map */}
            </div>
          </Col>
        )
      })} {/* items.map */}
    </Row>
  );
}

export default Items;
