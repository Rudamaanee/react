import React from "react";
import qs from "qs";

const defaultFilterValues = {
  county: "",
  chefs: [],
  search: ""
};

function useItems() {
  const [items, setItems] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      fetch("./react/json/mustgoplace.json")
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
            !filterValues.county || item.county === filterValues.county
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
            item.name
              .toLowerCase()
              .includes(filterValues.search.toLowerCase()) ||
            item.town
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
