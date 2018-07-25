/**
 * @module Config
 * @see Application
 * @param {Object} $stateProvider - Ui-router module for right nesting.
 * @param {Object} $urlRouterProvider - Configures how the application routing.
 * @param {Object} $locationProvider - Configures how the application deep linking paths are stored.
 * @param {Object} $logProvider - Configures how the application logs messages.
 */
const Config = ['$stateProvider', '$urlRouterProvider', '$locationProvider', '$logProvider', ($stateProvider, $urlRouterProvider, $locationProvider, $logProvider) => {
    'ngInject';
  
    $logProvider.debugEnabled(true);  /** Turn debug mode on/off */
    // enable html5 mode (otherwise angularjs hashes urls with `#/#!/{config}`)
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: true
    });
    $urlRouterProvider.otherwise('/');  /** If current route not in routes then redirect to home */
  
    /**
     * Url processing.
     * @param {Object} $injector - Ability to inject providers.
     * @param {Object} $location - Current location.
     */
    $urlRouterProvider.rule(($injector, $location) => {
      const path = $location.path();
      /** If route like as /home/ then /home */
      $location.path(path[path.length - 1] === '/' ? path.slice(0, -1) : path).replace();
    });

    /** Describe our states */
    $stateProvider 

      .state('app', {
        abstract: true,
        url: '',
        templateUrl: require('./views/index.html'),
        controller: 'AppCtrl',
        resolve: {
          currentUser: ['$rootScope', 'Account', function($rootScope, Account) {
            // check if user is authenticated before rendering rest of the app
            if (Account.isAuthenticated()) {
              return Account.getCurrent()
              .$promise
              .then(succ => {
                console.log('currentUser: ', succ);

                $rootScope.currentUser = succ;
                return succ;
              })
              .catch(err => {
                console.log('resolve curr user err: ', err);
                $rootScope.currentUser = {};
                return {};
              });
            } else {
              $rootScope.currentUser = {};
            }
          }]
        }
      })

      .state('app.verified', {
        url: '/verified',
        templateUrl: require('./views/verified/index.html'),
        title: 'Account Verified',
        description: "Strata management software that is easy to use.."
      })

      .state('app.reset-password', {
        url: '/reset-password',
        templateUrl: require('./views/reset-password/index.html'),
        title: 'Reset Password',
        controller: 'ResetPasswordCtrl'
      })

      .state('app.reset-password-verified', {
        url: '/reset-password-verified?access_token',
        templateUrl: require('./views/reset-password-verified/index.html'),
        title: 'Password Reset',
        controller: 'ResetPasswordVerifiedCtrl'
      })

      .state('app.login', {
        url: '/login',
        templateUrl: require('./views/login/index.html'),
        title: 'Login',
        controller: 'LoginCtrl'
      })

      .state('app.home', {
        url: '/',
        controller: 'HomeCtrl',
        templateUrl: require('./views/home/index.html'),
        title: 'Home',
        description: "Strata management software that is easy to use.."
      })
      
      .state('app.services', {
        url: '/services',
        controller: ['$timeout', ($timeout) => {
          $timeout(() => {
              window.prerenderReady = true;
          }, 500);
        }],
        templateUrl: require('./views/services/index.html'),
        title: 'Services',
        description: "Strata management software that is easy to use.."
      })
      
      .state('app.pricing', {
        url: '/pricing',
        controller: ['$timeout', ($timeout) => {
          $timeout(() => {
              window.prerenderReady = true;
          }, 500);
        }],
        templateUrl: require('./views/pricing/index.html'),
        title: 'Pricing',
        description: "Strata management software that is easy to use.."
      })

      .state('app.404', {
        url: '/404',
        templateUrl: require('./views/404/index.html'),
        title: '404: Page Not Found'
      })

      .state('app.my-strata', {
        url: '/my-strata',
        templateUrl: require('./views/my-strata/index.html'),
        controller: 'MyStrataCtrl',
        resolve: {
          stratas: ['$q', '$rootScope', '$state', 'Account', 'Strata', function($q, $rootScope, $state, Account, Strata) {
            let d = $q.defer();
            
            if (!$rootScope.currentUser || !$rootScope.currentUser.id) { 
              d.reject('Not Logged In', {redirectTo: 'app.404'});
              return d.promise;
            }

            Strata.find({
              filter: {
                where: {
                  accountId: $rootScope.currentUser.id 
                }
              }
            })
            .$promise
            .then(succ => {
              d.resolve(succ);
            })
            .catch(err => {
              d.reject({redirectTo: 'app.404'});
            });

            return d.promise;
          }]
        },
        title: 'My Strata',
        description: "Strata management software that is easy to use.."
      })
      
      .state('app.strata', {
        url: '/strata',
        abstract: true,
        templateUrl: require('./views/strata/index.html')
      })
      
      .state('app.strata.create', {
        url: '/create',
        templateUrl: require('./views/strata/create/index.html'),
        controller: 'StrataCreateCtrl',
        title: 'Create Strata'
      })

      .state('app.strata.main', {
        url: '/:strataId',
        templateUrl: require('./views/strata/main/index.html'),
        controller: 'StrataMainCtrl',
      })

      .state('app.strata.main.dashboard', {
        url: '/dashboard?createStrataSucc',
        templateUrl: require('./views/strata/main/dashboard/index.html'),
        controller: 'StrataDashboardCtrl',
        resolve: {
          strata: ['$q', '$state', '$stateParams', 'Strata', function($q, $state, $stateParams, Strata) {
            let d = $q.defer();

            let todaysDate = new Date();
            todaysDate.setHours(0, 0, 0, 0);
            todaysDate.toISOString();
            
            Strata.findById({
              id: $stateParams.strataId,
              filter: {
                include: {
                  relation: 'announcements',
                  scope: {
                    where: {
                      and: [
                        {
                          postToBoard: true
                        },
                        {
                          or: [
                            {
                              expDate: undefined
                            },
                            {
                              expDate: {
                                gte: todaysDate
                              }
                            }
                          ]
                        }
                      ]
                    }
                  }
                }
              }
            })
            .$promise
            .then(succ => {
              console.log("succ:", succ);
              
              d.resolve(succ);
              return succ;
            })
            .catch(err => {
              d.reject('Not Found or Not Logged In', { redirectTo: 'app.404' });
              return {};
            });

            return d.promise;
          }]
        },
        title: 'Dashboard'
      })

      .state('app.strata.main.announcements', {
        url: '/announcements',
        templateUrl: require('./views/strata/main/announcements/index.html'),
        abstract: true,
        resolve: {
        }
      })

      .state('app.strata.main.announcements.create', {
        url: '/create',
        templateUrl: require('./views/strata/main/announcements/create.html'),
        controller: 'StrataAnnouncementCreateCtrl',
        title: 'Create Announcement'
      })

      .state('app.strata.main.announcements.list', {
        url: '?createAnnouncementSucc',
        templateUrl: require('./views/strata/main/announcements/list.html'),
        controller: 'StrataAnnouncementListCtrl',
        resolve: {
          strataAnnouncements: ['$q', 'StrataAnnouncement', '$stateParams', function($q, StrataAnnouncement, $stateParams) {
            var d = $q.defer();

            StrataAnnouncement.find({
              where: {
                strataId: $stateParams.strataId
              }
            })
            .$promise
            .then(succ => {
              d.resolve(succ);
            })
            .catch(err => {
              d.reject('Invalid Strata ID or Unauthorized', { redirectTo: 'app.404' });
            });

            return d.promise;
          }]
        },
        title: 'Announcements'
      })

      .state('app.strata.main.announcements.view', {
        url: '/:announcementId',
        templateUrl: require('./views/strata/main/announcements/view.html'),
        controller: 'StrataAnnouncementViewCtrl',
        resolve: {
          announcement: ['$q', 'StrataAnnouncement', '$stateParams', function($q, StrataAnnouncement, $stateParams) {
            var d = $q.defer();

            StrataAnnouncement.findById({
              id: $stateParams.announcementId,
              filter: {
                include: {
                  relation: "posts",
                  scope: {
                    include: {
                      relation: "account",
                    }
                  }
                }
              }
            })
            .$promise
            .then(succ => {
              d.resolve(succ);
            })
            .catch(err => {
              d.reject('Invalid Announcement ID or Unauthorized', { redirectTo: 'app.404' });
            });

            return d.promise;
          }]
        },
        requiresAuthentication: true,
        title: 'View Announcement'
      })

      .state('app.strata.main.members', {
        url: '/members',
        templateUrl: require('./views/strata/main/members/index.html'),
        controller: 'StrataMembersCtrl',
        title: 'Members'
      })

      .state('app.strata.main.minutes', {
        url: '/minutes',
        templateUrl: require('./views/strata/main/minutes/index.html'),
        controller: 'StrataMinutesCtrl',
        title: 'Minutes'
      });
    // .state('app.contact', {
    //     url: '/contact',
    //     templateUrl: require('./views/contact/index.html'),
    //     controller: ['$timeout', function ($timeout) {
    //         $timeout(() => {
    //             window.prerenderReady = true;
    //         }, 500);
    //     }],
    //     title: 'Contact',
    //     description: "We are a small startup based out of the Fraser Valley that is passionate about building digital stories and business solutions since 2017."
    // });
    // end states
  }];
  
  /** Export our config */
  export default Config;