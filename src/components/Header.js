// src/components/Header.js
import Link from 'next/link';
import './Header.css'; // Make sure this CSS file is imported

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-container">
        <Link href="/" className="logo">
          GROVI
        </Link>
        <nav className="site-nav">
          <Link href="/#work">Portafolio</Link>
          <Link href="/about">Sobre Nosotros</Link>
          <Link href="/contact" className="cta-button">
            Agendar Llamada
          </Link>
        </nav>
      </div>
    </header>
  );
}