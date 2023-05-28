/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {

    extend: {
      keyframes: {
        rollUp: {
          '0%': { 
                  height: '160px',
                  // opacity: '1',
                },
          '100%': { height: '0px'},
        },
        rollDown: {
          '0%': { height: '0px' },
          '100%': { height: '160px' },
        },
      },
      animation: {
        rollToUp: 'rollUp 0.3s linear ',
        rollToDown: 'rollDown 0.3s linear ',
      },
      colors: {
        'titleBlack': '#212529',
        'contentBlack': '#707070',

      },
      screens: {
        "2xl": { max: "1535px" },
        // => @media (max-width: 1535px) { ... }

        xl: { max: "1279px" },
        // => @media (max-width: 1279px) { ... }

        lg: { max: "991px" },
        // => @media (max-width: 1023px) { ... }

        md: { max: "767px" },
        // => @media (max-width: 767px) { ... }

        sm: { max: "639px" },
        // => @media (max-width: 639px) { ... }

        xs: { max: "501px" },
        // => @media (max-width: 479px) { ... }

        mlg: { min: "991px" },
        // => @media (min-width: 1023px) { ... }

        mmd: { min: "767px" },
        // => @media (max-width: 767px) { ... }

        mxs: { min: "499px" },
        // => @media (min-width: 1023px) { ... }

        //custom responsive
        hideEvent: { max: "900px" },
        hideMobileEvent: { min: "900px" },
        fixNavbar: { max: "1160px" },
      },
      fontFamily: {
        sans: ['var(--font-open-sans)'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      'cusLinear': 'linear-gradient(to right at 20% 70% 90%, var(--tw-gradient-stops))'
    },
  },
  plugins: [],
}
