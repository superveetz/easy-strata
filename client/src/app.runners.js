/**
 * Adding redirectTo from config ability.
 * @module Runners
 * @see Application
 * @param {Object} $rootScope - Global application model.
 * @param {Object} $state - Provides interfaces to current state.
 */
const Runners = ['$rootScope', '$state', '$timeout', '$stateParams', '$location', '$anchorScroll', '$transitions', 'SeoService', 'AlertService', 'Account', ($rootScope, $state, $timeout, $stateParams, $location, $anchorScroll, $transitions, SeoService, AlertService, Account) => {
    'ngInject';

    // setup $rootScope
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
    $rootScope.currentUser = undefined;
    if (Account.isAuthenticated()) {
      console.log("Account.getCachedCurrent():", Account.getCachedCurrent());
      
      $timeout(event => {
        Account.getCurrent()
        .$promise
        .then(succ => {
          console.log("succ:", succ);
          $rootScope.currentUser = succ;
        })
        .catch(err => {
          console.log("err:", err);
          
        });
      }, 5000);
    }
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
      if (transition.to().name.indexOf('app.pricing') != -1) {
        $rootScope.$emit('main-nav-set-to-strata');
      } else {
        $rootScope.$emit('main-nav-set-to-intro');
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