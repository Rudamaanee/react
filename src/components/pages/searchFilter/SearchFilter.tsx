import React from "react";
import FilterForm from "./FilterForm";
import Items from "./Items";
import useProducts from "./useProducts";

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
          <h1>뉴스/자료 <small>({items.length} / {total})</small></h1>
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