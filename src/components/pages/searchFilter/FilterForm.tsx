import React from "react";

function FilterForm({ initialValues, onSubmit }) {
  const [values, setValues] = React.useState(initialValues);

  React.useEffect(() => {
    setValues(initialValues);
  }, [initialValues]);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit(values);
      }}
    >
      <select
        value={values.category}
        onChange={({ target: { value } }) =>
          setValues({ ...values, category: value })
        }
      >
        <option value="">모두</option>
        <option value="smartphones">스마트폰</option>
        <option value="laptops">노트북</option>
        <option value="fragrances">향수</option>
        <option value="skincare">화장품</option>
        <option value="groceries">식료품</option>
        <option value="home-decoration">장식품</option>
      </select>
      <fieldset>
        <div className="grid">
          <label>
            <input
              type="checkbox"
              checked={values.brands.includes("Apple")}
              onChange={({ target: { checked } }) => checked
                ? setValues({
                  ...values,
                  brands: values.brands.concat("Apple")
                })
                : setValues({
                  ...values,
                  brands: values.brands.filter((brand) => brand !== "Apple")
                })
              }
            />
            Apple
          </label>
          <label>
            <input
              type="checkbox"
              checked={values.brands.includes("Samsung")}
              onChange={({ target: { checked } }) => checked
                ? setValues({
                  ...values,
                  brands: values.brands.concat("Samsung")
                })
                : setValues({
                  ...values,
                  brands: values.brands.filter(
                    (brand) => brand !== "Samsung"
                  )
                })
              }
            />
            Samsung
          </label>
          <label>
            <input
              type="checkbox"
              checked={values.brands.includes("Essence")}
              onChange={({ target: { checked } }) => checked
                ? setValues({
                  ...values,
                  brands: values.brands.concat("Essence")
                })
                : setValues({
                  ...values,
                  brands: values.brands.filter(
                    (brand) => brand !== "Essence"
                  )
                })
              }
            />
            Essence
          </label>
        </div>
      </fieldset>
      <input
        placeholder="검색어 입력"
        value={values.search}
        onChange={({ target: { value } }) =>
          setValues({ ...values, search: value })
        }
      />
      <button>검색</button>
    </form>
  );
}

export default FilterForm;
