// src/app/layout.js
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import Header from '../components/Header'; // Import the Header
import Footer from '../components/Footer'; // Import the Footer

// Setup the fonts we chose for the brand
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-poppins',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata = {
  title: 'Grovi - E-commerce Growth Partner',
  description: 'Escalamos marcas de e-commerce de manera sostenible y rentable.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${poppins.variable} ${inter.variable}`}>
      <body>
        <Header /> {/* This renders your Header on every page */}
        <main>
          {children} {/* This is where your page content goes */}
        </main>
        <Footer /> {/* This renders your Footer on every page */}
      </body>
    </html>
  );
}