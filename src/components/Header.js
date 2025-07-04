// src/components/Header.js
import Link from 'next/link';
import './Header.css'; // This CSS file styles your header

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-container">
        <Link href="/" className="logo">
          GROVI
        </Link>
        <nav className="site-nav">
          {/* Link to the Portfolio section on the Homepage */}
          <Link href="/#work">Portafolio</Link>

          {/* Link to the dedicated "About Us" page */}
          <Link href="/about">Sobre Nosotros</Link>

          {/* This is your most important Call-to-Action. Let's make it a button! */}
           <Link href="/contact" className="cta-button">Agendar Llamada</Link> 

        </nav>
      </div>
    </header>
  );
}