import React from "react";
import FilterForm from "./mustGoPlace/FilterForm";
import Items from "./mustGoPlace/Items";
import useProducts from "./mustGoPlace/useProducts";

function SearchFilter() {
  const {
    total,
    items,
    loading,
    filterValues,
    submitFilter
  } = useProducts();

  return (
    <div className="mustGoPlace">
      <header>
        <hgroup>
          <h1>기본검색 <small>({items.length} / {total})</small></h1>
        </hgroup>
        <FilterForm initialValues={filterValues} onSubmit={submitFilter} />
      </header>
      <main>
        <Items items={items} loading={loading} />
      </main>
    </div>
  );
}

export default SearchFilter;