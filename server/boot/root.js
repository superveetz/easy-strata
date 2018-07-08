'use strict';

var path          = require('path');

module.exports = function(server) {
  // Installs the default route for root of application
  var router = server.loopback.Router();

  router.get('*', function(req, res, next) {
    // fallback to index.html if no other route match is made
    if (req.path.indexOf('/api/') == -1) {
      return res.render('index');
    } else {
      return next();
    }
  });
  
  server.use(router);
};
