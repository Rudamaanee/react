import PageTitArea from "../layout/PageTitArea";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import DatePicker, { CalendarContainer } from "react-datepicker";
import React, { useState } from "react";
import { ko } from "date-fns/locale/ko";

const Calendar = () => {
  const [startDate, setStartDate] = useState(new Date());

  let handleColor = (time) => {
    return time.getHours() > 12 ? "text-success" : "text-error";
  };

  const [startDate1, setStartDate1] = useState(new Date("2024-06-11"));
  const [endDate1, setEndDate1] = useState(new Date("2024-07-10"));

  const [startDate2, setStartDate2] = useState(new Date());
  const [endDate2, setEndDate2] = useState(null);
  const onChange2 = (dates) => {
    const [start, end] = dates;
    setStartDate2(start);
    setEndDate2(end);
  };

  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate3, endDate] = dateRange;

  const MyContainer = ({ className, children }) => {
    return (
      <div style={{ padding: "16px", background: "#216ba5", color: "#fff" }}>
        <CalendarContainer className={className}>
          <div style={{ background: "#f0f0f0" }}>
            What is your favorite day?
          </div>
          <div style={{ position: "relative" }}>{children}</div>
        </CalendarContainer>
      </div>
    );
  };

  const [dateRange4, setDateRange4] = useState([null, null]);
  const [startDate4, endDate4] = dateRange4;

  const [startDate5, setStartDate5] = useState(new Date("2024-08-01"));

  const defaultStartDate6 = new Date("2024-08-01");
  const defaultEndDate6 = new Date("2024-10-01");
  const [startDate6, setStartDate6] = useState(defaultStartDate6);
  const [endDate6, setEndDate6] = useState(defaultEndDate6);

  const handleChange6 = ([newStartDate, newEndDate]) => {
    setStartDate6(newStartDate);
    setEndDate6(newEndDate);
  };

  return (
    <>
      <PageTitArea pageTitHeading="Calendar" pageTitSubHeading="React Datepicker ko" />
      <Row>
        <Col className='col-6'>
          <div className="card mb-3">
            <div className="card-header">
              <div className="card-title">Default</div>
            </div>
            <div className="card-body">
              <DatePicker
                locale={ko}
                dateFormat="yyyy-MM-dd" //yyyy-MM-dd a hh:mm:ss
                dateFormatCalendar="yyyy년 MM월"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                className="ymd"
              />
            </div>
          </div>
        </Col>
        <Col className='col-6'>
          <div className="card mb-3">
            <div className="card-header">
              <div className="card-title">Calendar Icon</div>
            </div>
            <div className="card-body">
              <DatePicker
                locale={ko}
                dateFormat="yyyy-MM-dd"
                dateFormatCalendar="yyyy년 MM월"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                showIcon
                className="ymd icon"
              />
              <span style={{padding: '0 5px'}}></span>
              <DatePicker
                locale={ko}
                dateFormat="yyyy-MM"
                dateFormatCalendar="yyyy년 MM월"
                className="ym icon"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                showIcon
                showMonthYearPicker
              />
              <span style={{padding: '0 5px'}}></span>
              <DatePicker
                locale={ko}
                dateFormat="yyyy"
                dateFormatCalendar="yyyy년 MM월"
                className="y icon"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                showIcon
                showYearPicker
              />
            </div>
          </div>
        </Col>
        <Col className='col-6'>
          <div className="card mb-3">
            <div className="card-header">
              <div className="card-title">Calendar Icon using React Svg Component</div>
            </div>
            <div className="card-body">
              <DatePicker
                locale={ko}
                dateFormat="yyyy-MM-dd"
                dateFormatCalendar="yyyy년 MM월"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                showIcon
                className="ymd icon"
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 48 48"
                  >
                    <mask id="ipSApplication0">
                      <g fill="none" stroke="#fff" strokeLinejoin="round" strokeWidth="4">
                        <path strokeLinecap="round" d="M40.04 22v20h-32V22"></path>
                        <path
                          fill="#fff"
                          d="M5.842 13.777C4.312 17.737 7.263 22 11.51 22c3.314 0 6.019-2.686 6.019-6a6 6 0 0 0 6 6h1.018a6 6 0 0 0 6-6c0 3.314 2.706 6 6.02 6c4.248 0 7.201-4.265 5.67-8.228L39.234 6H8.845l-3.003 7.777Z"
                        ></path>
                      </g>
                    </mask>
                    <path
                      fill="currentColor"
                      d="M0 0h48v48H0z"
                      mask="url(#ipSApplication0)"
                    ></path>
                  </svg>
                }
              />
            </div>
          </div>
        </Col>
        <Col className='col-6'>
          <div className="card mb-3">
            <div className="card-header">
              <div className="card-title">Toggle Calendar open status on click of the calendar icon</div>
            </div>
            <div className="card-body">
              <DatePicker
                locale={ko}
                dateFormat="yyyy-MM-dd"
                dateFormatCalendar="yyyy년 MM월"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                showIcon
                toggleCalendarOnIconClick
                className="ymd icon"
              />
            </div>
          </div>
        </Col>
        <Col className='col-6'>
          <div className="card mb-3">
            <div className="card-header">
              <div className="card-title">Calendar container</div>
            </div>
            <div className="card-body">
              <DatePicker
                locale={ko}
                dateFormat="yyyy-MM-dd"
                dateFormatCalendar="yyyy년 MM월"
                className="ymd"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                calendarContainer={MyContainer}
              />
            </div>
          </div>
        </Col>
        <Col className='col-6'>
          <div className="card mb-3">
            <div className="card-header">
              <div className="card-title">Children</div>
            </div>
            <div className="card-body">
              <DatePicker
                locale={ko}
                dateFormat="yyyy-MM-dd"
                dateFormatCalendar="yyyy년 MM월"
                className="ymd"
                selected={startDate}
                onChange={(date) => setStartDate(date)}>
                  <div style={{ color: "red" }}>Don't forget to check the weather!</div>
                </DatePicker>
            </div>
          </div>
        </Col>
        <Col className='col-6'>
          <div className="card mb-3">
            <div className="card-header">
              <div className="card-title">Clear datepicker input</div>
            </div>
            <div className="card-body">
              <DatePicker
                locale={ko}
                dateFormat="yyyy-MM-dd"
                dateFormatCalendar="yyyy년 MM월"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                isClearable
                placeholderText="I have been cleared!"
                className="ymd btn"
              />
            </div>
          </div>
        </Col>
        <Col className='col-6'>
          <div className="card mb-3">
            <div className="card-header">
              <div className="card-title">Close on scroll</div>
            </div>
            <div className="card-body">
              <DatePicker
                locale={ko}
                dateFormat="yyyy-MM-dd"
                dateFormatCalendar="yyyy년 MM월"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                closeOnScroll={true}
                className="ymd"
              />
            </div>
          </div>
        </Col>
        <Col className='col-6'>
          <div className="card mb-3">
            <div className="card-header">
              <div className="card-title">Configure Floating UI Properties</div>
            </div>
            <div className="card-body">
              <DatePicker
                locale={ko}
                dateFormat="yyyy-MM-dd"
                dateFormatCalendar="yyyy년 MM월"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                className="ymd"
                popperClassName="some-custom-class"
                popperPlacement="top-end"
                popperModifiers={[
                  {
                    name: "myModifier",
                    fn(state) {
                      // Do something with the state
                      return state;
                    },
                  },
                ]}
              />
            </div>
          </div>
        </Col>
        <Col className='col-6'>
          <div className="card mb-3">
            <div className="card-header">
              <div className="card-title">Custom header with two months displayed</div>
            </div>
            <div className="card-body">
              <DatePicker
                locale={ko}
                dateFormat="yyyy-MM-dd"
                dateFormatCalendar="yyyy년 MM월"
                className="ymd"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                renderCustomHeader={({
                  monthDate,
                  customHeaderCount,
                  decreaseMonth,
                  increaseMonth,
                }) => (
                  <div className="header--custom">
                    <button
                      aria-label="Previous Month"
                      className={
                        "react-datepicker__navigation react-datepicker__navigation--previous"
                      }
                      style={customHeaderCount === 1 ? { visibility: "hidden" } : null}
                      onClick={decreaseMonth}
                    >
                      <span
                        className={
                          "react-datepicker__navigation-icon react-datepicker__navigation-icon--previous"
                        }
                      >
                        {"<"}
                      </span>
                    </button>
                    <span className="react-datepicker__current-month">
                      {monthDate.toLocaleString("ko", {
                        month: "long",
                        year: "numeric",
                      })}
                    </span>
                    <button
                      aria-label="Next Month"
                      className={
                        "react-datepicker__navigation react-datepicker__navigation--next"
                      }
                      style={customHeaderCount === 0 ? { visibility: "hidden" } : null}
                      onClick={increaseMonth}
                    >
                      <span
                        className={
                          "react-datepicker__navigation-icon react-datepicker__navigation-icon--next"
                        }
                      >
                        {">"}
                      </span>
                    </button>
                  </div>
                )}
                monthsShown={2}
              />
            </div>
          </div>
        </Col>
        <Col className='col-6'>
          <div className="card mb-3">
            <div className="card-header">
              <div className="card-title">Custom calendar class name</div>
            </div>
            <div className="card-body">
              <DatePicker
                locale={ko}
                dateFormat="yyyy-MM-dd"
                dateFormatCalendar="yyyy년 MM월"
                className="ymd"
                calendarClassName="border-danger"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>
          </div>
        </Col>
        <Col className='col-6'>
          <div className="card mb-3">
            <div className="card-header">
              <div className="card-title">Custom class name</div>
            </div>
            <div className="card-body">
              <DatePicker
                locale={ko}
                dateFormat="yyyy-MM-dd"
                dateFormatCalendar="yyyy년 MM월"
                className="border-danger ymd"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>
          </div>
        </Col>
        <Col className='col-6'>
          <div className="card mb-3">
            <div className="card-header">
              <div className="card-title">Custom date format</div>
            </div>
            <div className="card-body">
              <DatePicker
                locale={ko}
                dateFormat="yyyy/MM/dd"
                dateFormatCalendar="yyyy년 MM월"
                className="ymd"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>
          </div>
        </Col>
        <Col className='col-6'>
          <div className="card mb-3">
            <div className="card-header">
              <div className="card-title">Custom time class name</div>
            </div>
            <div className="card-body">
              <DatePicker
                locale={ko}
                dateFormat="yyyy-MM-dd HH:mm"
                dateFormatCalendar="yyyy년 MM월"
                className="ymdhm"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                showTimeSelect
                timeClassName={handleColor}
              />
            </div>
          </div>
        </Col>
        <Col className='col-6'>
          <div className="card mb-3">
            <div className="card-header">
              <div className="card-title">Date Range</div>
            </div>
            <div className="card-body">
              <DatePicker
                locale={ko}
                dateFormat="yyyy-MM-dd"
                dateFormatCalendar="yyyy년 MM월"
                className="ymd"
                selected={startDate1}
                onChange={(date) => setStartDate1(date)}
                selectsStart
                startDate={startDate1}
                endDate={endDate1}
              />
              <span className="tilde">~</span>
              <DatePicker
                locale={ko}
                dateFormat="yyyy-MM-dd"
                dateFormatCalendar="yyyy년 MM월"
                selected={endDate1}
                onChange={(date) => setEndDate1(date)}
                selectsEnd
                startDate={startDate1}
                endDate={endDate1}
                minDate={startDate1}
                className="ymd"
              />
            </div>
          </div>
        </Col>
        <Col className='col-6'>
          <div className="card mb-3">
            <div className="card-header">
              <div className="card-title">Date Range using input with clear button</div>
            </div>
            <div className="card-body">
              <DatePicker
                locale={ko}
                dateFormat="yyyy-MM-dd"
                dateFormatCalendar="yyyy년 MM월"
                selectsRange={true}
                startDate={startDate3}
                endDate={endDate}
                onChange={(update) => {
                  setDateRange(update);
                }}
                isClearable={true}
                className="ymd btn range"
              />
            </div>
          </div>
        </Col>
        <Col className='col-6'>
          <div className="card mb-3">
            <div className="card-header">
              <div className="card-title">Date Range with Portal</div>
            </div>
            <div className="card-body">
              <DatePicker
                locale={ko}
                dateFormat="yyyy-MM-dd"
                dateFormatCalendar="yyyy년 MM월"
                className="ymd range"
                selectsRange={true}
                startDate={startDate4}
                endDate={endDate4}
                onChange={(update) => {
                  setDateRange4(update);
                }}
                withPortal
              />
            </div>
          </div>
        </Col>
        <Col className='col-6'>
          <div className="card mb-3">
            <div className="card-header">
              <div className="card-title">Display Week Numbers</div>
            </div>
            <div className="card-body">
              <DatePicker
                locale={ko}
                dateFormat="yyyy-MM-dd"
                dateFormatCalendar="yyyy년 MM월"
                className="ymd"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                showWeekNumbers
              />
            </div>
          </div>
        </Col>
        <Col className='col-6'>
          <div className="card mb-3">
            <div className="card-header">
              <div className="card-title">Exclude Months in Month Picker</div>
            </div>
            <div className="card-body">
              <DatePicker
                locale={ko}
                dateFormat="yyyy-MM-dd"
                dateFormatCalendar="yyyy년 MM월"
                className="ymd"
                selected={startDate5}
                onChange={(date) => setStartDate5(date)}
                excludeDates={[new Date("2024-05-01"), new Date("2024-06-01")]}
                showMonthYearPicker
              />
            </div>
          </div>
        </Col>
        <Col className='col-6'>
          <div className="card mb-3">
            <div className="card-header">
              <div className="card-title">Exclude Months in Range Month Picker</div>
            </div>
            <div className="card-body">
              <DatePicker
                locale={ko}
                dateFormat="yyyy-MM-dd"
                dateFormatCalendar="yyyy년 MM월"
                className="ymd range"
                selected={startDate6}
                startDate={startDate6}
                endDate={endDate6}
                onChange={handleChange6}
                excludeDates={[
                  new Date("2024-05-01"),
                  new Date("2024-02-01"),
                  new Date("2024-01-01"),
                  new Date("2024-11-01"),
                ]}
                placeholderText="Select a month other than the disabled months"
                showMonthYearPicker
                selectsRange
              />
            </div>
          </div>
        </Col>
        <Col className='col-6'>
          <div className="card mb-3">
            <div className="card-header">
              <div className="card-title">Fixed height of Calendar</div>
            </div>
            <div className="card-body">
              <DatePicker
                locale={ko}
                dateFormat="yyyy-MM-dd"
                dateFormatCalendar="yyyy년 MM월"
                className="ymd"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                fixedHeight
              />
            </div>
          </div>
        </Col>
        <Col className='col-6'>
          <div className="card mb-3">
            <div className="card-header">
              <div className="card-title">Holiday dates</div>
            </div>
            <div className="card-body">
              <DatePicker
                locale={ko}
                dateFormat="yyyy-MM-dd"
                dateFormatCalendar="yyyy년 MM월"
                className="ymd"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                holidays={[
                  { date: "2024-01-01", holidayName: "신정" },
                  { date: "2024-02-09", holidayName: "설날" },
                  { date: "2024-02-10", holidayName: "설날" },
                  { date: "2024-02-11", holidayName: "설날" },
                  { date: "2024-02-12", holidayName: "대체공휴일" },
                  { date: "2024-03-01", holidayName: "삼일절" },
                  { date: "2024-04-10", holidayName: "22대 국회의원 선거일" },
                  { date: "2024-05-05", holidayName: "어린이날" },
                  { date: "2024-05-06", holidayName: "대체공휴일" },
                  { date: "2024-05-15", holidayName: "부처님 오신날" },
                  { date: "2024-06-06", holidayName: "헌충일" },
                  { date: "2024-08-15", holidayName: "광복절" },
                  { date: "2024-09-16", holidayName: "추석" },
                  { date: "2024-09-17", holidayName: "추석" },
                  { date: "2024-09-18", holidayName: "추석" },
                  { date: "2024-10-03", holidayName: "개천절" },
                  { date: "2024-10-09", holidayName: "한글날" },
                  { date: "2024-12-25", holidayName: "성탄절" },
                ]}
                placeholderText="휴일"
              />
            </div>
          </div>
        </Col>
        <Col className='col-6'>
          <div className="card mb-3">
            <div className="card-header">
              <div className="card-title">Input time</div>
            </div>
            <div className="card-body">
              <DatePicker
                locale={ko}
                dateFormat="yyyy-MM-dd HH:mm"
                dateFormatCalendar="yyyy년 MM월"
                className="ymdhm"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                timeInputLabel="Time:"
                showTimeInput
              />
            </div>
          </div>
        </Col>
        <Col className='col-6'>
          <div className="card mb-3">
            <div className="card-header">
              <div className="card-title">Month Picker</div>
            </div>
            <div className="card-body">
              <DatePicker
                locale={ko}
                dateFormat="yyyy-MM"
                dateFormatCalendar="yyyy년 MM월"
                className="ym"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                showMonthYearPicker
              />
            </div>
          </div>
        </Col>
        <Col className='col-6'>
          <div className="card mb-3">
            <div className="card-header">
              <div className="card-title">Month Picker Two Columns Layout</div>
            </div>
            <div className="card-body">
              <DatePicker
                locale={ko}
                dateFormat="yyyy-MM"
                dateFormatCalendar="yyyy년 MM월"
                className="ym"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                showMonthYearPicker
                showFullMonthYearPicker
                showTwoColumnMonthYearPicker
              />
            </div>
          </div>
        </Col>
        <Col className='col-6'>
          <div className="card mb-3">
            <div className="card-header">
              <div className="card-title">Month Picker Four Columns Layout</div>
            </div>
            <div className="card-body">
              <DatePicker
                locale={ko}
                dateFormat="yyyy-MM"
                dateFormatCalendar="yyyy년 MM월"
                className="ym"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                showMonthYearPicker
                showFullMonthYearPicker
                showFourColumnMonthYearPicker
              />
            </div>
          </div>
        </Col>
        <Col className='col-6'>
          <div className="card mb-3">
            <div className="card-header">
              <div className="card-title">Month dropdown</div>
            </div>
            <div className="card-body">
              <DatePicker
                locale={ko}
                dateFormat="yyyy-MM-dd"
                dateFormatCalendar="yyyy년 MM월"
                className="ymd"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                showMonthDropdown
              />
            </div>
          </div>
        </Col>
        <Col className='col-6'>
          <div className="card mb-3">
            <div className="card-header">
              <div className="card-title">Multiple months</div>
            </div>
            <div className="card-body">
              <DatePicker
                locale={ko}
                dateFormat="yyyy-MM-dd"
                dateFormatCalendar="yyyy년 MM월"
                className="ymd"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                monthsShown={2}
              />
            </div>
          </div>
        </Col>
        <Col className='col-4'>
          <div className="card mb-3">
            <div className="card-header">
              <div className="card-title">Date range for one datepicker</div>
            </div>
            <div className="card-body">
              <DatePicker
                locale={ko}
                dateFormat="yyyy-MM-dd"
                dateFormatCalendar="yyyy년 MM월"
                className="ymd"
                selected={startDate2}
                onChange={onChange2}
                startDate={startDate2}
                endDate={endDate2}
                selectsRange
                inline
              />
            </div>
          </div>
        </Col>
        <Col className='col-8'>
          <div className="card mb-3">
            <div className="card-header">
              <div className="card-title">Multiple months inline</div>
            </div>
            <div className="card-body">
              <DatePicker
                locale={ko}
                dateFormat="yyyy-MM-dd"
                dateFormatCalendar="yyyy년 MM월"
                className="ymd"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                monthsShown={2}
                inline
              />
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Calendar;

