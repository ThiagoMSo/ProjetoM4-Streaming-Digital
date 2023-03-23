import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import * as Icon from 'react-bootstrap-icons';
import './Footer.module.css';


function Footer() {
  return (

    <footer className="w-100 position-fixed bottom-0 py-2 mt-2 ">
      <Nav className="justify-content-evenly w-100" activeKey="/">
        <Nav.Item>
          <Link to="/" className="d-flex flex-column text-decoration-none">
            <Icon.HouseDoorFill size={30} className="m-auto" />
            Inicio
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/search" className="d-flex flex-column  text-decoration-none">
            <Icon.Search size={30} className="m-auto" />
            Pesquisar
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/biblioteca" className="d-flex flex-column  text-decoration-none">
            <Icon.Book size={30} className="m-auto" />
            Biblioteca
          </Link>
        </Nav.Item>
      </Nav>
    </footer>
  );
}

export default Footer;
