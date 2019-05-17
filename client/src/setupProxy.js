const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  
    app.use(proxy('/api/', { target: 'http://localhost:1000/' }));
   // app.use(proxy('/*.svg', { target: 'http://localhost:5000/' }));
};