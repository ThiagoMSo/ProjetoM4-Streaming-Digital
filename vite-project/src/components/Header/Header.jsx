import { Container, Nav, Navbar } from 'react-bootstrap';
import Logo from '../../assets/img/logo.jpeg';
import LoginAccount from './LoginAccount/LoginAccount';
function Header() {
  return (
    <Navbar style={{ background: '#1a1a1a' }} expand="md">
      <Container className="text-white">
        <Navbar.Brand href="/">
          <img src={Logo} width={200} className="auto" alt="" srcSet="" />
        </Navbar.Brand>
        <Navbar.Toggle className="bg-success" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end text-white">
          <Nav className="align-items-start">
            <LoginAccount />
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
