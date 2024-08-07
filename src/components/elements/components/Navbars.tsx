import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import NavDropdown from 'react-bootstrap/NavDropdown';
import NavItem from 'react-bootstrap/NavItem';
import NavLink from 'react-bootstrap/NavLink';
import PageTitArea from '../../layout/PageTitArea';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const BootNavbars = () => {
  return (
    <>
      <PageTitArea pageTitHeading="Navbars" pageTitSubHeading="" />

      <Tabs
        defaultActiveKey="Navbar"
        id="bs-nav"
        className="mb-3"
      >
        <Tab eventKey="Navbar" title="Navbar">
          <h2 className="divBorder">Overview</h2>
          <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
              <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#link">Link</Nav.Link>
                  <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                      Separated link
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          
          <h2 className="divBorder mt-4">Color schemes</h2>
          <Navbar bg="dark" data-bs-theme="dark">
            <Container>
              <Navbar.Brand href="#home">Navbar</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
          <div className="division"></div>
          <Navbar bg="primary" data-bs-theme="dark">
            <Container>
              <Navbar.Brand href="#home">Navbar</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
              </Nav>
            </Container>
          </Navbar>

          <div className="division"></div>
          <Navbar bg="light" data-bs-theme="light">
            <Container>
              <Navbar.Brand href="#home">Navbar</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
              </Nav>
            </Container>
          </Navbar>

          <h2 className="divBorder">Base Nav</h2>
          <Nav
            activeKey="/home"
            onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
          >
            <Nav.Item>
              <Nav.Link href="/home">Active</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-1">Link</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2">Link</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="disabled" disabled>
                Disabled
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <div className="division"></div>

          <Nav defaultActiveKey="/home" as="ul">
            <Nav.Item as="li">
              <Nav.Link href="/home">Active</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link eventKey="link-1">Link</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link eventKey="link-2">Link</Nav.Link>
            </Nav.Item>
          </Nav>

          <h2 className="divBorder mt-4">Available styles</h2>
          <Nav className="justify-content-center" activeKey="/home">
            <Nav.Item>
              <Nav.Link href="/home">Active</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-1">Link</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2">Link</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="disabled" disabled>
                Disabled
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <div className="division"></div>
          <Nav className="justify-content-end" activeKey="/home">
            <Nav.Item>
              <Nav.Link href="/home">Active</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-1">Link</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2">Link</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="disabled" disabled>
                Disabled
              </Nav.Link>
            </Nav.Item>
          </Nav>

          <h2 className='divBorder mt-4'>Vertical</h2>
          <Nav defaultActiveKey="/home" className="flex-column">
            <Nav.Link href="/home">Active</Nav.Link>
            <Nav.Link eventKey="link-1">Link</Nav.Link>
            <Nav.Link eventKey="link-2">Link</Nav.Link>
            <Nav.Link eventKey="disabled" disabled>
              Disabled
            </Nav.Link>
          </Nav>
        </Tab> { /* Tab1 */ }

        <Tab eventKey="tab" title="Tab">
          <h2 className="divBorder mt-4">Tabs</h2>
          <Nav variant="tabs" defaultActiveKey="/home">
            <Nav.Item>
              <Nav.Link href="/home">Active</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-1">Option 2</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="disabled" disabled>
                Disabled
              </Nav.Link>
            </Nav.Item>
          </Nav>

          <h2 className="divBorder mt-4">Pills</h2>
          <Nav variant="pills" defaultActiveKey="/home">
            <Nav.Item>
              <Nav.Link href="/home">Active</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-1">Option 2</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="disabled" disabled>
                Disabled
              </Nav.Link>
            </Nav.Item>
          </Nav>

          <h2 className="divBorder mt-4">Underline</h2>
          <Nav variant="underline" defaultActiveKey="/home">
            <Nav.Item>
              <Nav.Link href="/home">Active</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-1">Option 2</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="disabled" disabled>
                Disabled
              </Nav.Link>
            </Nav.Item>
          </Nav>

          <h2 className="divBorder mt-4">Fill and justify</h2>
          <Nav fill variant="tabs" defaultActiveKey="/home">
            <Nav.Item>
              <Nav.Link href="/home">Active</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-1">Loooonger NavLink</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2">Link</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="disabled" disabled>
                Disabled
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <div className="division"></div>
          <Nav justify variant="tabs" defaultActiveKey="/home">
            <Nav.Item>
              <Nav.Link href="/home">Active</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-1">Loooonger NavLink</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2">Link</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="disabled" disabled>
                Disabled
              </Nav.Link>
            </Nav.Item>
          </Nav>

          <h2 className="divBorder mt-4">Using dropdowns</h2>
          <Dropdown as={NavItem}>
            <Dropdown.Toggle as={NavLink}>Click to see more…</Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>Hello there!</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <div className="division"></div>

          <Nav variant="pills" activeKey="1" /*onSelect={handleSelect}*/>
            <Nav.Item>
              <Nav.Link eventKey="1" href="#/home">
                NavLink 1 content
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="2" title="Item">
                NavLink 2 content
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="3" disabled>
                NavLink 3 content
              </Nav.Link>
            </Nav.Item>
            <NavDropdown title="Dropdown" id="nav-dropdown">
              <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Tab> 
        <Tab eventKey="tabD" title="Tab Design">
          <h2 className="divBorder">Tabs Design A type</h2>
          <Tabs
            defaultActiveKey="tab1"
            id="bs-nav"
            className="tabDeignA mb-3"
          >
            <Tab eventKey="tab1" title="Tab 1 길이에 따라">
              Tabs Design A type tab1
              <div className="mb-4" style={{height: "50px"}}></div>
            </Tab>
            <Tab eventKey="tab2" title="Tab 2">
              Tabs Design A type tab 2
              <div className="mb-4" style={{height: "50px"}}></div>
            </Tab>
            <Tab eventKey="tab3" title="Tab 3">
              Tabs Design A type tab 3
              <div className="mb-4" style={{height: "50px"}}></div>
            </Tab>
          </Tabs>

          <h2 className="divBorder mt-4">Tabs Design B type</h2>
          <Tabs
            defaultActiveKey="tab1"
            id="bs-nav"
            className="tabDeignB mb-3"
          >
            <Tab eventKey="tab1" title="Tab 1">
              Tabs Design B type tab1
              <div className="mb-4" style={{height: "50px"}}></div>
            </Tab>
            <Tab eventKey="tab2" title="Tab 2">
              Tabs Design B type tab 2
              <div className="mb-4" style={{height: "50px"}}></div>
            </Tab>
            <Tab eventKey="tab3" title="Tab 3">
              Tabs Design B type tab 3
              <div className="mb-4" style={{height: "50px"}}></div>
            </Tab>
          </Tabs>

          <h2 className="divBorder mt-4">Tabs Design C type</h2>
          <Tabs
            defaultActiveKey="tab1"
            id="bs-nav"
            className="tabDeignC mb-3"
          >
            <Tab eventKey="tab1" title="Tab 1">
              Tabs Design C type tab1
              <div className="mb-4" style={{height: "50px"}}></div>
            </Tab>
            <Tab eventKey="tab2" title="Tab 2">
              Tabs Design C type tab 2
              <div className="mb-4" style={{height: "50px"}}></div>
            </Tab>
            <Tab eventKey="tab3" title="Tab 3">
              Tabs Design C type tab 3
              <div className="mb-4" style={{height: "50px"}}></div>
            </Tab>
          </Tabs>

          <h2 className="divBorder mt-4">Tabs Design D type</h2>
          <Tabs
            defaultActiveKey="tab1"
            id="bs-nav"
            className="tabDeignD mb-3"
          >
            <Tab eventKey="tab1" title="Tab 1">
              Tabs Design D type tab1
              <div className="mb-4" style={{height: "50px"}}></div>
            </Tab>
            <Tab eventKey="tab2" title="Tab 2">
              Tabs Design D type tab 2
              <div className="mb-4" style={{height: "50px"}}></div>
            </Tab>
            <Tab eventKey="tab3" title="Tab 3">
              Tabs Design D type tab 3
              <div className="mb-4" style={{height: "50px"}}></div>
            </Tab>
          </Tabs>

        </Tab>
      </Tabs>


    </>
  );
}
export default BootNavbars;