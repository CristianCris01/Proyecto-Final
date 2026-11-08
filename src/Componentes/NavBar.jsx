import Navbar from 'react-bootstrap/Navbar';
import Logo from '../assets/Logo2.png';

//import { useNavigate } from 'react-router-dom';

function NavBar() {
  //const navigate = useNavigate();
  return (
    <Navbar className="NavBar" expand="lg">
      <div className="NavBarInner">
        <Navbar.Brand className="brandLogo">
          <a href='/'>
          <img className="ImgLogo" src={Logo} alt="Meli"/>
          </a>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-navbar" className="menuToggle" />
        <Navbar.Collapse id="main-navbar" className="menuCollapse">
          <nav className="navLinks" aria-label="Menu principal">
            <a  href="/Login">Iniciar sesion</a>
            <a href="/Register">Registro</a>
            <a href="/Productos">Productos</a>
            <a href="#galeria">Galeria</a>
            <a href="#contacto">Contacto</a>
          </nav>
        </Navbar.Collapse>

        <div className="navActions" aria-hidden="true">
          <span className="searchIcon"></span>
          <span className="bagIcon">
            <span className="bagCount">0</span>
          </span>
        </div>
      </div>
    </Navbar>
  );
}

export default NavBar;
