import { FaFacebookF, FaInstagram, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';
import './Footer.css';

// Datos ficticios: reemplazar por la información y los enlaces de la tienda.
const tienda = {
  nombre: 'Meli',
  telefono: '+56 9 0000 0000',
  direccion: 'Avenida de las Flores 123, Santiago, Chile',
  facebook: 'https://example.com/facebook',
  instagram: 'https://example.com/instagram',
};

function Footer() {
  return (
    <footer className="siteFooter" id="contacto">
      <div className="footerContent">
        <div className="footerBrand">
          <a className="footerStoreName" href="#inicio">{tienda.nombre}</a>
          <p>Detalles que cuentan historias.</p>
        </div>

        <div className="footerContact">
          <h2>Contacto</h2>
          <p className="footerContactLine">
            <FaWhatsapp aria-hidden="true" />
            <span>{tienda.telefono}</span>
          </p>
          <address className="footerContactLine">
            <FaMapMarkerAlt aria-hidden="true" />
            <span>{tienda.direccion}</span>
          </address>
        </div>

        <div className="footerSocial">
          <h2>Síguenos</h2>
          <div className="footerSocialLinks">
            <a href={tienda.facebook} target="_blank" rel="noopener noreferrer" aria-label="Meli en Facebook">
              <FaFacebookF aria-hidden="true" />
            </a>
            <a href={tienda.instagram} target="_blank" rel="noopener noreferrer" aria-label="Meli en Instagram">
              <FaInstagram aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
      <p className="footerCopyright">© {new Date().getFullYear()} {tienda.nombre}. Todos los derechos reservados.</p>
    </footer>
  );
}

export default Footer;
