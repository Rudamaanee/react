import { Button, Row, Col, ButtonGroup, Form, InputGroup } from "react-bootstrap";
import PageTitArea from "../layout/PageTitArea";
import { BsSearch } from "react-icons/bs";

const Search = () => {
  let  value='';
  const today = new Date();
  const formattedDate = (today.getFullYear()) + "-" + ("00"+(today.getMonth()+1).toString()).slice(-2) + "-" + ("00"+(today.getDate().toString())).slice(-2);

  return (
    <>
      <PageTitArea pageTitHeading="Search" pageTitSubHeading="" />
      <Row>
        <Col className='col-12'>
          <div className="card btn-box mb-3">
            <div className="card-header">
              <div className="card-title">기본 검색</div>
            </div>
            <div className="card-body">
              <InputGroup className="search-box mb-2" size="sm">
                <Form.Control type="text" placeholder=" sm 검색어를 입력해 주세요" defaultValue={value} />
                <Button variant="primary" size="sm" className="center"><BsSearch /> </Button>
              </InputGroup>

              <InputGroup className="search-box mb-2">
                <Form.Control type="text" placeholder="검색어를 입력해 주세요" defaultValue={value} />
                <Button variant="primary" className="center"><BsSearch /> </Button>
              </InputGroup>

              <InputGroup className="search-box mb-2" size="lg">
                <Form.Control type="text" placeholder="lg 검색어를 입력해 주세요" defaultValue={value} />
                <Button variant="primary" size="lg" className="center"><BsSearch /> </Button>
              </InputGroup>
            </div>
          </div>
        </Col> {/* 기본 검색 */}

        <Col className='col-12'>
          <div className="card btn-box mb-3">
            <div className="card-header">
              <div className="card-title">통합 검색</div>
            </div>
            <div className="card-body">
              <InputGroup className="search-box mb-2" size="sm">
                <Form.Select aria-label="total search">
                  <option>전체 통합검색</option>
                  <option>해당기관 내 검색</option>
                </Form.Select>
                <Form.Control type="text" placeholder="sm 검색어를 입력해 주세요" defaultValue={value} />
                <Button variant="primary" size="sm">검색</Button>
              </InputGroup>

              <InputGroup className="search-box mb-2">
                <Form.Select aria-label="total search">
                  <option>전체 통합검색</option>
                  <option>해당기관 내 검색</option>
                </Form.Select>
                <Form.Control type="text" placeholder="검색어를 입력해 주세요" defaultValue={value} />
                <Button variant="primary">검색</Button>
              </InputGroup>

              <InputGroup className="search-box mb-4" size="lg">
                <Form.Select aria-label="total search">
                  <option>전체 통합검색</option>
                  <option>해당기관 내 검색</option>
                </Form.Select>
                <Form.Control type="text" placeholder="lg 검색어를 입력해 주세요" defaultValue={value} />
                <Button variant="primary" size="lg">검색</Button>
              </InputGroup>

              <InputGroup className="search-box mb-2" size="sm">
                <Form.Control type="text" placeholder="검색어를 입력해 주세요" defaultValue={value} />
                <Button variant="primary" size="sm">해당기관 내 검색</Button>
                <Button variant="primary" size="sm">전체 통합검색</Button>
              </InputGroup>
              
              <InputGroup className="search-box mb-2">
                <Form.Control type="text" placeholder="검색어를 입력해 주세요" defaultValue={value} />
                <Button variant="primary">해당기관 내 검색</Button>
                <Button variant="primary">전체 통합검색</Button>
              </InputGroup>

              <InputGroup className="search-box mb-4" size="lg">
                <Form.Control type="text" placeholder="검색어를 입력해 주세요" defaultValue={value} />
                <Button variant="primary" size="lg">해당기관 내 검색</Button>
                <Button variant="primary" size="lg">전체 통합검색</Button>
              </InputGroup>

              <InputGroup className="search-box mb-2" size="sm">
                <Form.Control type="text" placeholder="검색어를 입력해 주세요" defaultValue={value} />
                <Button variant="primary" size="sm" className="right-radius">전체 통합검색</Button>
                <Form.Check
                  type="checkbox"
                  id="setCheck1"
                  label="해당기관 내 검색"
                  className="mx-2"
                />
              </InputGroup>

              <InputGroup className="search-box mb-2">
                <Form.Control type="text" placeholder="검색어를 입력해 주세요" defaultValue={value} />
                <Button variant="primary" className="right-radius">전체 통합검색</Button>
                <Form.Check
                  type="checkbox"
                  id="setCheck2"
                  label="해당기관 내 검색"
                  className="mx-2"
                />
              </InputGroup>

              <InputGroup className="search-box mb-4" size="lg">
                <Form.Control type="text" placeholder="검색어를 입력해 주세요" defaultValue={value} />
                <Button variant="primary" size="lg" className="right-radius">전체 통합검색</Button>
                <Form.Check
                  type="checkbox"
                  id="setCheck3"
                  label="해당기관 내 검색"
                  className="mx-2 mt-2"
                />
              </InputGroup>

              <InputGroup className="search-box mb-2" size="sm">
                <Form.Control type="text" placeholder="제목" defaultValue={value} />
                <Button variant="primary" size="sm">My Hub 저장</Button>
                <Button variant="secondary" size="sm">초기화</Button>
              </InputGroup>

              <InputGroup className="search-box mb-2">
                <Form.Control type="text" placeholder="제목" defaultValue={value} />
                <Button variant="primary">My Hub 저장</Button>
                <Button variant="secondary">초기화</Button>
              </InputGroup>

              <InputGroup className="search-box mb-2" size="lg">
                <Form.Control type="text" placeholder="제목" defaultValue={value} />
                <Button variant="primary" size="lg">My Hub 저장</Button>
                <Button variant="secondary" size="lg">초기화</Button>
              </InputGroup>
            </div>
          </div>
        </Col> {/* 통합 검색 */}

        <Col className='col-12'>
          <div className="card btn-box mb-3">
            <div className="card-header">
              <div className="card-title">게시판 검색</div>
            </div>
            <div className="card-body">
              <InputGroup className="board-search-box mb-2" size="sm">
                <Form.Select aria-label="total search">
                  <option>제목</option>
                  <option>내용</option>
                </Form.Select>
                <Form.Control type="text" placeholder=" sm 검색어를 입력해 주세요" defaultValue={value} />
                <Button variant="primary" size="sm" className="center"><BsSearch /> </Button>
              </InputGroup>
            </div>
          </div>
        </Col> {/* 게시판 검색 */}

        <Col className='col-12'>
          <div className="card btn-box mb-3">
            <div className="card-header">
              <div className="card-title">기간 검색</div>
            </div>
            <div className="card-body">
              <div className="d-inline-block">
                <InputGroup className="search-box duration-search date sm mt-2">
                  <Form.Control type="text" className="d-inline-block" name='start-month' size="sm" placeholder="" defaultValue={formattedDate} />
                  <span className='tilde'>~</span>
                  <Form.Control type="text" className="d-inline-block"  name='end-month' size="sm" placeholder="" defaultValue={formattedDate} />
                </InputGroup>
              </div>
              <div className="d-inline-block mx-2">
                <InputGroup className="search-box duration-search date mt-2">
                  <Form.Control type="text" className="d-inline-block"  name='start-month' placeholder="" defaultValue={formattedDate} />
                  <span className='tilde'>~</span>
                  <Form.Control type="text" className="d-inline-block"  name='end-month' placeholder="" defaultValue={formattedDate} />
                </InputGroup>
              </div>
              <div></div>
              <div className="d-inline-block">
                <InputGroup className="search-box duration-search date sm mt-2">
                  <Form.Control type="text" className="d-inline-block" name='start-month' size="sm" placeholder="" defaultValue={formattedDate} />
                  <span className='tilde'>~</span>
                  <Form.Control type="text" className="d-inline-block"  name='end-month' size="sm" placeholder="" defaultValue={formattedDate} />
                  <Button variant="secondary btn-sm"><BsSearch /> </Button>
                </InputGroup>
              </div>
              <div className="d-inline-block mx-2">
                <InputGroup className="search-box duration-search date mt-2">
                  <Form.Control type="text" className="d-inline-block"  name='start-month' placeholder="" defaultValue={formattedDate} />
                  <span className='tilde'>~</span>
                  <Form.Control type="text" className="d-inline-block"  name='end-month' placeholder="" defaultValue={formattedDate} />
                  <Button variant="secondary"><BsSearch /> </Button>
                </InputGroup>
              </div>
              <div></div>
              <InputGroup className="search-box duration-search date sm mt-2 w-auto">
                <ButtonGroup>
                  <Button variant="light btn-sm">1년</Button>
                  <Button variant="light btn-sm">3년</Button>
                  <Button variant="light btn-sm">5년</Button>
                  <Button variant="light btn-sm">10년</Button>
                  <Button variant="light btn-sm">전체</Button>
                </ButtonGroup>
                <Form.Control type="text" name='start-month' size="sm" placeholder="" defaultValue={formattedDate} />
                <span className='tilde'>~</span>
                <Form.Control type="text" name='end-month' size="sm" placeholder="" defaultValue={formattedDate} />
                <Button variant="secondary btn-sm"><BsSearch /> </Button>
              </InputGroup>
              <div></div>    
              <InputGroup className="search-box duration-search date mt-2 w-auto">
                <ButtonGroup>
                  <Button variant="light">1년</Button>
                  <Button variant="light">3년</Button>
                  <Button variant="light">5년</Button>
                  <Button variant="light">10년</Button>
                  <Button variant="light">전체</Button>
                </ButtonGroup>
                <Form.Control type="text" name='start-month' placeholder="" defaultValue={formattedDate} />
                <span className='tilde'>~</span>
                <Form.Control type="text" name='end-month' placeholder="" defaultValue={formattedDate} />
                <Button variant="secondary"><BsSearch /> </Button>
              </InputGroup>
            </div>
          </div>
        </Col> {/* 기간 검색 */}

        <Col className='col-12'>
          <div className="card btn-box mb-3">
            <div className="card-header">
              <div className="card-title">기본 검색</div>
            </div>
            <div className="card-body">
              
            </div>
          </div>
        </Col> {/* 기본 검색 */}
      </Row>

    </>
  );
};

export default Search;
