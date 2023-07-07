import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import iconLinkedin from "./images/iconLinkedin.png";
import iconInstagram from "./images/iconInstagram.png";
import iconGithub from "./images/iconGithub.png";
import iconFacebook from "./images/iconFacebook.png";
import iconTwitter from "./images/iconTwitter.png";
import iconYoutube from "./images/iconYoutube.png";
import changemode from "./Changemode";
import {BsFillMoonFill, BsSun} from "react-icons/bs";

function Header() {
    return (
        <div>
            <header className="sticky">
                <Navbar expand="lg" className="navbar navbar-dark bg-dark" fixed="top" style={{opacity: '0.8'}}>
                    <Container fluid>
                        <Navbar.Brand href="index.html">React Cart</Navbar.Brand>
                        <button onClick={changemode}
                                className="btn btn-dark bg-secondary btn-sm px-1 me-sm-3"> Dark <BsFillMoonFill/> / <BsSun/> Light
                        </button>
                        <Navbar.Toggle aria-controls="navbarScroll"/>
                        <Navbar.Collapse id="navbarScroll1">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{maxHeight: '100px'}}
                                navbarScroll>
                                <Nav.Link href="index.html">Home</Nav.Link>
                                <Nav.Link href="https://github.com/alebuo" target="_blank">GitHub</Nav.Link>
                                <NavDropdown title="Link" id="navbarScrollingDropdown">
                                    <NavDropdown.Item href="https://samsung.com" target="_blank">Visit Samsung.com</NavDropdown.Item>
                                    <NavDropdown.Item href="https://react.dev" target="_blank">
                                        Visit React
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider/>
                                    <NavDropdown.Item href="https://www.frankfurter.app/docs/" target="_blank">
                                        API Documentation
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                                <img src={iconLinkedin} alt="iconLinkedin" width="30" height="30"
                                     className="d-inline-block align-text-top"/></a>
                            <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                                <img src={iconInstagram} alt="iconLinkedin" width="30" height="30"
                                     className="d-inline-block align-text-top"/></a>
                            <a href="https://www.github.com/alebuo" target="_blank" rel="noreferrer">
                                <img src={iconGithub} alt="iconLinkedin" width="30" height="30"
                                     className="d-inline-block align-text-top"/></a>
                            <a href="https://facebook.com" target="_blank" rel="noreferrer">
                                <img src={iconFacebook} alt="iconLinkedin" width="30" height="30"
                                     className="d-inline-block align-text-top"/></a>
                            <a href="https://twitter.com" target="_blank" rel="noreferrer">
                                <img src={iconTwitter} alt="iconLinkedin" width="30" height="30"
                                     className="d-inline-block align-text-top"/></a>
                            <a href="https://youtube.com" target="_blank" rel="noreferrer">
                                <img src={iconYoutube} alt="iconLinkedin" width="30" height="30"
                                     className="d-inline-block align-text-top"/></a>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
        </div>
    );
}

export default Header;