import React from "react";
import qs from "qs";

const defaultFilterValues = {
  category: "",
  chefs: [],
  search: ""
};

function useItems() {
  const [items, setItems] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      fetch("./react/json/dummyjson.json")
        .then((res) => res.json())
        .then(({ items }) => {
          setItems(items);
          setLoading(false);
        });
    }, 1000);
  }, []);

  const [filterValues, setFilterValues] = React.useState({
    ...defaultFilterValues,
    ...qs.parse(window.location.search)
  });

  React.useEffect(() => {
    const handlePopState = () => {
      setFilterValues({
        ...defaultFilterValues,
        ...qs.parse(window.location.search)
      });
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const submitFilter = (filter) => {
    setFilterValues(filter);
    window.history.pushState({}, "", "?" + qs.stringify(filter));
  };

  const filterItems = React.useMemo(
    () =>
      items
        .filter(
          (item) =>
            !filterValues.category || item.category === filterValues.category
        )
        .filter(
          (item) =>
            !filterValues.chefs ||
            filterValues.chefs.length === 0 ||
            filterValues.chefs.includes(item.chef)
        )
        .filter(
          (item) =>
            !filterValues.search ||
            item.subject
              .toLowerCase()
              .includes(filterValues.search.toLowerCase()) ||
            item.depart
              .toLowerCase()
              .includes(filterValues.search.toLowerCase())
        ),
    [items, filterValues]
  );

  return {
    total: items.length,
    items: filterItems,
    loading,
    filterValues,
    submitFilter
  };
}

export default useItems;
