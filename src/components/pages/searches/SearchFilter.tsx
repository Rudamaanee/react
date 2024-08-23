import React from "react";
import FilterForm from "./searchFilter/FilterForm";
import Items from "./searchFilter/Items";
import useProducts from "./searchFilter/useProducts";

function SearchFilter() {
  const {
    total,
    items,
    loading,
    filterValues,
    submitFilter
  } = useProducts();

  return (
    <div className="searchFilter">
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