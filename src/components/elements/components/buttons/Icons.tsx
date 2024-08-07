import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { BsSend, BsSendFill, BsPaperclip, BsInfoCircle, BsInfoCircleFill , BsHandThumbsUp, BsHandThumbsUpFill, BsHandThumbsDown, BsHandThumbsDownFill, BsGearFill, BsGear, BsFolder, BsFolder2Open, BsFolderMinus, BsFolderPlus, BsFolderX, BsFolderCheck, BsFloppy, BsFloppy2Fill, BsFillBookmarkStarFill, BsEye, BsEyeFill, BsEyeSlash, BsEyeSlashFill, BsExclamationTriangle, BsExclamationTriangleFill, BsExclamationCircle, BsExclamationCircleFill, BsEnvelope, BsCaretLeft, BsCaretUp, BsCaretRight, BsCaretDown, BsCaretLeftFill, BsCaretUpFill, BsCaretRightFill, BsCaretDownFill, BsCardImage, BsCalendar3, BsTrash, BsSearch, BsArrowRepeat, BsAlarm, BsArrowLeft, BsArrowUp, BsArrowUpShort, BsArrowRight, BsArrowRightShort, BsArrowLeftShort, BsArrowDown, BsArrowDownShort, BsBookmark, BsBookmarkFill, BsCalculator } from "react-icons/bs";
import { IoSave, IoSaveOutline, IoTrashOutline } from "react-icons/io5";
import { AiOutlineUndo, AiOutlineSync, AiOutlineEdit, AiFillEdit, AiOutlineFolder, AiOutlineFolderOpen, AiFillEye, AiFillEyeInvisible, AiOutlineEye, AiOutlineEyeInvisible, AiOutlineDownload, AiOutlineLock, AiOutlineUpload,AiOutlineStar, AiFillStar, AiOutlineSetting, AiFillSetting, AiOutlineLink, AiOutlinePaperClip, AiOutlineUnlock, AiOutlineDoubleLeft, AiOutlineDoubleRight, AiFillBell, AiOutlineBell, AiOutlineArrowLeft, AiOutlineArrowUp, AiOutlineArrowRight, AiOutlineArrowDown, AiOutlineLeft, AiOutlineUp, AiOutlineRight, AiOutlineDown } from "react-icons/ai";
import { BiSolidDownload, BiSearch, BiRefresh, BiLogIn, BiLogOut, BiLock, BiLockOpen, BiLockAlt, BiLockOpenAlt, BiSolidLock, BiSolidLockOpen, BiSolidLockAlt, BiSolidLockOpenAlt, BiLinkExternal, BiLink, BiLinkAlt, BiEdit, BiEditAlt, BiDownload, BiUpload, BiBell, BiBellOff, BiSolidBell, BiSolidBellOff, BiArrowToLeft, BiArrowToTop, BiArrowToRight, BiArrowToBottom, BiArrowFromLeft, BiArrowFromTop, BiArrowFromRight, BiArrowFromBottom, BiDotsVerticalRounded, BiAlarm, BiArrowBack, BiCalculator, BiCalendar, BiChevronLeft, BiChevronUp, BiChevronRight, BiChevronDown, BiChevronsLeft, BiChevronsUp, BiChevronsRight, BiChevronsDown } from "react-icons/bi";
import { CgSearch, CgUndo, CgLogIn, CgLogOut, CgPushChevronLeft, CgPushChevronUp, CgPushChevronRight, CgPushChevronDown, CgChevronDoubleLeft, CgChevronDoubleUp, CgChevronDoubleRight, CgChevronDoubleDown, CgChevronLeft, CgChevronUp, CgChevronRight, CgChevronDown, CgTrash, CgPushLeft, CgPushUp, CgPushRight, CgPushDown, CgRedo, CgInternal, CgLock, CgLockUnlock, CgEye, CgEyeAlt, CgCalculator, CgBell, CgAttachment, CgAlarm } from "react-icons/cg";
import { FiStar, FiRefreshCcw, FiRefreshCw, FiRotateCcw, FiRotateCw, FiTrash2, FiSettings, FiThumbsUp, FiThumbsDown, FiPaperclip, FiLogIn, FiLogOut, FiLink, FiEye, FiEyeOff, FiDownload, FiUpload, FiExternalLink, FiEdit, FiEdit3, FiChevronsLeft, FiChevronsUp, FiChevronsRight, FiChevronsDown, FiChevronLeft, FiChevronUp, FiChevronRight, FiChevronDown, FiCalendar, FiBell, FiBellOff, FiArrowLeft, FiArrowUp, FiArrowRight, FiArrowDown, FiAlertTriangle, FiAlertCircle } from "react-icons/fi";
import { GoUnlock, GoLock, GoSignIn, GoSignOut, GoTrash, GoThumbsup, GoThumbsdown, GoStar, GoStarFill, GoSync, GoPin, GoPaperclip, GoMoveToStart, GoMoveToTop, GoMoveToEnd, GoMoveToBottom, GoLinkExternal, GoLink, GoDownload, GoUpload, GoCalendar, GoChevronLeft, GoChevronUp, GoChevronRight, GoChevronDown, GoBookmark, GoBookmarkFill, GoBellSlash, GoBell, GoBellFill, GoArrowLeft, GoArrowUp, GoArrowRight, GoAlertFill, GoAlert, GoArrowDown } from "react-icons/go";
import { HiArrowDown, HiArrowLeft, HiArrowRight, HiArrowSmDown, HiArrowSmLeft, HiArrowSmRight, HiArrowSmUp, HiArrowUp, HiBell, HiBookmark, HiCalculator, HiChevronDoubleDown, HiChevronDoubleLeft, HiChevronDoubleRight, HiChevronDoubleUp, HiChevronDown, HiChevronLeft, HiChevronRight, HiChevronUp, HiDownload, HiExclamation, HiExclamationCircle, HiEye, HiFolder, HiMinusCircle, HiOutlineBookmark, HiOutlineDownload, HiOutlineExclamation, HiOutlineExclamationCircle, HiOutlineExternalLink, HiOutlineEye, HiOutlineEyeOff, HiOutlineLink, HiOutlineLogin, HiOutlineLogout, HiOutlineMinus, HiOutlineMinusCircle, HiOutlineMinusSm, HiOutlinePaperClip, HiOutlinePlus, HiOutlinePlusCircle, HiOutlinePlusSm, HiOutlineRefresh, HiOutlineSearch, HiOutlineSwitchHorizontal, HiOutlineSwitchVertical, HiOutlineThumbDown, HiOutlineThumbUp, HiOutlineTrash, HiOutlineUpload, HiOutlineX, HiOutlineXCircle, HiPlusCircle, HiSwitchHorizontal, HiSwitchVertical, HiThumbDown, HiThumbUp, HiUpload, HiXCircle } from "react-icons/hi";
import { HiArrowDownTray, HiArrowLeftOnRectangle, HiArrowLongDown, HiArrowLongLeft, HiArrowLongRight, HiArrowLongUp, HiArrowPath, HiArrowRightOnRectangle, HiArrowUpTray, HiArrowsRightLeft, HiArrowsUpDown, HiBellSlash, HiCalendarDays, HiExclamationTriangle, HiEyeSlash, HiFolderOpen, HiHandThumbDown, HiHandThumbUp, HiOutlineExclamationTriangle, HiOutlineFolder, HiOutlineFolderOpen, HiOutlineHandThumbDown, HiOutlineHandThumbUp, HiLink, HiLockClosed, HiLockOpen, HiOutlineLockClosed, HiOutlineLockOpen, HiMagnifyingGlass } from "react-icons/hi2";

const Icons = () => {

  return (
    <Row>
      <Col className='col-6'>
        <div className="card btn-box mb-3">
          <div className="card-header">
            <div className="card-title">Bootstrap Icons</div>
          </div>
          <div className="card-body">
            <ButtonGroup className='d-block'>
              <Button variant="" className='mb-2'><BsFolder /> <span></span></Button>
              <Button variant="" className='mb-2'><BsFolder2Open /> <span></span></Button>
              <Button variant="" className='mb-2'><BsFolderCheck /> <span></span></Button>
              <Button variant="" className='mb-2'><BsFolderMinus /> <span></span></Button>
              <Button variant="" className='mb-2'><BsFolderPlus /> <span></span></Button>
              <Button variant="" className='mb-2'><BsFolderX /> <span></span></Button>
              
              <Button variant="" className='mb-2'><BsHandThumbsUp /> <span></span></Button>
              <Button variant="" className='mb-2'><BsHandThumbsUpFill /> <span></span></Button>
              <Button variant="" className='mb-2'><BsHandThumbsDown /> <span></span></Button>
              <Button variant="" className='mb-2'><BsHandThumbsDownFill /> <span></span></Button>
              <Button variant="" className='mb-2'><BsExclamationTriangle /> <span></span></Button>
              <Button variant="" className='mb-2'><BsExclamationTriangleFill /> <span></span></Button>
              <Button variant="" className='mb-2'><BsExclamationCircle /> <span></span></Button>
              <Button variant="" className='mb-2'><BsExclamationCircleFill /> <span></span></Button>
              <Button variant="" className='mb-2'><BsEye /> <span></span></Button>
              <Button variant="" className='mb-2'><BsEyeFill /> <span></span></Button>
              <Button variant="" className='mb-2'><BsEyeSlash /> <span></span></Button>
              <Button variant="" className='mb-2'><BsEyeSlashFill /> <span></span></Button>
              <Button variant="" className='mb-2'><BsPaperclip /> <span></span></Button>
              <Button variant="" className='mb-2'><BsSend /> <span></span></Button>
              <Button variant="" className='mb-2'><BsSendFill /> <span></span></Button>
              <Button variant="" className='mb-2'><BsInfoCircle /> <span></span></Button>
              <Button variant="" className='mb-2'><BsInfoCircleFill /> <span></span></Button>
            </ButtonGroup>
            
            <ButtonGroup className='d-block'>
              <Button variant="" className='mb-2'><BsArrowLeft /> <span></span></Button>
              <Button variant="" className='mb-2'><BsArrowUp /> <span></span></Button>
              <Button variant="" className='mb-2'><BsArrowRight /> <span></span></Button>
              <Button variant="" className='mb-2'><BsArrowDown /> <span></span></Button>

              <Button variant="" className='mb-2'><BsArrowLeftShort /> <span></span></Button>
              <Button variant="" className='mb-2'><BsArrowUpShort /> <span></span></Button>
              <Button variant="" className='mb-2'><BsArrowRightShort /> <span></span></Button>
              <Button variant="" className='mb-2'><BsArrowDownShort /> <span></span></Button>

              <Button variant="" className='mb-2'><BsCaretLeft /> <span></span></Button>
              <Button variant="" className='mb-2'><BsCaretUp  /> <span></span></Button>
              <Button variant="" className='mb-2'><BsCaretRight /> <span></span></Button>
              <Button variant="" className='mb-2'><BsCaretDown /> <span></span></Button>

              <Button variant="" className='mb-2'><BsCaretLeftFill /> <span></span></Button>
              <Button variant="" className='mb-2'><BsCaretUpFill /> <span></span></Button>
              <Button variant="" className='mb-2'><BsCaretRightFill /> <span></span></Button>
              <Button variant="" className='mb-2'><BsCaretDownFill /> <span></span></Button>
            </ButtonGroup>

            <ButtonGroup>
              <Button variant="" className='mb-2'><BsTrash /> <span>삭제</span></Button>
              <Button variant="" className='mb-2'><BsSearch /> <span>검색</span></Button>
              <Button variant="" className='mb-2'><BsAlarm /> <span>알람</span></Button>
              <Button variant="" className='mb-2'><BsEnvelope /> <span>메일</span></Button>
              <Button variant="" className='mb-2'><BsArrowRepeat /> <span>새로고침</span></Button>
              <Button variant="" className='mb-2'><BsGear /> <span>설정</span></Button>
              <Button variant="" className='mb-2'><BsGearFill /> <span>설정</span></Button>
            </ButtonGroup>

            <ButtonGroup>
              <Button variant="" className='mb-2'><BsBookmark /> <span>즐겨찾기</span></Button>
              <Button variant="" className='mb-2'><BsBookmarkFill /> <span>즐겨찾기</span></Button>
              <Button variant="" className='mb-2'><BsFillBookmarkStarFill /> <span>즐겨찾기</span></Button>
            </ButtonGroup>

            <ButtonGroup>
              <Button variant="" className='mb-2'><BsCalculator /> <span>계산기</span></Button>
              <Button variant="" className='mb-2'><BsCalendar3 /> <span>달력</span></Button>
              <Button variant="" className='mb-2'><BsCardImage /> <span>이미지</span></Button>
              <Button variant="" className='mb-2'><BsFloppy /> <span>저장</span></Button>
              <Button variant="" className='mb-2'><BsFloppy2Fill /> <span>저장</span></Button>
            </ButtonGroup>
            
          </div>
        </div>
      </Col> {/* Bootstrap Icons */}

      <Col className='col-6'>
        <div className="card btn-box mb-3">
          <div className="card-header">
            <div className="card-title">BoxIcons</div>
          </div>
          <div className="card-body">
            <ButtonGroup className='d-block'>
              <Button variant="" className='mb-2'><BiAlarm /> <span></span></Button>
              <Button variant="" className='mb-2'><BiCalculator /> <span></span></Button>
              <Button variant="" className='mb-2'><BiCalendar /> <span></span></Button>
              <Button variant="" className='mb-2'><BiDotsVerticalRounded /> <span></span></Button>
              <Button variant="" className='mb-2'><BiBell /> <span></span></Button>
              <Button variant="" className='mb-2'><BiBellOff /> <span></span></Button>
              <Button variant="" className='mb-2'><BiSolidBell /> <span></span></Button>
              <Button variant="" className='mb-2'><BiSolidBellOff /> <span></span></Button>
              <Button variant="" className='mb-2'><BiLink /> <span></span></Button>
              <Button variant="" className='mb-2'><BiLinkAlt /> <span></span></Button>
              <Button variant="" className='mb-2'><BiLinkExternal /> <span></span></Button>
              <Button variant="" className='mb-2'><BiLock /> <span></span></Button>
              <Button variant="" className='mb-2'><BiLockOpen /> <span></span></Button>
              <Button variant="" className='mb-2'><BiLockAlt /> <span></span></Button>
              <Button variant="" className='mb-2'><BiLockOpenAlt /> <span></span></Button>
              <Button variant="" className='mb-2'><BiSolidLock /> <span></span></Button>
              <Button variant="" className='mb-2'><BiSolidLockOpen /> <span></span></Button>
              <Button variant="" className='mb-2'><BiSolidLockAlt /> <span></span></Button>
              <Button variant="" className='mb-2'><BiSolidLockOpenAlt /> <span></span></Button>
              <Button variant="" className='mb-2'><BiRefresh /> <span></span></Button>
              <Button variant="" className='mb-2'><BiSearch /> <span></span></Button>
            </ButtonGroup>
            
            <ButtonGroup className='d-block'>
            </ButtonGroup>
            
            <ButtonGroup className='d-block'>
              <Button variant="" className='mb-2'><BiDownload /> <span>다운로드</span></Button>
              <Button variant="" className='mb-2'><BiSolidDownload /> <span>다운로드</span></Button>
              <Button variant="" className='mb-2'><BiUpload /> <span>업로드</span></Button>
              <Button variant="" className='mb-2'><BiEdit /> <span>수정</span></Button>
              <Button variant="" className='mb-2'><BiEditAlt /> <span>수정</span></Button>
              <Button variant="" className='mb-2'><BiLogIn /> <span>로그인</span></Button>
              <Button variant="" className='mb-2'><BiLogOut  /> <span>로그아웃</span></Button>
            </ButtonGroup>
            
            <ButtonGroup className='d-block'>
              <Button variant="" className='mb-2'><BiArrowBack /> <span></span></Button>

              <Button variant="" className='mb-2'><BiArrowFromLeft /> <span></span></Button>
              <Button variant="" className='mb-2'><BiArrowFromTop /> <span></span></Button>
              <Button variant="" className='mb-2'><BiArrowFromRight /> <span></span></Button>
              <Button variant="" className='mb-2'><BiArrowFromBottom /> <span></span></Button>
              <Button variant="" className='mb-2'><BiArrowToLeft /> <span></span></Button>
              <Button variant="" className='mb-2'><BiArrowToTop /> <span></span></Button>
              <Button variant="" className='mb-2'><BiArrowToRight /> <span></span></Button>
              <Button variant="" className='mb-2'><BiArrowToBottom /> <span></span></Button>
            </ButtonGroup>
            
            <ButtonGroup className='d-block'>
              <Button variant="" className='mb-2'><BiChevronLeft /> <span></span></Button>
              <Button variant="" className='mb-2'><BiChevronUp /> <span></span></Button>
              <Button variant="" className='mb-2'><BiChevronRight /> <span></span></Button>
              <Button variant="" className='mb-2'><BiChevronDown /> <span></span></Button>

              <Button variant="" className='mb-2'><BiChevronsLeft /> <span></span></Button>
              <Button variant="" className='mb-2'><BiChevronsUp /> <span></span></Button>
              <Button variant="" className='mb-2'><BiChevronsRight /> <span></span></Button>
              <Button variant="" className='mb-2'><BiChevronsDown /> <span></span></Button>
            </ButtonGroup>
          </div>
        </div>
      </Col> {/* BoxIcons */}

      <Col className='col-6'>
        <div className="card btn-box mb-3">
          <div className="card-header">
            <div className="card-title">Ionicons 5</div>
          </div>
          <div className="card-body">
              <Button variant="" className='mb-2'><IoSave /> <span>저장</span></Button>
              <Button variant="" className='mb-2'><IoSaveOutline /> <span>저장</span></Button>
              <Button variant="" className='mb-2'><IoTrashOutline /> <span>삭제</span></Button>
          </div>
        </div>
      </Col> {/* Ionicons 5 */}

      <Col className='col-6'>
        <div className="card btn-box mb-3">
          <div className="card-header">
            <div className="card-title">Ant Design Icons</div>
          </div>
          <div className="card-body">
            <ButtonGroup>
              <Button variant="" className='mb-2'><AiOutlineBell /> <span></span></Button>
              <Button variant="" className='mb-2'><AiFillBell /> <span></span></Button>
              <Button variant="" className='mb-2'><AiOutlineLock /> <span></span></Button>
              <Button variant="" className='mb-2'><AiOutlineUnlock /> <span></span></Button>
              <Button variant="" className='mb-2'><AiOutlineLink /> <span></span></Button>
              <Button variant="" className='mb-2'><AiOutlinePaperClip /> <span></span></Button>
              <Button variant="" className='mb-2'><AiOutlineSetting /> <span></span></Button>
              <Button variant="" className='mb-2'><AiFillSetting /> <span></span></Button>
              <Button variant="" className='mb-2'><AiOutlineStar /> <span></span></Button>
              <Button variant="" className='mb-2'><AiFillStar /> <span></span></Button>
              <Button variant="" className='mb-2'><AiOutlineEye /> <span></span></Button>
              <Button variant="" className='mb-2'><AiOutlineEyeInvisible /> <span></span></Button>
              <Button variant="" className='mb-2'><AiFillEye /> <span></span></Button>
              <Button variant="" className='mb-2'><AiFillEyeInvisible /> <span></span></Button>
              <Button variant="" className='mb-2'><AiOutlineFolder /> <span></span></Button>
              <Button variant="" className='mb-2'><AiOutlineFolderOpen /> <span></span></Button>
              <Button variant="" className='mb-2'><AiOutlineSync /> <span></span></Button>
              <Button variant="" className='mb-2'><AiOutlineUndo /> <span></span></Button>
            </ButtonGroup>
            <ButtonGroup className='d-block'>
              <Button variant="" className='mb-2'><AiOutlineArrowLeft /> <span></span></Button>
              <Button variant="" className='mb-2'><AiOutlineArrowUp /> <span></span></Button>
              <Button variant="" className='mb-2'><AiOutlineArrowRight /> <span></span></Button>
              <Button variant="" className='mb-2'><AiOutlineArrowDown /> <span></span></Button>
              
              <Button variant="" className='mb-2'><AiOutlineLeft /> <span></span></Button>
              <Button variant="" className='mb-2'><AiOutlineUp /> <span></span></Button>
              <Button variant="" className='mb-2'><AiOutlineRight /> <span></span></Button>
              <Button variant="" className='mb-2'><AiOutlineDown /> <span></span></Button>

              <Button variant="" className='mb-2'><AiOutlineDoubleLeft /> <span></span></Button>
              <Button variant="" className='mb-2'><AiOutlineDoubleRight /> <span></span></Button>
            </ButtonGroup>
            <ButtonGroup className='d-block'>
              <Button variant="" className='mb-2'><AiOutlineDownload /> <span>다운로드</span></Button>
              <Button variant="" className='mb-2'><AiOutlineUpload /> <span>업로드</span></Button>
              <Button variant="" className='mb-2'><AiOutlineEdit /> <span>수정</span></Button>
              <Button variant="" className='mb-2'><AiFillEdit /> <span>수정</span></Button>
            </ButtonGroup>
          </div>
        </div>
      </Col> {/* Ant Design Icons */}

      <Col className='col-6'>
        <div className="card btn-box mb-3">
          <div className="card-header">
            <div className="card-title">css.gg</div>
          </div>
          <div className="card-body">
            <ButtonGroup className='d-block'>
              <Button variant="" className='me-2 mb-2'><CgAlarm /> <span></span></Button>
              <Button variant="" className='me-2 mb-2'><CgAttachment /> <span></span></Button>
              <Button variant="" className='me-2 mb-2'><CgBell /> <span></span></Button>
              <Button variant="" className='me-2 mb-2'><CgCalculator /> <span></span></Button>
              <Button variant="" className='me-2 mb-2'><CgEye /> <span></span></Button>
              <Button variant="" className='me-2 mb-2'><CgEyeAlt /> <span></span></Button>
              <Button variant="" className='me-2 mb-2'><CgLock /> <span></span></Button>
              <Button variant="" className='me-2 mb-2'><CgLockUnlock /> <span></span></Button>
              <Button variant="" className='me-2 mb-2'><CgTrash /> <span></span></Button>
              <Button variant="" className='me-2 mb-2'><CgSearch /> <span></span></Button>
            </ButtonGroup>
            <ButtonGroup className='d-block'>
              <Button variant="" className='me-2 mb-2'><CgPushLeft /> <span></span></Button>
              <Button variant="" className='me-2 mb-2'><CgPushUp /> <span></span></Button>
              <Button variant="" className='me-2 mb-2'><CgPushRight /> <span></span></Button>
              <Button variant="" className='me-2 mb-2'><CgPushDown /> <span></span></Button>

              <Button variant="" className='me-2 mb-2'><CgChevronLeft /> <span></span></Button>
              <Button variant="" className='me-2 mb-2'><CgChevronUp /> <span></span></Button>
              <Button variant="" className='me-2 mb-2'><CgChevronRight /> <span></span></Button>
              <Button variant="" className='me-2 mb-2'><CgChevronDown /> <span></span></Button>
              
              <Button variant="" className='me-2 mb-2'><CgPushChevronLeft /> <span></span></Button>
              <Button variant="" className='me-2 mb-2'><CgPushChevronUp /> <span></span></Button>
              <Button variant="" className='me-2 mb-2'><CgPushChevronRight /> <span></span></Button>
              <Button variant="" className='me-2 mb-2'><CgPushChevronDown /> <span></span></Button>

              <Button variant="" className='me-2 mb-2'><CgChevronDoubleLeft /> <span></span></Button>
              <Button variant="" className='me-2 mb-2'><CgChevronDoubleUp /> <span></span></Button>
              <Button variant="" className='me-2 mb-2'><CgChevronDoubleRight /> <span></span></Button>
              <Button variant="" className='me-2 mb-2'><CgChevronDoubleDown /> <span></span></Button>
            </ButtonGroup>
            <ButtonGroup className='d-block'>
              <Button variant="" className='me-2 mb-2'><CgInternal /> <span>가져오기</span></Button>
              <Button variant="" className='me-2 mb-2'><CgRedo /> <span>새로고침</span></Button>
              <Button variant="" className='me-2 mb-2'><CgUndo /> <span>되돌리기</span></Button>
              <Button variant="" className='me-2 mb-2'><CgLogIn /> <span>로그인</span></Button>
              <Button variant="" className='me-2 mb-2'><CgLogOut /> <span>로그아웃</span></Button>
            </ButtonGroup>
          </div>
        </div>
      </Col> {/* css.gg */}

      <Col className='col-6'>
        <div className="card btn-box mb-3">
          <div className="card-header">
            <div className="card-title">Feather</div>
          </div>
          <div className="card-body">
            <ButtonGroup className='d-block'>
              <Button variant="" className='me-2 mb-2'><FiAlertCircle /> <span></span></Button>
              <Button variant="" className='me-2 mb-2'><FiAlertTriangle /> <span></span></Button>
              <Button variant="" className='me-2 mb-2'><FiBell /> <span></span></Button>
              <Button variant="" className='me-2 mb-2'><FiBellOff /> <span></span></Button>
              <Button variant="" className='me-2 mb-2'><FiCalendar /> <span></span></Button>
              <Button variant="" className='me-2 mb-2'><FiExternalLink /> <span></span></Button>
              <Button variant="" className='me-2 mb-2'><FiEye /> <span></span></Button>
              <Button variant="" className='me-2 mb-2'><FiEyeOff /> <span></span></Button>
              <Button variant="" className='me-2 mb-2'><FiLink /> <span></span></Button>
              <Button variant="" className='me-2 mb-2'><FiPaperclip /> <span></span></Button>
              <Button variant="" className='me-2 mb-2'><FiThumbsUp /> <span></span></Button>
              <Button variant="" className='me-2 mb-2'><FiThumbsDown /> <span></span></Button>
              <Button variant="" className='me-2 mb-2'><FiSettings /> <span></span></Button>
              <Button variant="" className='me-2 mb-2'><FiTrash2 /> <span></span></Button>
              <Button variant="" className='me-2 mb-2'><FiRefreshCcw /> <span></span></Button>
              <Button variant="" className='me-2 mb-2'><FiRefreshCw /> <span></span></Button>
              <Button variant="" className='me-2 mb-2'><FiRotateCcw /> <span></span></Button>
              <Button variant="" className='me-2 mb-2'><FiRotateCw /> <span></span></Button>
              <Button variant="" className='me-2 mb-2'><FiStar /> <span></span></Button>
            </ButtonGroup>
            <ButtonGroup className='d-block'>
              <Button variant="" className='me-2 mb-2'><FiArrowLeft /> <span></span></Button>
              <Button variant="" className='me-2 mb-2'><FiArrowUp /> <span></span></Button>
              <Button variant="" className='me-2 mb-2'><FiArrowRight /> <span></span></Button>
              <Button variant="" className='me-2 mb-2'><FiArrowDown /> <span></span></Button>

              <Button variant="" className='me-2 mb-2'><FiChevronLeft /> <span></span></Button>
              <Button variant="" className='me-2 mb-2'><FiChevronUp /> <span></span></Button>
              <Button variant="" className='me-2 mb-2'><FiChevronRight /> <span></span></Button>
              <Button variant="" className='me-2 mb-2'><FiChevronDown /> <span></span></Button>

              <Button variant="" className='me-2 mb-2'><FiChevronsLeft /> <span></span></Button>
              <Button variant="" className='me-2 mb-2'><FiChevronsUp /> <span></span></Button>
              <Button variant="" className='me-2 mb-2'><FiChevronsRight /> <span></span></Button>
              <Button variant="" className='me-2 mb-2'><FiChevronsDown /> <span></span></Button>
            </ButtonGroup>
            <ButtonGroup className='d-block'>
              <Button variant="" className='me-2 mb-2'><FiEdit /> <span>수정</span></Button>
              <Button variant="" className='me-2 mb-2'><FiEdit3 /> <span>수정</span></Button>
              <Button variant="" className='me-2 mb-2'><FiUpload /> <span>업로드</span></Button>
              <Button variant="" className='me-2 mb-2'><FiDownload /> <span>다운로드</span></Button>
              <Button variant="" className='me-2 mb-2'><FiLogIn /> <span>로그인</span></Button>
              <Button variant="" className='me-2 mb-2'><FiLogOut /> <span>로그아웃</span></Button>
            </ButtonGroup>
          </div>
        </div>
      </Col> {/* Feather */}

      <Col className='col-6'>
        <div className="card btn-box mb-3">
          <div className="card-header">
            <div className="card-title">Github Octicons icons</div>
          </div>
          <div className="card-body">
            <ButtonGroup className='d-block'>
              <Button variant="" className='me-2 mb-2'><GoAlert /> <span></span></Button>
              <Button variant="" className='me-2 mb-2'><GoAlertFill /> <span></span></Button>
              <Button variant="" className='me-2 mb-2'><GoBell /> <span></span></Button>
              <Button variant="" className='me-2 mb-2'><GoBellFill /> <span></span></Button>
              <Button variant="" className='me-2 mb-2'><GoBellSlash /> <span></span></Button>
              <Button variant="" className='me-2 mb-2'><GoBookmark /> <span></span></Button>
              <Button variant="" className='me-2 mb-2'><GoBookmarkFill /> <span></span></Button>
              <Button variant="" className='me-2 mb-2'><GoCalendar /> <span></span></Button>
              <Button variant="" className='me-2 mb-2'><GoLink /> <span></span></Button>
              <Button variant="" className='me-2 mb-2'><GoPaperclip /> <span></span></Button>
              <Button variant="" className='me-2 mb-2'><GoLinkExternal /> <span></span></Button>
              <Button variant="" className='me-2 mb-2'><GoPin /> <span></span></Button>
              <Button variant="" className='me-2 mb-2'><GoSync /> <span></span></Button>
              <Button variant="" className='me-2 mb-2'><GoStar /> <span></span></Button>
              <Button variant="" className='me-2 mb-2'><GoStarFill /> <span></span></Button>
              <Button variant="" className='me-2 mb-2'><GoThumbsup /> <span></span></Button>
              <Button variant="" className='me-2 mb-2'><GoThumbsdown /> <span></span></Button>
              <Button variant="" className='me-2 mb-2'><GoTrash /> <span></span></Button>
              <Button variant="" className='me-2 mb-2'><GoLock /> <span></span></Button>
              <Button variant="" className='me-2 mb-2'><GoUnlock /> <span></span></Button>
            </ButtonGroup>

            <ButtonGroup className='d-block'>
              <Button variant="" className='me-2 mb-2'><GoArrowLeft /> <span></span></Button>
              <Button variant="" className='me-2 mb-2'><GoArrowUp /> <span></span></Button>
              <Button variant="" className='me-2 mb-2'><GoArrowRight /> <span></span></Button>
              <Button variant="" className='me-2 mb-2'><GoArrowDown /> <span></span></Button>

              <Button variant="" className='me-2 mb-2'><GoChevronLeft /> <span></span></Button>
              <Button variant="" className='me-2 mb-2'><GoChevronUp /> <span></span></Button>
              <Button variant="" className='me-2 mb-2'><GoChevronRight /> <span></span></Button>
              <Button variant="" className='me-2 mb-2'><GoChevronDown /> <span></span></Button>

              <Button variant="" className='me-2 mb-2'><GoMoveToStart /> <span></span></Button>
              <Button variant="" className='me-2 mb-2'><GoMoveToTop /> <span></span></Button>
              <Button variant="" className='me-2 mb-2'><GoMoveToEnd /> <span></span></Button>
              <Button variant="" className='me-2 mb-2'><GoMoveToBottom /> <span></span></Button>
            </ButtonGroup>

            <ButtonGroup>
              <Button variant="" className='me-2 mb-2'><GoUpload /> <span>업로드</span></Button>
              <Button variant="" className='me-2 mb-2'><GoDownload /> <span>다운로드</span></Button>
              <Button variant="" className='me-2 mb-2'><GoSignIn /> <span>로그인</span></Button>
              <Button variant="" className='me-2 mb-2'><GoSignOut /> <span>로그아웃</span></Button>
            </ButtonGroup>
          </div>
        </div>
      </Col> {/* Github Octicons icons */}

      <Col className='col-6'>
        <div className="card btn-box mb-3">
          <div className="card-header">
            <div className="card-title">Heroicons</div>
          </div>
          <div className="card-body">
            <ButtonGroup className='d-block'>
              <Button variant="" className='me-2 mb-2'><HiBell /> <span></span></Button>
              <Button variant="" className='me-2 mb-2'><HiBookmark /> <span></span></Button>
              <Button variant="" className='me-2 mb-2'><HiOutlineBookmark /> <span></span></Button>
              <Button variant="" className='me-2 mb-2'><HiCalculator /> <span></span></Button>
              <Button variant="" className='me-2 mb-2'><HiOutlineExclamation /> <span></span></Button>
              <Button variant="" className='me-2 mb-2'><HiExclamation /> <span></span></Button>
              <Button variant="" className='me-2 mb-2'><HiOutlineExclamationCircle /> <span></span></Button>
              <Button variant="" className='me-2 mb-2'><HiExclamationCircle /> <span></span></Button>
              <Button variant="" className='me-2 mb-2'><HiOutlineExternalLink /> <span></span></Button>
              <Button variant="" className='me-2 mb-2'><HiOutlineLink /> <span></span></Button>
              <Button variant="" className='me-2 mb-2'><HiOutlineEye /> <span></span></Button>
              <Button variant="" className='me-2 mb-2'><HiOutlineEyeOff /> <span></span></Button>
              <Button variant="" className='me-2 mb-2'><HiOutlineRefresh /> <span></span></Button>
              <Button variant="" className='me-2 mb-2'><HiOutlineSearch /> <span></span></Button>
              <Button variant="" className='me-2 mb-2'><HiOutlinePaperClip /> <span></span></Button>
              <Button variant="" className='me-2 mb-2'><HiOutlineTrash /> <span></span></Button>
              <Button variant="" className='me-2 mb-2'><HiThumbUp /> <span></span></Button>
              <Button variant="" className='me-2 mb-2'><HiOutlineThumbUp /> <span></span></Button>
              <Button variant="" className='me-2 mb-2'><HiThumbDown /> <span></span></Button>
              <Button variant="" className='me-2 mb-2'><HiOutlineThumbDown /> <span></span></Button>
              <Button variant="" className='me-2 mb-2'><HiOutlinePlus /> <span></span></Button>
              <Button variant="" className='me-2 mb-2'><HiOutlinePlusSm /> <span></span></Button>
              <Button variant="" className='me-2 mb-2'><HiOutlinePlusCircle /> <span></span></Button>
              <Button variant="" className='me-2 mb-2'><HiPlusCircle /> <span></span></Button>
              <Button variant="" className='me-2 mb-2'><HiOutlineMinus/> <span></span></Button>
              <Button variant="" className='me-2 mb-2'><HiOutlineMinusSm/> <span></span></Button>
              <Button variant="" className='me-2 mb-2'><HiOutlineMinusCircle/> <span></span></Button>
              <Button variant="" className='me-2 mb-2'><HiMinusCircle/> <span></span></Button>
              <Button variant="" className='me-2 mb-2'><HiOutlineX/> <span></span></Button>
              <Button variant="" className='me-2 mb-2'><HiOutlineXCircle/> <span></span></Button>
              <Button variant="" className='me-2 mb-2'><HiXCircle/> <span></span></Button>
            </ButtonGroup>

            <ButtonGroup className='d-block'>
              <Button variant="" className='me-2 mb-2'><HiArrowLeft /> <span></span></Button>
              <Button variant="" className='me-2 mb-2'><HiArrowUp /> <span></span></Button>
              <Button variant="" className='me-2 mb-2'><HiArrowRight /> <span></span></Button>
              <Button variant="" className='me-2 mb-2'><HiArrowDown /> <span></span></Button>

              <Button variant="" className='me-2 mb-2'><HiArrowSmLeft /> <span></span></Button>
              <Button variant="" className='me-2 mb-2'><HiArrowSmUp /> <span></span></Button>
              <Button variant="" className='me-2 mb-2'><HiArrowSmRight /> <span></span></Button>
              <Button variant="" className='me-2 mb-2'><HiArrowSmDown /> <span></span></Button>

              <Button variant="" className='me-2 mb-2'><HiChevronLeft /> <span></span></Button>
              <Button variant="" className='me-2 mb-2'><HiChevronUp /> <span></span></Button>
              <Button variant="" className='me-2 mb-2'><HiChevronRight /> <span></span></Button>
              <Button variant="" className='me-2 mb-2'><HiChevronDown /> <span></span></Button>

              <Button variant="" className='me-2 mb-2'><HiChevronDoubleLeft /> <span></span></Button>
              <Button variant="" className='me-2 mb-2'><HiChevronDoubleUp /> <span></span></Button>
              <Button variant="" className='me-2 mb-2'><HiChevronDoubleRight /> <span></span></Button>
              <Button variant="" className='me-2 mb-2'><HiChevronDoubleDown /> <span></span></Button>

              <Button variant="" className='me-2 mb-2'><HiSwitchHorizontal /> <span></span></Button>
              <Button variant="" className='me-2 mb-2'><HiOutlineSwitchHorizontal /> <span></span></Button>
              <Button variant="" className='me-2 mb-2'><HiSwitchVertical /> <span></span></Button>
              <Button variant="" className='me-2 mb-2'><HiOutlineSwitchVertical /> <span></span></Button>
            </ButtonGroup>

            <ButtonGroup>
              <Button variant="" className='me-2 mb-2'><HiUpload /> <span>업로드</span></Button>
              <Button variant="" className='me-2 mb-2'><HiDownload /> <span>다운로드</span></Button>
              <Button variant="" className='me-2 mb-2'><HiOutlineUpload /> <span>업로드</span></Button>
              <Button variant="" className='me-2 mb-2'><HiOutlineDownload /> <span>다운로드</span></Button>
              <Button variant="" className='me-2 mb-2'><HiOutlineLogin /> <span>로그인</span></Button>
              <Button variant="" className='me-2 mb-2'><HiOutlineLogout /> <span>로그아웃</span></Button>
            </ButtonGroup>
          </div>
        </div>
      </Col> {/* Heroicons */}

      <Col className='col-6'>
        <div className="card btn-box mb-3">
          <div className="card-header">
            <div className="card-title">Heroicons 2</div>
          </div>
          <div className="card-body">
            <ButtonGroup className='d-block'>
              <Button variant="" className='me-2 mb-2'><HiArrowPath /> <span></span></Button>
              <Button variant="" className='me-2 mb-2'><HiBell /> <span></span></Button>
              <Button variant="" className='me-2 mb-2'><HiBellSlash /> <span></span></Button>
              <Button variant="" className='me-2 mb-2'><HiBookmark /> <span></span></Button>
              <Button variant="" className='me-2 mb-2'><HiOutlineBookmark /> <span></span></Button>
              <Button variant="" className='me-2 mb-2'><HiCalendarDays /> <span></span></Button>
              <Button variant="" className='me-2 mb-2'><HiExclamationCircle /> <span></span></Button>
              <Button variant="" className='me-2 mb-2'><HiOutlineExclamationCircle /> <span></span></Button>
              <Button variant="" className='me-2 mb-2'><HiExclamationTriangle /> <span></span></Button>
              <Button variant="" className='me-2 mb-2'><HiOutlineExclamationTriangle /> <span></span></Button>
              <Button variant="" className='me-2 mb-2'><HiEye /> <span></span></Button>
              <Button variant="" className='me-2 mb-2'><HiEyeSlash /> <span></span></Button>
              <Button variant="" className='me-2 mb-2'><HiFolder /> <span></span></Button>
              <Button variant="" className='me-2 mb-2'><HiFolderOpen /> <span></span></Button>
              <Button variant="" className='me-2 mb-2'><HiOutlineFolder /> <span></span></Button>
              <Button variant="" className='me-2 mb-2'><HiOutlineFolderOpen /> <span></span></Button>
              <Button variant="" className='me-2 mb-2'><HiHandThumbUp /> <span></span></Button>
              <Button variant="" className='me-2 mb-2'><HiOutlineHandThumbUp /> <span></span></Button>
              <Button variant="" className='me-2 mb-2'><HiHandThumbDown /> <span></span></Button>
              <Button variant="" className='me-2 mb-2'><HiOutlineHandThumbDown /> <span></span></Button>
              <Button variant="" className='me-2 mb-2'><HiLink /> <span></span></Button>
              <Button variant="" className='me-2 mb-2'><HiLockClosed /> <span></span></Button>
              <Button variant="" className='me-2 mb-2'><HiLockOpen /> <span></span></Button>
              <Button variant="" className='me-2 mb-2'><HiOutlineLockClosed /> <span></span></Button>
              <Button variant="" className='me-2 mb-2'><HiOutlineLockOpen /> <span></span></Button>
              <Button variant="" className='me-2 mb-2'><HiMagnifyingGlass /> <span></span></Button>
            </ButtonGroup>

            <ButtonGroup className='d-block'>
              <Button variant="" className='me-2 mb-2'><HiArrowLeft /> <span></span></Button>
              <Button variant="" className='me-2 mb-2'><HiArrowUp /> <span></span></Button>
              <Button variant="" className='me-2 mb-2'><HiArrowRight /> <span></span></Button>
              <Button variant="" className='me-2 mb-2'><HiArrowDown /> <span></span></Button>

              <Button variant="" className='me-2 mb-2'><HiArrowLongLeft /> <span></span></Button>
              <Button variant="" className='me-2 mb-2'><HiArrowLongUp /> <span></span></Button>
              <Button variant="" className='me-2 mb-2'><HiArrowLongRight /> <span></span></Button>
              <Button variant="" className='me-2 mb-2'><HiArrowLongDown /> <span></span></Button>

              <Button variant="" className='me-2 mb-2'><HiChevronLeft /> <span></span></Button>
              <Button variant="" className='me-2 mb-2'><HiChevronUp /> <span></span></Button>
              <Button variant="" className='me-2 mb-2'><HiChevronRight /> <span></span></Button>
              <Button variant="" className='me-2 mb-2'><HiChevronDown /> <span></span></Button>

              <Button variant="" className='me-2 mb-2'><HiChevronDoubleLeft /> <span></span></Button>
              <Button variant="" className='me-2 mb-2'><HiChevronDoubleUp /> <span></span></Button>
              <Button variant="" className='me-2 mb-2'><HiChevronDoubleRight /> <span></span></Button>
              <Button variant="" className='me-2 mb-2'><HiChevronDoubleDown /> <span></span></Button>

              <Button variant="" className='me-2 mb-2'><HiArrowsRightLeft /> <span></span></Button>
              <Button variant="" className='me-2 mb-2'><HiArrowsUpDown /> <span></span></Button>
            </ButtonGroup>

            <ButtonGroup>
              <Button variant="" className='me-2 mb-2'><HiArrowUpTray /> <span>업로드</span></Button>
              <Button variant="" className='me-2 mb-2'><HiArrowDownTray /> <span>다운로드</span></Button>
              <Button variant="" className='me-2 mb-2'><HiArrowLeftOnRectangle /> <span>로그인</span></Button>
              <Button variant="" className='me-2 mb-2'><HiArrowRightOnRectangle /> <span>로그아웃</span></Button>
            </ButtonGroup>
          </div>
        </div>
      </Col> {/* Heroicons 2 */}

      <Col className='col-6'>
        <div className="card btn-box mb-3">
          <div className="card-header">
            <div className="card-title">solid</div>
          </div>
          <div className="card-body">
            <ButtonGroup className='d-block'>
            </ButtonGroup>
            <ButtonGroup>
              <Button variant="solid-primary" className='me-2 mb-2'><IoSave /> <span>저장</span></Button>
              <Button variant="solid-primary" className='me-2 mb-2'><IoSaveOutline /> 저장</Button>
              <Button variant="solid-primary" className='me-2 mb-2'><BsTrash /> 삭제</Button>
              <Button variant="solid-primary" className='me-2 mb-2'><BsSearch /> 검색</Button>
            </ButtonGroup>
          </div>
        </div>
      </Col> {/* solid */}
    </Row>
  );
}

export default Icons;
