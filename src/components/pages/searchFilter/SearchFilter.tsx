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
    <div className="searchFilter">
      <header>
        <hgroup>
          <h1>상품 목록</h1>
          <h2>
            {products.length} / {total}
          </h2>
        </hgroup>
        <FilterForm initialValues={filterValues} onSubmit={submitFilter} />
      </header>
      <main>
        <Products products={products} loading={loading} />
      </main>
    </div>
  );
}

export default SearchFilter;