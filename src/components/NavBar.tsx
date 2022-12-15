import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import pdf_report from './pdf_report.pdf';

function CustomNavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/"><img src="./logo.png" height={20} alt="" /> CO2 APAC Cleaner</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Segments" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/Segments">
                Segments
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/Energy">
                Energy
              </NavDropdown.Item>
              <NavDropdown.Item href="/Waste">
                Waste
              </NavDropdown.Item>
              <NavDropdown.Item href="/Water">
                Water
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/Sources">
                Sources
            </Nav.Link>
            <Nav.Link href={pdf_report}>
                Export PDF
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link eventKey={2} href="#memes">
              <img src="./georgia_round.png" height={30} alt="" /> Profile
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavBar;