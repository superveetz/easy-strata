'use strict';

// declare dependencies
var loopback    = require('loopback');
var boot        = require('loopback-boot');
var path        = require('path');
var ejs         = require('ejs');
var bodyParser  = require('body-parser');

// create app
var app = module.exports = loopback();
// define templating engine
app.set('view engine', 'html'); // use .html file extension
app.engine('html', ejs.renderFile); // use ejs to render .html views
// configure body parser
app.use(bodyParser.urlencoded({extended: true}));
app.use(loopback.token());

// prerender for SEO
// app.use(require('prerender-node').set('prerenderToken', 'Ljfb7lKGnBM0LrZnDrEu'));


// set static files to allow static files to avoid using the router
if (process.env.NODE_ENV === 'development') {
  app.use(loopback.static(path.resolve(__dirname, '../client/src/')));
  app.set('views', __dirname + '/../client/src'); // set default views directory
} else if (process.env.NODE_ENV === 'production') {
  app.use(loopback.static(path.resolve(__dirname, '../client/dist/')));
  app.set('views', __dirname + '/../client/dist'); // set default views directory
}

// start app
app.start = function() {
  // start the web server
  return app.listen(function() {
    app.emit('started');
    var baseUrl = app.get('url').replace(/\/$/, '');
    console.log('Web server listening at: %s', baseUrl);
    if (app.get('loopback-component-explorer')) {
      var explorerPath = app.get('loopback-component-explorer').mountPath;
      console.log('Browse your REST API at %s%s', baseUrl, explorerPath);
    }
  });
};

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname, function(err) {
  if (err) throw err;

  // start the server if `$ node server.js`
  if (require.main === module)
    app.start();
});
