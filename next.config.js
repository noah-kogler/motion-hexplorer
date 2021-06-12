const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');

module.exports = withPWA({
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
    runtimeCaching,
  },
  future: {
    webpack5: true // needed for react-leaflet (https://github.com/PaulLeCam/react-leaflet/issues/877#issuecomment-849123798)
  },
});
