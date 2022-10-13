
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

import email from "../assets/images/email.jpeg"
import github from "../assets/images/github.jpeg"
import linkedIn from "../assets/images/linkedin.jpeg"

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Chris Rainey</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/skills">Skills</Nav.Link>
            <Nav.Link href="/projects">Projects</Nav.Link>
          </Nav>
          <Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="#home"><img src={email} alt="" /></a>
                <a href="#about"><img src={github} alt="" /></a>
                <a href="#projects"><img src={linkedIn} alt="" /></a>
              </div>
            </span>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar



