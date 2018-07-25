/**
 * Adding redirectTo from config ability.
 * @module Runners
 * @see Application
 * @param {Object} $rootScope - Global application model.
 * @param {Object} $state - Provides interfaces to current state.
 */
const Runners = ['$rootScope', '$injector', '$window', '$state', '$timeout', '$stateParams', '$location', '$anchorScroll', '$transitions', 'SeoService', 'AlertService', 'Account', 'screenSize', ($rootScope, $injector, $window, $state, $timeout, $stateParams, $location, $anchorScroll, $transitions, SeoService, AlertService, Account, screenSize) => {
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
      // check if state we are going to requires authentication and redirect to 404 if unauthenticated
      if (transition.to().requiresAuthentication && !Account.isAuthenticated()) {
        // redirect
        console.log("transition:", transition);
        
        return $state.go('app.404');
      }
      
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
      console.log("error:", error);
      
      
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