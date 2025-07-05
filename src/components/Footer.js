// src/components/Footer.js
import './Footer.css'; // We'll create this CSS file

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <p>© {currentYear} Grovi.net. Todos los derechos reservados.</p>
    </footer>
  );
}