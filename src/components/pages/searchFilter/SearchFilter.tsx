import React from "react";
import FilterForm from "./FilterForm";
import Products from "./Products";
import useProducts from "./useProducts";

function SearchFilter() {

  const {
    total,
    products,
    loading,
    filterValues,
    submitFilter
  } = useProducts();

  return (
    <>
      <header className="container">
        <hgroup>
          <h1>상품 목록</h1>
          <h2>
            {products.length} / {total}
          </h2>
        </hgroup>
        <FilterForm initialValues={filterValues} onSubmit={submitFilter} />
      </header>
      <main className="container">
        <Products products={products} loading={loading} />
      </main>
    </>
  );
}

export default SearchFilter;