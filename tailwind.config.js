/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Add your custom colors here
      colors: {
        'brand-background': '#F8F5F1',
        'brand-text': '#242424',
        'brand-accent': '#F07255',
      },
      // Add your custom fonts here
      fontFamily: {
        sans: ['var(--font-inter)'], // Sets Inter as the default sans-serif font
        display: ['var(--font-poppins)'], // Sets Poppins as a display/heading font
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}