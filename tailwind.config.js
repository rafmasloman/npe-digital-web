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
        'gray-input': '#F0F0F0',
        'gray-testimoni': '#F6F7F9',
        'blue-primary': '#0057B6',
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
        '125px': '125px',
        '150px': '150px',
        '200px': '200px',
        '220px': '220px',
        '270px': '270px',
        '300px': '300px',
        '70px': '70px',
        '400px': '400px',
        '800px': '700px',
        '1024px': '1024px',
      },
      borderWidth: {
        1.5: '1.75px',
      },
      dropShadow: {
        'card-shadow': '0 8px 10px  rgba(70,70,70, 0.1)',
      },
      width: {
        '30%': '31.75%',
        '50%': '50%',
      },
      screens: {
        desktop: '1440px',
      },
      width: {
        300: '300px',
      },
      backgroundImage: {
        'contact-us': "url('/images/getintouch.png')",
        'contact-us-page': "url('/images/contactus_bg.png')",
      },
    },
  },
  plugins: [],
};
