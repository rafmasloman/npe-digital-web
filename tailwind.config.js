module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      padding: {},
      fontFamily: {
        primary: 'Poppins',
        secondary: 'Roboto',
      },
      fontSize: {
        '64px': [
          '4rem',
          {
            lineHeight: '120%',
          },
        ],
      },
      colors: {
        'gray-b1': '#B1B1B1',
        'gray-testimoni': '#F6F7F9',
        'blue-primary': '#0062CD',
        'dark-blue-primary': '#1A233B',
      },
      transformOrigin: {
        'top-left-burger': '0% 45%',
      },
      spacing: {
        '30px': '30px',
        '50px': '50px',
        '100px': '100px',
        '120px': '120px',
        '150px': '150px',
        '200px': '200px',
        '270px': '270px',
        '70px': '70px',
        '400px': '360px',
      },
      borderWidth: {
        1.5: '1.75px',
      },
      dropShadow: {
        'card-shadow': '0 8px 10px  rgba(70,70,70, 0.1)',
      },
      width: {
        '30%': '31.75%',
      },
      screens: {
        desktop: '1440px',
      },
      width: {
        300: '300px',
      },
      backgroundImage: {
        'contact-us': "url('/images/getintouch.png')",
      },
    },
  },
  plugins: [],
};
