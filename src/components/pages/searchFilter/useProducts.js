import React from "react";
import qs from "qs";

const defaultFilterValues = {
  category: "",
  brands: [],
  search: ""
};

function useProducts() {
  const [products, setProducts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      fetch("./react/json/dummyjson.json")
        .then((res) => res.json())
        .then(({ products }) => {
          setProducts(products);
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

  const filteredProducts = React.useMemo(
    () =>
      products
        .filter(
          (product) =>
            !filterValues.category || product.category === filterValues.category
        )
        .filter(
          (product) =>
            !filterValues.brands ||
            filterValues.brands.length === 0 ||
            filterValues.brands.includes(product.brand)
        )
        .filter(
          (product) =>
            !filterValues.search ||
            product.title
              .toLowerCase()
              .includes(filterValues.search.toLowerCase()) ||
            product.description
              .toLowerCase()
              .includes(filterValues.search.toLowerCase())
        ),
    [products, filterValues]
  );

  return {
    total: products.length,
    products: filteredProducts,
    loading,
    filterValues,
    submitFilter
  };
}

export default useProducts;
