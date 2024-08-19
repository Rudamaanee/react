function Items({ items, loading }) {
  if (loading)
    return (
      <article aria-busy="true">
        잠시만 기다려주세요. 상품 데이터를 불러오고 있습니다.
      </article>
    );
  return (
    <div className="row">
      {items.map(item => {
        const keywords = item.keywords;
        return (
          <article key={item.index} className="col box-shadow n42">
            <header>
              <div className="img"><img src={item.images} alt={item.subject} /></div>
              <div className="subject">{item.subject}</div>
            </header>
            <div>{item.category}</div>
            <div>{item.brand}</div>
            <div className="depart">{item.depart}</div>
            <div className="user">{item.user}</div>
            <div className="keywords">
              {keywords.map(keyword => {
                return (
                  <a href={keyword.link} target="_blank" key={keyword.index}>{keyword.keyword}</a>
                ); //return
              })} {/* keywords.map */}
            </div>
          </article>
        )
      })} {/* items.map */}
    </div>
  );
}

export default Items;
