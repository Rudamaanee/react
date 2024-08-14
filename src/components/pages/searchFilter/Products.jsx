function Products({ products, loading }) {
  if (loading)
    return (
      <article aria-busy="true">
        잠시만 기다려주세요. 상품 데이터를 불러오고 있습니다.
      </article>
    );
  return (
    <div className="row">
      {products.map(product => {
        const reviews = product.reviews;
        return (
          <article key={product.id} className="col box-shadow n42">
            <header>{product.title}</header>
            <img src={product.thumbnail} alt={product.title} />
            {reviews.map(reviews => {
              return (
                <div className="num">{reviews.reviewerName}</div>
              ); //return
            })} {/* reviews.map */}
          </article>
        )
      })} {/* products.map */}
    </div>
  );
}

export default Products;
