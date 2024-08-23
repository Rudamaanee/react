import React, { useState } from 'react';

function FilterForm({ initialValues, onSubmit }) {
  const [values, setValues] = React.useState(initialValues);

  React.useEffect(() => {
    setValues(initialValues);
  }, [initialValues]);

  const provinces = [
    { id: 1, name: '서울특별시' },
    { id: 2, name: '부산광역시' },
    { id: 3, name: '대구광역시' },
    { id: 4, name: '인천광역시' },
    { id: 5, name: '광주광역시' },
    { id: 6, name: '대전광역시' },
    { id: 7, name: '울산광역시' },
    { id: 8, name: '세종특별자치시' },
    { id: 9, name: '경기도' },
    { id: 10, name: '강원특별자치도' },
    { id: 11, name: '충청북도' },
    { id: 12, name: '충청남도' },
    { id: 13, name: '전북특별자치도' },
    { id: 14, name: '전라남도' },
    { id: 15, name: '경상북도' },
    { id: 16, name: '경상남도' },
    { id: 17, name: '제주특별자치도' },
  ];

  const districts = {
    서울특별시: ['강남구', '강동구', '강북구', '강서구', '관악구', '광진구', '구로구', '금천구', '노원구', '도봉구', '동대문구', '동작구', '마포구', '서대문구', '서초구', '성동구', '성북구', '송파구', '양천구', '영등포구', '용산구', '은평구', '종로구', '중구', '중랑구'],
    부산광역시: ['강서구', '금정구', '기장군', '남구', '동구', '동래구', '부산진구', '북구', '사상구', '사하구', '서구', '수영구', '연제구', '영도구', '중구', '해운대구'],
    대구광역시: ['군위군', '남구', '달서구', '달성군', '동구', '북구', '서구', '수성구', '중구'],
    인천광역시: ['강화군', '계양구', '남동구', '동구', '미추홀구', '부평구', '서구', '연수구', '옹진군', '중구'],
    광주광역시: ['광산구', '남구', '동구', '북구', '서구'],
    대전광역시: ['대덕구', '동구', '서구', '유성구', '중구'],
    울산광역시: ['남구', '동구', '북구', '울주군', '중구'],
    세종특별자치시: ['-'],
    경기도: ['가평군', '고양시', '고양시 덕양구', '고양시 일산동구', '고양시 일산서구', '과천시', '광명시', '광주시', '구리시', '군포시', '김포시', '남양주시', '동두천시', '부천시 소사구', '부천시 오정구', '부천시 원미구', '성남시 분당구', '성남시 수정구', '성남시 중원구', '수원시 권선구', '수원시 영통구', '수원시 장안구', '수원시 팔달구', '시흥시', '안산시 단원구', '안산시 상록구', '안성시', '안양시 동안구', '안양시 만안구', '양주시', '양평군', '여주시', '', '연천군', '산시', '용인시 기흥구', '용인시 수지구', '용인시 처인구', '의왕시', '의정부시', '이천시', '파주시', '평택시', '포천시', '하남시', '화성시'],
    강원특별자치도: ['강릉시', '고성군', '동해시', '삼척시', '속초시', '양구군', '양양군', '영월군', '원주시', '인제군', '정선군', '철원군', '춘천시', '태백시', '평창군', '홍천군', '화천군', '횡성군'],
    충청북도: ['괴산군', '단양군', '보은군', '영동군', '옥천군', '음성군', '제천시', '증평군', '진천군', '청주시 상당구', '청주시 서원구', '청주시 청원구', '청주시 흥덕구', '충주시'],
    충청남도: ['계룡시', '공주시', '금산군', '논산시', '당진시', '보령시', '부여군', '서산시', '서천군', '아산시', '예산군', '천안시 동남구', '천안시 서북구', '청양군', '태안군', '홍성군'],
    전북특별자치도: ['고창군', '군산시', '김제시', '남원시', '무주군', '부안군', '순창군', '완주군', '익산시', '임실군', '장수군', '전주시 덕진구', '전주시 완산구', '정읍시', '진안군'],
    전라남도: ['강진군', '고흥군', '곡성군', '광양시', '구례군', '나주시', '담양군', '목포시', '무안군', '보성군', '순천시', '신안군', '여수시', '영광군', '영암군', '완도군', '장성군', '장흥군', '진도군', '함평군', '해남군', '화순군'],
    경상북도: ['경산시', '경주시', '고령군', '구미시', '김천시', '문경시', '봉화군', '상주시', '성주군', '안동시', '영덕군', '영양군', '영주시', '영천시', '예천군', '울릉군', '울진군', '의성군', '청도군', '청송군', '칠곡군', '포항시 남구', '포항시 북구'],
    경상남도: ['거제시', '거창군', '고성군', '김해시', '남해군', '밀양시', '사천시', '산청군', '양산시', '의령군', '진주시', '창녕군', '창원시 마산합포구', '창원시 마산회원구', '창원시 성산구', '창원시 의창구', '창원시 진해구', '통영시', '하동군', '함안군', '함양군', '합천군'],
    제주특별자치도: ['서귀포시', '제주시']
  };

  const difficulties = ['쉬움', '중간', '어려움'];

  const [selectedProvince, setSelectedProvince] = useState(provinces[0].name);
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [difficulty, setDifficulty] = useState('');

  const handleProvinceChange = (provinceName) => {
        setSelectedProvince(provinceName);
        setSelectedDistrict('');
  };

  // 시군구 변경 핸들러
  const handleDistrictChange = (districtName) => {
        setSelectedDistrict(districtName);
  };

  // 난이도 변경 핸들러
  const handleDifficultyChange = (level) => {
        setDifficulty(level);
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit(values);
      }}
    >
      <div className="selectbox">
        <div className='grp'>
          <div className='tit'>시도 선택</div>
          <div className="scrollableList">
            {provinces.map((province) => (
              <div
                key={province.id}
                className="listItem"
                onClick={() => handleProvinceChange(province.name)}
              > {province.name} </div>
            ))}
          </div>
        </div>

        {selectedProvince && (
          <>
            <div className="grp">
              <div className='tit'>시군구 선택</div>
              <div className="scrollableList">
                {districts[selectedProvince]?.map((district, index) => (
                    <div
                      key={index}
                      className="listItem"
                      // className={`${selectedDistrict === district ? style.selected : ''}`}
                      onClick={() => handleDistrictChange(district)}
                  > {district} </div>
                ))}
                {!districts[selectedProvince] && <div className="listItem">시군구가 없습니다.</div>}
              </div>
            </div>

            <div className="grp">
              <div className='tit'>난이도 선택</div>
              <div className="scrollableList">
                {difficulties.map((level, index) => (
                  <div
                    key={index}
                    //className={`${style.listItem} ${difficulty === level ? style.selected : ''}`}
                    className="listItem"
                    onClick={() => handleDifficultyChange(level)}
                  > {level} </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>

      <div className="select_result">
        <p>선택된 시도: {selectedProvince} </p>
        <p>선택된 시군구: {selectedDistrict || '선택되지 않음'} </p>
        <p>선택된 난이도: {difficulty || '선택되지 않음'} </p>
      </div>

      <div className='selectbox'>
        <div className="grp">
          <div className='tit'>시도</div>
          <select
            value={values.city}
            onChange={({ target: { value } }) =>
              setValues({ ...values, city: value })
            }
          >
            {provinces.map((province) => (
              <option
                key={province.id}
                value={province.name}
              >
                {province.name}</option>
            ))}
          </select>
        </div> {/* grp */}

        {selectedProvince && (
          <div className="grp">
            <div className='tit'>시군구</div>
            <select
              value={values.county}
              onChange={({ target: { value } }) =>
              setValues({ ...values, county: value })
            }
            >
              {districts[selectedProvince]?.map((district, index) => (
                <option
                  key={index}
                  value={district}
                >
                  {district}</option>
                  ))}

            </select>
            {!districts[selectedProvince] && <div className="listItem">시군구가 없습니다.</div>}
          </div>
        )}

      </div>

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