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
        <option value="블로그">블로그</option>
        <option value="정책 컨퍼런스">정책 컨퍼런스</option>
        <option value="보도자료">보도자료</option>
      </select>
      <fieldset>
        <label>
          <input
            type="checkbox"
            checked={values.chefs.includes("chef1")}
            onChange={({ target: { checked } }) => checked
              ? setValues({
                ...values,
                chefs: values.chefs.concat("chef1")
              })
              : setValues({
                ...values,
                chefs: values.chefs.filter((chef) => chef !== "chef1")
              })
            }
          />
          chef1
        </label>
        <label>
          <input
            type="checkbox"
            checked={values.chefs.includes("chef2")}
            onChange={({ target: { checked } }) => checked
              ? setValues({
                ...values,
                chefs: values.chefs.concat("chef2")
              })
              : setValues({
                ...values,
                chefs: values.chefs.filter(
                  (chef) => chef !== "chef2"
                )
              })
            }
          />
          chef2
        </label>
        <label>
          <input
            type="checkbox"
            checked={values.chefs.includes("chef3")}
            onChange={({ target: { checked } }) => checked
              ? setValues({
                ...values,
                chefs: values.chefs.concat("chef3")
              })
              : setValues({
                ...values,
                chefs: values.chefs.filter(
                  (chef) => chef !== "chef3"
                )
              })
            }
          />
          chef3
        </label>
      </fieldset>
      <div>
        <input
          placeholder="검색어 입력"
          value={values.search}
          onChange={({ target: { value } }) =>
            setValues({ ...values, search: value })
          }
        />
        <button type="submit" className="btn primary">검색</button>
      </div>
    </form>
  );
}

export default FilterForm;
