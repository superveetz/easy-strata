/**
 * Adding redirectTo from config ability.
 * @module Runners
 * @see Application
 * @param {Object} $rootScope - Global application model.
 * @param {Object} $state - Provides interfaces to current state.
 */
const Runners = ['$rootScope', '$window', '$state', '$timeout', '$stateParams', '$location', '$anchorScroll', '$transitions', 'SeoService', 'AlertService', 'Account', 'screenSize', ($rootScope, $window, $state, $timeout, $stateParams, $location, $anchorScroll, $transitions, SeoService, AlertService, Account, screenSize) => {
    'ngInject';

    // setup $rootScope
    $rootScope.$window = $window;
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
    $rootScope.currentUser = undefined;
    $rootScope.screenSize = screenSize;

    $rootScope.$on('loopback-auth-success', (event, currUser) => {
      $timeout(() => {
        $rootScope.currentUser = currUser;
      }, 0);
      console.log("currUser:", currUser);
      
    });

    /**
     * Waiting route change start event.
     * @param {Object} event.
     * @param {Object} to - Next state.
     */
    
    $transitions.onStart({}, (transition) => {
      // emit state change succ
      $rootScope.$emit('state-change-start');
      AlertService.reset();
      // trigger events to change navbar links
      if (transition.to().name.indexOf('app.strata.main') != -1) {
        $rootScope.$emit('main-nav-set-to-strata'); 
      } else {
        $rootScope.$emit('main-nav-set-to-intro');
      }
    });

    $transitions.onFinish({}, (transition) => {
    });

    $transitions.onError({}, function(transition) {
      let error = transition.error();
      
      if (error && error.detail && error.detail.redirectTo) {
        $state.go(error.detail.redirectTo);
      }
    });
  
    $transitions.onSuccess({}, (transition) => {
      // update seo
      SeoService.setTitle(transition.to().title);
      SeoService.setDescription(transition.to().description);
  
      // scroll to top on page once state change transition starts
      $location.hash('top');
      $anchorScroll();
      $location.hash('');
    });
  }];
  
  /** Export our runners */
  export default Runners;