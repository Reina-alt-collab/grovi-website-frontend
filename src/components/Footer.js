// src/components/Footer.js
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="site-footer-main">
      <div className="container">
        <p>© {currentYear} Grovi.net. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}