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
        const keywords = item.keywords;
        return (
          <Col key={item.id} className="box-shadow n42">
            <header>
              <div className="img"><img src={item.images} alt={item.subject} /></div>
              <div className="subject">{item.subject}</div>
            </header>
            <div className="category">{item.category}</div>
            <div className="brand">{item.brand}</div>
            <div className="depart">{item.depart}</div>
            <div className="user">{item.user}</div>
            <div className="keywords">
              {keywords.map(keyword => {
                return (
                  <Link key={keyword.id} target="_blank" to={keyword.link}>{keyword.keyword}</Link>
                ); //return
              })} {/* keywords.map */}
            </div>
          </Col>
        )
      })} {/* items.map */}
    </Row>
  );
}

export default Items;
