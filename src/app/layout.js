// src/app/layout.js
import Header from '@/components/Header';
import Footer from '@/components/Footer';

import { Inter, Poppins } from 'next/font/google';
import './globals.css';

// Configure the fonts
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter', // This creates a CSS variable named --font-inter
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'], // We load the specific font weights we'll need
  variable: '--font-poppins', // This creates a CSS variable named --font-poppins
});

// Set up metadata for SEO (Title, Description, etc.)
export const metadata = {
  title: 'Grovi - Partner de Crecimiento para E-commerce',
  description: 'Ayudamos a las marcas de e-commerce a escalar con sistemas de crecimiento predecibles y rentables.',
};

// The RootLayout component wraps every page
export default function RootLayout({ children }) {
  return (
    <html lang="es" 
    className={`${inter.variable} ${poppins.variable}`}>
      <body>
        <Header /> {/* <-- ADD THIS */}
        <main>{children}</main> {/* Wrap children in a <main> tag for semantics */}
        <Footer /> {/* <-- ADD THIS */}
      </body>
    </html>
  );
}