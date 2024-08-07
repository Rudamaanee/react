import { Link } from "react-router-dom";
import logo from '../../assets/images/svg/dnp.svg';

const Header = () => {
 
  return (
  <div id="header" className="header-wrap"> 
    <h1><Link to={"/"} className="nav-logo-link"><img src={logo} alt="D&P" /> <span>가이드</span></Link></h1>
    <div className="nav">
      {/* <dl>
        <dt>Sample Page</dt>
        <dd>
          <Link to={"/"} className="nav-logo-link">Dashboards</Link>
          <Link to={"/"} className="nav-logo-link">Errors</Link>
          <Link to={"/"} className="nav-logo-link">Search</Link>
        </dd>
      </dl>
      <dl>
        <dt>Ui Elements</dt>
        <dd>
          <Link to={"/bootAccordion"} className="nav-link"><span>Accordion</span></Link>
          <Link to={"/bootAlert"} className="nav-link"><span>Alerts</span></Link>
          <Link to={"/bootBadge"} className="nav-link"><span>Badges</span></Link>
          <Link to={"/breadcrumbs"} className="nav-link"><span>Breadcrumb</span></Link>
          <Link to={"/buttons"} className="nav-link"><span>Buttons</span></Link>
          <Link to={"/calendar"} className="nav-link"><span>Calendar</span></Link>
          <Link to={"/bootCard"} className="nav-link"><span>Card</span></Link>
          <Link to={"/bootCarousel"} className="nav-link"><span>Carousel</span></Link>
          <Link to={"/bootDropdown"} className="nav-link"><span>Dropdowns</span></Link>
          <Link to={"/bootListGroups"} className="nav-link"><span>List Group</span></Link>
          <Link to={"/bootModals"} className="nav-link"><span>Modals</span></Link>
          <Link to={"/bootNavbars"} className="nav-link"><span>Nav & Tabs</span></Link>
          <Link to={"/BootOffCanvas"} className="nav-link"><span>Offcanvas</span></Link>
          <Link to={"/bootProgressBars"} className="nav-link"><span>Progress bar</span></Link>
          <Link to={"/pagination"} className="nav-link"><span>Pagination</span></Link>
          <Link to={"/bootPlaceholders"} className="nav-link"><span>Placeholder</span></Link>
          <Link to={"/bootPopovers"} className="nav-link"><span>Popovers</span></Link>
          <Link to={"/bootSpinners"} className="nav-link"><span>Spinners</span></Link>
          <Link to={"/bootToasts"} className="nav-link"><span>Toast</span></Link>
        </dd>
      </dl>
      <dl>
        <dt>S</dt>
        <dd>
          <Link to={"/"} className="nav-logo-link"></Link>
          <Link to={"/"} className="nav-logo-link"></Link>
        </dd>
      </dl> */}
    </div>
  </div>
  );
}

export default Header;
