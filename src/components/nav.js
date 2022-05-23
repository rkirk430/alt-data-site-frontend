import {Navbar, Container, Nav, NavDropdown} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"; //Imports results in autoprefixer & other warnings. Resolutions unsuccessful


function SiteNav(props) {
    return (
        // NavBar Option 2: bg="dark" variant="dark" expand="lg"

        <div className="navBar">
            <Navbar bg="dark" variant="white" expand="lg"> 
                <Container>
                    <Navbar.Brand href="/">Quantstamp</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/pricing">Pricing</Nav.Link>
                            <NavDropdown title="Alternative Datasets" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/lastprice">Stock Pricing</NavDropdown.Item>
                                <NavDropdown.Item href="/sentiment">Reddit Sentiment</NavDropdown.Item>
                                <NavDropdown.Item href="/government">Congress Trading Activity</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    ) 
    } 
  
  export default SiteNav;