import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { BsArrowClockwise, BsArrowCounterclockwise, BsArrowRepeat, BsArrowsFullscreen, BsBell, BsBellFill, BsBellSlash, BsBellSlashFill, BsBookmark, BsBookmarkFill, BsCardImage, BsCopy, BsEye, BsEyeFill, BsEyeSlash, BsEyeSlashFill, BsFloppy2Fill, BsGearFill, BsHandThumbsUp, BsHandThumbsUpFill, BsImages, BsLink45Deg, BsPaperclip, BsPencilFill, BsPencilSquare, BsReply, BsReplyAll, BsReplyAllFill, BsReplyFill, BsSearch, BsSend, BsSortDown, BsSortDownAlt, BsStar, BsStarFill, BsTrash3 } from "react-icons/bs";

const HorizontalIcons = () => {
  //let  value='';
  //const today = new Date();
  //const formattedDate = (today.getFullYear()) + "-" + ("00"+(today.getMonth()+1).toString()).slice(-2) + "-" + ("00"+(today.getDate().toString())).slice(-2);

  return (
    <Row>
      <Col className='col-6'>
        <div className="card btn-box mb-3">
          <div className="card-header">
            <div className="card-title">Icon 사용예시</div>
          </div>
          <div className="card-body">
            <div className='dec-box'>
              <div><span className='btn-tit'>새로고침/업데이트</span> <Button variant="only-icon"><BsArrowRepeat /></Button></div>
              <div><span className='btn-tit'>재시작</span> <Button variant="only-icon"><BsArrowClockwise /></Button></div>
              <div><span className='btn-tit'>되돌리기</span>
                <Button variant="only-icon"><BsArrowCounterclockwise /></Button>
                <Button variant="only-icon"><BsReply /></Button>
                <Button variant="only-icon"><BsReplyFill /></Button>
              </div>
            </div>
            <div className='dec-box mt-1'>
              <div><span className='btn-tit'>전체 되돌리기</span>
                <Button variant="only-icon"><BsReplyAll /></Button>
                <Button variant="only-icon"><BsReplyAllFill /></Button>
              </div>
              <div><span className='btn-tit'>검색</span> <Button variant="only-icon"><BsSearch /></Button></div>
              <div><span className='btn-tit'>수정</span> <Button variant="only-icon"><BsPencilFill /></Button></div>
            </div>
            <div className='dec-box mt-1'>
              <div><span className='btn-tit'>즐겨찾기</span>
                <Button variant="only-icon"><BsStar /></Button>
                <Button variant="only-icon"><BsStarFill /></Button>
              </div>
              <div><span className='btn-tit'>북마크</span>
                <Button variant="only-icon"><BsBookmark /></Button>
                <Button variant="only-icon"><BsBookmarkFill /></Button>
              </div>
              <div><span className='btn-tit'>알림</span>
                <Button variant="only-icon"><BsBell /></Button>
                <Button variant="only-icon"><BsBellSlash /></Button>
                <Button variant="only-icon"><BsBellFill /></Button>
                <Button variant="only-icon"><BsBellSlashFill /></Button>
              </div>
            </div>
            <div className='dec-box mt-1'>
              <div><span className='btn-tit'>첨부파일</span> <i className="only-icon"><BsPaperclip /></i></div>
              <div><span className='btn-tit'>링크</span> <i className="only-icon"><BsLink45Deg /></i></div>
              <div><span className='btn-tit'>이미지</span>
                <i className="only-icon"><BsCardImage /></i>
                <i className="only-icon"><BsImages /></i>
              </div>
            </div>
            <div className='dec-box mt-1'>
              <div><span className='btn-tit'>미리보기</span>
                <i className="only-icon"><BsEye /></i>
                <i className="only-icon"><BsEyeFill /></i>
                <i className="only-icon"><BsEyeSlash /></i>
                <i className="only-icon"><BsEyeSlashFill /></i>
              </div>
              <div><span className='btn-tit'>복사하기</span> <Button variant="only-icon"><BsCopy /></Button></div>
              <div><span className='btn-tit'>붙여넣기</span><Button variant="only-icon"></Button></div>
              <div>
                <span className='btn-tit'>FullScreen</span>
                <Button variant="only-icon"><BsArrowsFullscreen /></Button>
                <Button variant="only-icon"><i className='ico exitFullScreen'></i></Button>
              </div>
            </div>
          </div>
        </div>
      </Col> {/* solid */}

      <Col className='col-6'>
        <div className="card btn-box mb-3">
          <div className="card-header">
            <div className="card-title">Icon + Text</div>
          </div>
          <div className="card-body">
              <Button variant="icon-text" className='me-2 mb-2'><BsFloppy2Fill /> <span>저장</span></Button>
              <Button variant="icon-text" className='me-2 mb-2'><BsTrash3 /> <span>삭제</span></Button>
              <Button variant="icon-text" className='me-2 mb-2'><BsPencilSquare /> <span>편집</span></Button>
              <Button variant="icon-text" className='me-2 mb-2'><BsSend /> <span>보내기</span></Button>
              <Button variant="icon-text" className='me-2 mb-2'><BsGearFill /> <span>설정</span></Button>
              <Button variant="icon-text" className='me-2 mb-2'><BsSearch /> <span>검색</span></Button>
              <Button variant="icon-text" className='me-2 mb-2'><BsHandThumbsUp /> <span>좋아요 (0)</span></Button>
              <Button variant="icon-text" className='me-2 mb-2'><BsHandThumbsUpFill /> <span>좋아요 (1)</span></Button>
              <Button variant="icon-text" className='me-2 mb-2'><i className='ico msExcel'></i> <span>요약</span></Button>
              <Button variant="icon-text" className='me-2 mb-2'><i className='ico msExcel'></i> <span>상세</span></Button>
              <Button variant="icon-text" className='me-2 mb-2'><BsSortDown /> <span>내림차순</span></Button>
              <Button variant="icon-text" className='me-2 mb-2'><BsSortDownAlt /> <span>오름차순</span></Button>
          </div>
        </div>
      </Col> {/* solid */}
    </Row>
  );
}

export default HorizontalIcons;
