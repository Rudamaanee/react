import { Link } from "react-router-dom";
import { ChevronDown, Grid } from 'react-bootstrap-icons';
import { BsBarChartFill, BsExclamationTriangleFill, BsFileEarmarkText, BsFillQuestionCircleFill, BsSearch, BsStackOverflow, BsTable, BsWrenchAdjustable } from "react-icons/bs";
import { AiFillDashboard } from "react-icons/ai";

const lnb = () => {

  return (
    <div className="scrollArea">
      <div className="inner">
        <h2>PAGES</h2>
        <div className="depth1 active">
          <Link to={"/"} className="nav-link"><i className="ico"><AiFillDashboard /></i> <code>Dashboards</code></Link>
          <div className="depth2">
            <Link to={"/dashboard1"} className="nav-link"><code>Dashboard 1</code></Link>
            <Link to={"/dashboard2"} className="nav-link"><code>Dashboard 2</code></Link>
          </div> {/* depth2 */}
        </div> {/* depth1 */}

        <div className="depth1 active">
          <Link to={"/"} className="nav-link"><i className="ico"><BsExclamationTriangleFill /></i> <code>Errors</code></Link>
          <div className="depth2">
            <Link to={"/error403"} className="nav-link"><code>403</code></Link>
            <Link to={"/error404"} className="nav-link"><code>404</code></Link>
            <Link to={"/error500"} className="nav-link"><code>500</code></Link>
          </div> {/* depth2 */}
        </div> {/* depth1 */}

        <div className="depth1 active">
          <Link to={"/helperclasses"} className="nav-link"><i className="ico"><BsFillQuestionCircleFill /></i> <code>Helper Classes</code></Link>
        </div> {/* depth1 */}

        <h2>ELEMENTS</h2>
        <div className="depth1 active">
          <Link to={"/formsTab"} className="nav-link active"><i className="ico"><BsFileEarmarkText /></i> <code>Forms</code></Link>
          <Link to={"/iconsAll"} className="nav-link"><i className="ico"><Grid /></i><code>Icons</code></Link>
          <Link to={"/tables"} className="nav-link"><i className="ico"><BsTable /></i><code>Tables</code></Link>
          <Link to={"/searchFilter"} className="nav-link"><i className="ico"><BsSearch /></i><code>SearchFilter</code></Link>
          <Link to={"/charts"} className="nav-link"><i className="ico"><BsBarChartFill /></i> <code>Charts</code></Link>
          <div className="depth2 active">
            <Link to={"/Chartjsv3"} className="nav-link"><code>Chartjs v3</code></Link>
            <Link to={"/Highcharts"} className="nav-link"><code>Highcharts</code></Link>
          </div>
          <Link to={"/Accordion"} className="nav-link active"><i className="ico"><BsStackOverflow /></i> <code>Elements</code> <ChevronDown className="down"/></Link>
          <div className="depth2 active">
            <Link to={"/Accordion"} className="nav-link"><code>Accordion</code></Link>
            <Link to={"/Alert"} className="nav-link"><code>Alerts</code></Link>
            <Link to={"/Badge"} className="nav-link"><code>Badges</code></Link>
            <Link to={"/breadcrumbs"} className="nav-link"><code>Breadcrumb</code></Link>
            <Link to={"/buttons"} className="nav-link"><code>Buttons</code> <ChevronDown className="down"/></Link>
            <Link to={"/calendar"} className="nav-link"><code>Calendar</code></Link>
            <Link to={"/Card"} className="nav-link"><code>Card</code></Link>
            <Link to={"/Carousel"} className="nav-link"><code>Carousel</code></Link>
            <Link to={"/Dropdown"} className="nav-link"><code>Dropdowns</code></Link>
            <Link to={"/ListGroups"} className="nav-link"><code>List Group</code></Link>
            <Link to={"/Modals"} className="nav-link"><code>Modals</code></Link>
            <Link to={"/Navbars"} className="nav-link"><code>Nav & Tabs</code></Link>
            <Link to={"/OffCanvas"} className="nav-link"><code>Offcanvas</code></Link>
            <Link to={"/ProgressBars"} className="nav-link"><code>Progress bar</code></Link>
            <Link to={"/pagination"} className="nav-link"><code>Pagination</code></Link>
            <Link to={"/Placeholders"} className="nav-link"><code>Placeholder</code></Link>
            <Link to={"/Popovers"} className="nav-link"><code>Popovers</code></Link>
            <Link to={"/Spinners"} className="nav-link"><code>Spinners</code></Link>
            <Link to={"/Toasts"} className="nav-link"><code>Toast</code></Link>
          </div>
          <h2>Utilliies</h2>
          <Link to={"/"} className="nav-link active"><i className="ico"><BsWrenchAdjustable /></i> <code>Utilliies</code> <ChevronDown className="down"/></Link>
          <div className="depth2 active">
            <Link to={"/colors"} className="nav-link"><code>Colors</code></Link>
            <Link to={"/Grid"} className="nav-link"><code>Grid</code></Link>
            <Link to={"/flex"} className="nav-link"><code>Flex</code></Link>
            <Link to={"/shadows"} className="nav-link"><code>Shadows</code></Link>
            <Link to={"/Ratios"} className="nav-link"><code>Ratios</code></Link>
          </div>
        </div> {/* depth1 */}
      </div>
    </div>
  );
}

export default lnb;
