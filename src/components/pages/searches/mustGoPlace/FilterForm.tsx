import React, { useState } from 'react';
import { area } from "./area";

function FilterForm({ initialValues, onSubmit }) {
  const [values, setValues] = React.useState(initialValues);

  React.useEffect(() => {
    setValues(initialValues);
  }, [initialValues]);

  // 시도 시군구 tjsxo
  const [selectedArea, setSelectedArea] = useState<string>("");
  const [selectedSubArea, setSelectedSubArea] = useState<string>("");

  // 선택된 지역에 따라 하위 지역 목록을 가져옴
  const subAreas = area.find((area) => area.name === selectedArea)?.subArea || [];

  // 이벤트 핸들러
  const handleAreaChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedArea(e.target.value);
    setSelectedSubArea(""); // 새로운 지역 선택 시 하위 지역 초기화
  };


  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit(values);
      }}
    >
      <div className="searchbox">
        <div className="grp">
          <div className="tit">지역 선택</div>
          <select value={selectedArea} onChange={handleAreaChange}>
            <option value="">시/도</option>
            {area.map((area) => (
              <option key={area.name} value={area.name}>
                {area.name}
              </option>
            ))}
          </select>
          {selectedArea && (
            <select
              value={values.county}
              onChange={({ target: { value } }) =>
                setValues({ ...values, county: value })
              }
              className='ms-1'
            >
              <option value="" >시/군/구</option>
              {subAreas.map((subArea) => (
                <option  key={subArea} value={subArea}>
                  {subArea}
                </option>
              ))}
            </select>
          )}
        </div> {/* grp */}
      </div>

      <div className="tit">분류</div>
      <fieldset className='searchbox'>
        <div className="grp">
          <input
            id="ch1"
            type="checkbox"
            className='chk-input'
            checked={values.chefs.includes("한식")}
            onChange={({ target: { checked } }) => checked
              ? setValues({
                ...values,
                chefs: values.chefs.concat("한식")
              })
              : setValues({
                ...values,
                chefs: values.chefs.filter((chef) => chef !== "한식")
              })
            }
          />
          <label htmlFor='ch1' className='chk-label'>한식</label>
        </div>
        <div className="grp">
          <input
            id="ch2"
            type="checkbox"
            className='chk-input'
            checked={values.chefs.includes("양식")}
            onChange={({ target: { checked } }) => checked
              ? setValues({
                ...values,
                chefs: values.chefs.concat("양식")
              })
              : setValues({
                ...values,
                chefs: values.chefs.filter(
                  (chef) => chef !== "양식"
                )
              })
            }
          />
          <label htmlFor='ch2' className='chk-label'>양식</label>
        </div>
        <div className="grp">
          <input
            id="ch3"
            type="checkbox"
            className='chk-input'
            checked={values.chefs.includes("일식")}
            onChange={({ target: { checked } }) => checked
              ? setValues({
                ...values,
                chefs: values.chefs.concat("일식")
              })
              : setValues({
                ...values,
                chefs: values.chefs.filter(
                  (chef) => chef !== "일식"
                )
              })
            }
          />
          <label htmlFor='ch3' className='chk-label'>일식</label>
        </div>
        <div className="grp">
          <input
            id="ch3"
            type="checkbox"
            className='chk-input'
            checked={values.chefs.includes("중식")}
            onChange={({ target: { checked } }) => checked
              ? setValues({
                ...values,
                chefs: values.chefs.concat("중식")
              })
              : setValues({
                ...values,
                chefs: values.chefs.filter(
                  (chef) => chef !== "중식"
                )
              })
            }
          />
          <label htmlFor='ch3' className='chk-label'>중식</label>
        </div>
        <div className="grp">
          <input
            id="ch3"
            type="checkbox"
            className='chk-input'
            checked={values.chefs.includes("기타")}
            onChange={({ target: { checked } }) => checked
              ? setValues({
                ...values,
                chefs: values.chefs.concat("기타")
              })
              : setValues({
                ...values,
                chefs: values.chefs.filter(
                  (chef) => chef !== "기타"
                )
              })
            }
          />
          <label htmlFor='ch3' className='chk-label'>기타</label>
        </div>
      </fieldset>
      
      <div className="tit">텍스트</div>
      <div className='textSearch'>
        <input
          type='text'
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