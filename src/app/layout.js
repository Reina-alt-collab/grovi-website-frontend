// src/app/layout.js
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Setup the fonts we chose for the brand
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-poppins', // This creates a CSS variable
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',   // This creates a CSS variable
});

export const metadata = {
  title: 'Grovi - E-commerce Growth Partner',
  description: 'Escalamos marcas de e-commerce de manera sostenible y rentable.',
};

// Apply the font variables to the main HTML tag
export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${poppins.variable} ${inter.variable}`}>
      <body>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}