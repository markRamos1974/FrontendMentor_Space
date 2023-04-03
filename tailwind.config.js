/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      screens:{
        'sm' : '0px',
        'md' : '768px',
        'lg' : '1440px'
      },

      colors: {

        'dark-blue': '#0B0D17',
        'light-blue': '#D0D6F9',
        'theme-white': '#FFFFFF',
        'light-dark-blue': '#161A25',
        'hover-color': '#8B8C90'

      },

      letterSpacing: {
        'fourth-heading': '0.296875rem',
        'second-sub-heading': '0.146875rem',
        'third-sub-heading': '0.16875rem'
      },

      fontSize:{
        'main-heading': '9.375rem',        //150px
        'first-heading': '6.25rem',        //100px
        'second-heading': '3.5rem',        //56px
        'third-heading': '2rem',           //32px
        'fourth-heading': '1.75rem',       //28px
        'first-sub-heading': '1.75rem',    //28px
        'second-sub-heading': '0.875rem',  //14px 
        'third-sub-heading': '1rem'        //16px  

      },

      fontFamily: {
        'heading': ['Bellefair', 'serif','arial'],
        'heading-small': ['Barlow Condensed', 'serif','arial'],
        'body-text': ['barlow', 'serif','arial']
      }, 

      backgroundImage:{

        'mobile': 'url("./src/assets/home/background-home-mobile.jpg")',
        'tablet': 'url("./src/assets/home/background-home-tablet.jpg")',
        'desktop': 'url("./src/assets/home/background-home-desktop.jpg")',

        'destination-mobile': 'url("./src/assets/destination/background-destination-mobile.jpg")',
        'destination-tablet': 'url("./src/assets/destination/background-destination-tablet.jpg")',
        'destination-desktop': 'url("./src/assets/destination/background-destination-desktop.jpg")',

        'crew-mobile': 'url("./src/assets/crew/background-crew-mobile.jpg")',
        'crew-tablet': 'url("./src/assets/crew/background-crew-tablet.jpg")',
        'crew-desktop': 'url("./src/assets/crew/background-crew-desktop.jpg")',

        'technology-mobile': 'url("./src/assets/technology/background-technology-mobile.jpg")',
        'technology-tablet': 'url("./src/assets/technology/background-technology-tablet.jpg")',
        'technology-desktop': 'url("./src/assets/technology/background-technology-desktop.jpg")',

      }
    },
  },
  plugins: [],
}
