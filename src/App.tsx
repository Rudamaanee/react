import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Container          from 'react-bootstrap/Container';
import Row                from 'react-bootstrap/Row';
import Col                from 'react-bootstrap/Col';

import Header             from './components/layout/Header'
import Lnb                from './components/layout/Lnb'
import Footer             from './components/layout/Footer'

import Main               from './components/pages/Main'
import Typography         from './components/pages/Typography'
import Layouts            from './components/pages/Layouts'
import Search             from './components/pages/Search'
import Flex               from './components/pages/Flex'
import Breadcrumbs        from './components/pages/Breadcrumbs'
import Shadows            from './components/pages/shadow/Shadows'
import HelperClasses      from './components/pages/HelperClasses'
import Calendar           from './components/pages/Calendar'
import Colors             from './components/pages/colors/Colors'
import Chartjsv3          from './components/pages/charts/Chartjsv3'
import Highcharts         from './components/pages/charts/Highcharts'
import Dashboard1         from './components/pages/dashboard/Dashboard1'
import Dashboard2         from './components/pages/dashboard/Dashboard2'
import Error403           from './components/pages/errors/Error403'
import Error404           from './components/pages/errors/Error404'
import Error500           from './components/pages/errors/Error500'
import SearchFilter       from './components/pages/searchFilter/SearchFilter'

import FormsTab           from './components/elements/forms/FormsTab'
import IconsAll           from './components/elements/icons/IconsAll'
import Tables             from './components/elements/table/Tables'
import Pagination         from './components/elements/table/Pagination'
import Accordion          from './components/elements/components/Accordion'
import Alert              from './components/elements/components/Alert'
import Badge              from './components/elements/components/Badge'
import ButtonGroup        from './components/elements/components/ButtonGroup'
import Buttons            from './components/elements/components/Buttons'
import Card               from './components/elements/components/Card'
import Carousel           from './components/elements/components/Carousel'
import Dropdown           from './components/elements/components/Dropdown'
import Form               from './components/elements/components/Form'
import Grid               from './components/elements/components/Grid'
import ListGroups         from './components/elements/components/ListGroups'
import Modals             from './components/elements/components/Modals'
import Navbars            from './components/elements/components/Navbars'
import NavsTabs           from './components/elements/components/NavsTabs'
import OffCanvas          from './components/elements/components/OffCanvas'
import Overlay            from './components/elements/components/Overlay'
import Popovers           from './components/elements/components/Popovers'
import ProgressBars       from './components/elements/components/ProgressBars'
import Ratios             from './components/elements/components/Ratios'
import Spinners           from './components/elements/components/Spinners'
import Tab                from './components/elements/components/Tab'
import Toasts             from './components/elements/components/Toasts'
import FormFloating       from './components/elements/components/FormFloating'
import Placeholders       from './components/elements/components/Placeholders'
import ButtonsAll         from './components/elements/components/buttons/ButtonsAll'
import WithIcons          from './components/elements/components/buttons/WithIcons'

export default function App() {
  return (
    <BrowserRouter>
      <div id='wrapper'>
        <Header />
        <Container id="container">
          <Row>
            <Col className="lnb item">
              <Lnb />
            </Col>
            <div className="scrollbar">
              <Col className="content item">
                  <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/formsTab" element={<FormsTab />} />
                    <Route path="/typography" element={<Typography />} />

                    <Route path="/colors" element={<Colors />} />
                    
                    <Route path="/layouts" element={<Layouts />} />

                    <Route path="/dashboard1" element={<Dashboard1 />} />
                    <Route path="/dashboard2" element={<Dashboard2 />} />
                    <Route path="/error403" element={<Error403 />} />
                    <Route path="/error404" element={<Error404 />} />
                    <Route path="/error500" element={<Error500 />} />
                    <Route path="/buttons" element={<ButtonsAll />} />
                    <Route path="/withIcons" element={<WithIcons />} />
                    <Route path="/iconsAll" element={<IconsAll />} />
                    <Route path="/search" element={<Search />} />
                    <Route path="/tables" element={<Tables />} />
                    <Route path="/Chartjsv3" element={<Chartjsv3 />} />
                    <Route path="/Highcharts" element={<Highcharts />} />
                    <Route path="/pagination" element={<Pagination />} />
                    <Route path="/flex" element={<Flex />} />
                    <Route path="/breadcrumbs" element={<Breadcrumbs />} />
                    <Route path="/shadows" element={<Shadows />} />
                    <Route path="/helperclasses" element={<HelperClasses />} />
                    <Route path="/calendar" element={<Calendar />} />
                    <Route path="/searchFilter" element={<SearchFilter />} />

                    { /*bootstrap */}
                    <Route path="/Accordion" element={<Accordion />} />
                    <Route path="/Alert" element={<Alert />} />
                    <Route path="/Badge" element={<Badge />} />
                    <Route path="/ButtonGroup" element={<ButtonGroup />} />
                    <Route path="/Buttons" element={<Buttons />} />
                    <Route path="/Card" element={<Card />} />
                    <Route path="/Carousel" element={<Carousel />} />
                    <Route path="/Dropdown" element={<Dropdown />} />
                    <Route path="/Form" element={<Form />} />
                    <Route path="/Grid" element={<Grid />} />
                    <Route path="/ListGroups" element={<ListGroups />} />
                    <Route path="/Modals" element={<Modals />} />
                    <Route path="/Navbars" element={<Navbars />} />
                    <Route path="/NavsTabs" element={<NavsTabs />} />
                    <Route path="/OffCanvas" element={<OffCanvas />} />
                    <Route path="/Overlay" element={<Overlay/>} />
                    <Route path="/Pagination" element={<Pagination/>} />
                    <Route path="/Popovers" element={<Popovers/>} />
                    <Route path="/ProgressBars" element={<ProgressBars/>} />
                    <Route path="/Ratios" element={<Ratios/>} />
                    <Route path="/Spinners" element={<Spinners/>} />
                    <Route path="/Tab" element={<Tab/>} />
                    <Route path="/Toasts" element={<Toasts/>} />
                    <Route path="/FormFloating" element={<FormFloating/>} />
                    <Route path="/Placeholders" element={<Placeholders/>} />
                  </Routes>
              </Col>
            </div>
          </Row>
          <Footer />
        </Container>
      </div> {/* #wrapper */}
    </BrowserRouter>
  );
} //App
