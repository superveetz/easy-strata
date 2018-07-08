// vanilla vendor js
import 'jquery';
import 'popper.js';
import 'bootstrap';
import 'async';
// import sweetBtn            from './js/modules/sweet-btn/release/sweet-button';
import angular             from 'angular';

// angular js
import uiRouter             from 'angular-ui-router';
import ngResource           from 'angular-resource';
import ngAnimate            from 'angular-animate';
import ngTouch              from 'angular-touch';
import uiBootstrap          from 'ui-bootstrap4';
import ngSanitize           from 'angular-sanitize';
import uiValidate           from 'angular-ui-validate';
import matchMedia           from 'angular-media-queries';

//app 
import Config               from './app.config.js';
import Runners              from './app.runners.js';

// app components
import Controllers          from './js/controllers/app.controllers';
import Services             from './js/services/app.services';
import Directives           from './js/directives/app.directives';

// app deps
import lbServices           from './js/services/lb-services';

// vendor css
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
// import '../../node_modules/font-awesome/css/font-awesome.css';
import '../../node_modules/animate.css/animate.css';

// sass
import './sass/_main.scss';
import './sass/buttons.scss';
import './sass/main-nav.scss';
import './sass/account-modal.scss';

const appname = 'app';  /** App and root module name */
const deps    = [ /** All global dependencies */
    'ui.router', 
    'ui.bootstrap',
    'ui.validate',
    'ngResource',
    'ngAnimate',
    'ngTouch',
    'ngSanitize',
    'matchMedia',
    'app.controllers',
    'app.services',
    'app.directives',
    'lbServices'
]; 
// const modules = [Controllers];  /** All app dependencies */
const modules = [];

angular.module(appname, deps.concat(modules)).config(Config).run(Runners); // Declare root module 
angular.bootstrap(document, [appname]); // bootstrap our application

/** Export appname. Just in case. */
export default appname;