(function (angular) {
    angular.module('app.services', [
        'app.controllers'
    ])

    .service('Util', ['$compile', '$sce', function($compile, $sce) {
        return {
            trustHTML: function(htmlCode, scope) {
                var compiledVal = $compile(htmlCode)(scope);
                var compiledHTML = compiledVal[0].outerHTML;
                return $sce.trustAsHtml(compiledHTML);
            }
        };
    }])

    .service('SeoService', [function () {
        let seoObj = {
            firstCall: false,
            mainTitle: '', // main title from the <title> element
            currentTitle: '',
            delimittingChar: '|'
        };

        return {
            setTitle: function (title) {
                // get main title from <title> on first setTitle() call
                if (!seoObj.mainTitle && !seoObj.firstCall) {
                    seoObj.mainTitle    = angular.element('head title').text();
                    seoObj.firstCall    = true;
                }
                
                seoObj.currentTitle     = seoObj.mainTitle ? title + " " + seoObj.delimittingChar + " " + seoObj.mainTitle : title;
                angular.element('head title').text(seoObj.currentTitle);
            },
            setDescription: function (description) {
                angular.element('head meta[name="description"]').attr('contents', description);
            }
        };
    }])

    .factory('MainNavService', ['$rootScope', function($rootScope) {

        function MainNavService() {
            var self = this;
            self.name = "MainNavService";

            self.navLinks = {
                home: {
                    name: 'Home',
                    state: 'app.home',
                    html: `
                    <li class="nav-item" 
                        ng-class="{
                            'active': $state.includes('app.home')
                        }">
                        <div class='container'>
                            
                            <a class='nav-link text-dark' ui-sref='app.home'>
                                <div class='row'>
                                    <div class='col-2 offset-1 text-right'>
                                        <span class='fa-stack fa-1x' ng-class="{
                                            'mt-1-3': screenIsMobile,
                                        }">
                                            <i class="far fa-square fa-stack-2x"></i>
                                            <i class='fas fa-fw fa-home fa-stack-1x'></i>
                                        </span>
                                    </div>
                                    <div class='col col-auto text-left'>
                                        <strong class='align-middle'>&nbsp;Home</strong>
                                    </div>
                                </div>
                            </a>

                        </div>
                    </li>
                    `
                },
                services: {
                    name: 'Services',
                    state: 'app.services',
                    html: `
                        <li class="nav-item" 
                            ng-class="{
                                'active': $state.includes('app.services')
                            }">
                            <div class='container'>
                                
                                <a class='nav-link text-dark' ui-sref='app.services'>
                                    <div class='row'>
                                        <div class='col-2 offset-1 text-right'>
                                            <span class='fa-stack fa-1x' ng-class="{
                                                'mt-1-3': screenIsMobile,
                                                'mt-1-12': !screenIsMobile
                                            }">
                                                <i class="far fa-square fa-stack-2x"></i>
                                                <i class='fas fa-fw fa-cog fa-stack-1x'></i>
                                            </span>
                                        </div>
                                        <div class='col col-auto text-left'>
                                            <strong class='align-middle'>&nbsp;Services</strong>
                                        </div>
                                    </div>
                                </a>

                            </div>
                        </li>
                    `
                },
                pricing: {
                    name: 'Pricing',
                    state: 'app.pricing',
                    html: `
                    <li class="nav-item" 
                        ng-class="{
                            'active': $state.includes('app.pricing')
                        }">
                        <div class='container'>
                            
                            <a class='nav-link text-dark' ui-sref='app.pricing'>
                                <div class='row'>
                                    <div class='col-2 offset-1 text-right'>
                                        <span class='fa-stack fa-1x' ng-class="{
                                            'mt-1-3': screenIsMobile,
                                            'mt-1-12': !screenIsMobile
                                        }">
                                            <i class="far fa-square fa-stack-2x"></i>
                                            <i class='fas fa-fw fa-dollar-sign fa-stack-1x'></i>
                                        </span>
                                    </div>
                                    <div class='col col-auto text-left'>
                                        <strong class='align-middle'>&nbsp;Pricing</strong>
                                    </div>
                                </div>
                            </a>

                        </div>
                    </li>
                    `
                },
                account: {
                    name: 'Account',
                    state: null,
                    html: `
                        <li class="nav-item" 
                            ng-class="{
                                'active': $state.includes('app.login')
                            }">
                            <div class='container'>
                                
                                <!-- desktop and mobile unauthenticated -->
                                <a class='nav-link text-dark' ui-sref='app.login' ng-if="!Account.isAuthenticated()">
                                    <div class='row'>
                                        <div class='col-2 offset-1 text-right'>
                                            <span class='fa-stack fa-1x' ng-class="{
                                                'mt-1-3': screenIsMobile,
                                                'mt-1-12': !screenIsMobile
                                            }">
                                                <i class='far fa-fw fa-square fa-stack-2x'></i>
                                                <i class='fas fa-fw fa-sign-in-alt fa-stack-1x'></i>
                                            </span>
                                        </div>
                                        <div class='col col-auto text-left'>
                                            <strong class='align-middle'>&nbsp;Login</strong>
                                        </div>
                                    </div>
                                </a>
                                <!-- /end desktop and mobile unauthenticated -->
                                
                                <!-- desktop authenticated -->
                                <div class="dropdown" ng-if='!screenIsMobile && Account.isAuthenticated()'>

                                    <a id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" 
                                        class="nav-link text-dark" ng-click="toggleAuthenicatedDropdown($event)">
                                        <img class='rounded-circle' src='/assets/img/default-avatar.png' alt='Profile Image' height='30' width='30'>
                                        &nbsp; 
                                        {{$root.currentUser.firstName}} {{$root.currentUser.lastName}} <i class='fa fa-fw fa-caret-down'></i>
                                    </a>

                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <a class="dropdown-item" ui-sref="app.my-account">
                                            <div class='row'>
                                                <div class='col-2 text-right'>
                                                    <span class='fa-stack fa-1x'>
                                                        <i class='far fa-fw fa-square fa-stack-2x'></i>
                                                        <i class='fas fa-fw fa-user-edit fa-stack-1x'></i>
                                                    </span> 
                                                </div>
                                                <div class='col col-auto text-left'>
                                                <strong class='align-middle'>&nbsp;My Account</strong>
                                                </div>
                                            </div>
                                        </a>
                                        <a class="dropdown-item" ui-sref="app.my-strata">
                                            <div class='row'>
                                                <div class='col-2 text-right'>
                                                    <span class='fa-stack fa-1x'>
                                                        <i class='far fa-fw fa-square fa-stack-2x'></i>
                                                        <i class='far fa-fw fa-building fa-stack-1x'></i>
                                                    </span> 
                                                </div>
                                                <div class='col col-auto text-left'>
                                                <strong class='align-middle'>&nbsp;My Stratas</strong>
                                                </div>
                                            </div>
                                        </a>
                                        <div class='dropdown-divider'></div>
                                        
                                        <a class="dropdown-item" ng-click="logout()">
                                            <div class='row'>
                                                <div class='col-2 text-right'>
                                                    <span class='fa-stack fa-1x'>
                                                        <i class='far fa-fw fa-square fa-stack-2x'></i>
                                                        <i class='fas fa-fw fa-sign-out-alt fa-stack-1x'></i>
                                                    </span> 
                                                </div>
                                                <div class='col col-auto text-left'>
                                                <strong class='align-middle'>&nbsp;Log Out</strong>
                                                </div>
                                            </div>
                                        </a>
                                    </div>

                                </div>
                                <!-- /end desktop authentiated -->
                            </div>
                        </li>
                                
                        <!-- mobile authenticated -->
                        <div ng-if='screenIsMobile && Account.isAuthenticated()'>
                            <li class="nav-item text-center">
                                <a class="nav-link text-dark" ng-click="toggleAuthenicatedDropdown($event)">
                                    <img class='rounded-circle' src='/assets/img/default-avatar.png' alt='Profile Image' height='60' width='60'>
                                    &nbsp; 
                                    {{$root.currentUser.firstName}} {{$root.currentUser.lastName}} <i class='fa fa-fw fa-caret-down'></i>
                                </a>
                            </li>
                            <div ng-if="Account.isAuthenticated() && authDDToggled">
                                <li class="nav-item">
                                    
                                    <div class='container'>
                                        
                                        <a class='nav-link text-dark' ui-sref='app.my-account'>
                                            <div class='row'>
                                                <div class='col-2 offset-1 text-right'>
                                                    <span class='fa-stack fa-1x mt-1'>
                                                        <i class='far fa-fw fa-square fa-stack-2x'></i>
                                                        <i class='fas fa-fw fa-user-edit fa-stack-1x'></i>
                                                    </span> 
                                                </div>
                                                <div class='col col-auto text-left'>
                                                    <strong class='align-top'>&nbsp;My Account</strong>
                                                </div>
                                            </div>
                                        </a>

                                    </div>
                                </li>
                                <li class="nav-item">
                                    
                                    <div class='container'>
                                        
                                    <a class='nav-link text-dark' ui-sref='app.my-strata'>
                                        <div class='row'>
                                            <div class='col-2 offset-1 text-right'>
                                                <span class='fa-stack fa-1x mt-1'>
                                                    <i class='far fa-fw fa-square fa-stack-2x'></i>
                                                    <i class='fas fa-fw fa-building fa-stack-1x'></i>
                                                </span> 
                                            </div>
                                            <div class='col col-auto text-left'>
                                                <strong class='align-top'>&nbsp;My Stratas</strong>
                                            </div>
                                        </div>
                                    </a>

                                    </div>
                                </li>
                                <li class="nav-item">
                                    <div class='container'>
                                        
                                        <a class='nav-link text-dark' ng-click="logout()">
                                            <div class='row'>
                                                <div class='col-2 offset-1 text-right'>
                                                    <span class='fa-stack fa-1x mt-1'>
                                                        <i class='far fa-fw fa-square fa-stack-2x'></i>
                                                        <i class='fas fa-fw fa-sign-out-alt fa-stack-1x'></i>
                                                    </span> 
                                                </div>
                                                <div class='col col-auto text-left'>
                                                    <strong class='align-top'>&nbsp;Log Out</strong>
                                                </div>
                                            </div>
                                        </a>

                                    </div>
                                </li>
                            </div>
                        </div>
                        <!-- /end mobile authenticated -->
                    `
                },
                strataDashboard: {
                    name: 'Dashboard',
                    state: 'app.strata.main.dashboard',
                    html: `
                    <li class="nav-item" 
                        ng-class="{
                            'active': $state.includes('app.strata.main.dashboard')
                        }">
                        <div class='container'>
                            
                            <a class='nav-link text-dark' ui-sref='app.strata.main.dashboard'>
                                <div class='row'>
                                    <div class='col-2 offset-1 text-right'>
                                        <span class='fa-stack fa-1x' ng-class="{
                                            'mt-1-3': screenIsMobile,
                                            'mt-1-12': !screenIsMobile
                                        }">
                                            <i class="far fa-square fa-stack-2x"></i>
                                            <i class='fas fa-fw fa-home fa-stack-1x'></i>
                                        </span>
                                    </div>
                                    <div class='col col-auto text-left'>
                                        <strong class='align-middle' ng-show="screenIsMobileOrDesktop">&nbsp;Dashboard</strong>
                                    </div>
                                </div>
                            </a>

                        </div>
                    </li>
                    `
                },
                strataMembers: {
                    name: 'Members',
                    state: 'app.strata.main.members',
                    html: `
                    <li class="nav-item" 
                        ng-class="{
                            'active': $state.includes('app.strata.main.members')
                        }">
                        <div class='container'>
                            
                            <a class='nav-link text-dark' ui-sref='app.strata.main.members'>
                                <div class='row'>
                                    <div class='col-2 offset-1 text-right'>
                                        <span class='fa-stack fa-1x' ng-class="{
                                            'mt-1-3': screenIsMobile,
                                            'mt-1-12': !screenIsMobile
                                        }">
                                            <i class="far fa-square fa-stack-2x"></i>
                                            <i class='fas fa-fw fa-users fa-stack-1x'></i>
                                        </span>
                                    </div>
                                    <div class='col col-auto text-left'>
                                        <strong class='align-middle'>&nbsp;Members</strong>
                                    </div>
                                </div>
                            </a>

                        </div>
                    </li>
                    `
                },
                strataAnnouncements: {
                    name: 'Announcements',
                    state: 'app.strata.main.announcements.list',
                    html: `
                    <li class="nav-item" 
                        ng-class="{
                            'active': $state.includes('app.strata.main.announcements.list')
                        }">
                        <div class='container'>
                            
                            <a class='nav-link text-dark' ui-sref='app.strata.main.announcements.list'>
                                <div class='row'>
                                    <div class='col-2 offset-1 text-right'>
                                        <span class='fa-stack fa-1x' ng-class="{
                                            'mt-1-3': screenIsMobile,
                                            'mt-1-12': !screenIsMobile
                                        }">
                                            <i class="far fa-square fa-stack-2x"></i>
                                            <i class='fas fa-fw fa-bullhorn fa-stack-1x'></i>
                                        </span>
                                    </div>
                                    <div class='col col-auto text-left'>
                                        <strong class='align-middle'>&nbsp;Announcements</strong>
                                    </div>
                                </div>
                            </a>

                        </div>
                    </li>
                    `
                },
                strataDropdown: {
                    name: undefined,
                    state: undefined,
                    html: `
                    <li class="nav-item" 
                        ng-class="{
                            'active': $state.includes('app.strata.main.minutes.list')
                        }">
                        <div class='container'>
                            <div class="dropdown">
                                <a aria-expanded="false" aria-haspopup="true" class="nav-link dropdown-toggle" data-toggle="dropdown" id="strata-dropdown-toggle">
                                    
                                <div class='row'>
                                    <div class='col col-auto text-left'>
                                            <span class='text-dark fa-stack fa-1x align-middle' ng-class="{
                                                'mt-1-3': screenIsMobile,
                                                'mt-1-12': !screenIsMobile
                                            }">
                                                <i class="far fa-square fa-stack-2x"></i>
                                                <i class='fas fa-fw fa-ellipsis-h fa-stack-1x'></i>
                                            </span>
                                        </div>
                                    </div>
                                </a>
                                <div aria-labelledby="strata-dropdown-toggle" id="strata-dropdown" class="dropdown-menu">
                                    <a class="dropdown-item" ui-sref="app.strata.main.minutes">
                                        <div class='row'>
                                            <div class='col-2 text-right'>
                                                <span class='fa-stack fa-1x'>
                                                    <i class='far fa-fw fa-square fa-stack-2x'></i>
                                                    <i class='far fa-fw fa-building fa-stack-1x'></i>
                                                </span> 
                                            </div>
                                            <div class='col col-auto text-left'>
                                            <strong class='align-middle'>&nbsp;Minutes</strong>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </li>
                    `
                },
                strataMinutes: {
                    name: 'Minutes',
                    state: 'app.strata.main.minutes',
                    html: `
                    <li class="nav-item" 
                        ng-class="{
                            'active': $state.includes('app.strata.main.minutes')
                        }">
                        <div class='container'>
                            
                            <a class='nav-link text-dark' ui-sref='app.strata.main.minutes'>
                                <div class='row'>
                                    <div class='col-2 offset-1 text-right'>
                                        <span class='fa-stack fa-1x' ng-class="{
                                            'mt-1-3': screenIsMobile,
                                            'mt-1-12': !screenIsMobile
                                        }">
                                            <i class="far fa-square fa-stack-2x"></i>
                                            <i class='fas fa-fw fa-building fa-stack-1x'></i>
                                        </span>
                                    </div>
                                    <div class='col col-auto text-left'>
                                        <strong class='align-middle'>&nbsp;Minutes</strong>
                                    </div>
                                </div>
                            </a>

                        </div>
                    </li>
                    `
                }
            };

            self.mainNav = {
                desktopLinks: [],
                mobileLinks: [],
                desktopStrataDropdownLinks: []
            };

            self.setIntroLinks = function() {
                self.mainNav.desktopLinks = [];
                self.mainNav.mobileLinks = [];
                // order desktop links
                self.mainNav.desktopLinks.push(Object.assign({ order: 1}, self.navLinks.home));
                self.mainNav.desktopLinks.push(Object.assign({ order: 2}, self.navLinks.services));
                self.mainNav.desktopLinks.push(Object.assign({ order: 3}, self.navLinks.pricing));

                self.mainNav.desktopLinks.push(Object.assign({ order: 4}, self.navLinks.account));
        
                // order mobile links
                self.mainNav.mobileLinks.push(Object.assign({ order: 1}, self.navLinks.account));

                self.mainNav.mobileLinks.push(Object.assign({ order: 2}, self.navLinks.home));
                self.mainNav.mobileLinks.push(Object.assign({ order: 3}, self.navLinks.services));
                self.mainNav.mobileLinks.push(Object.assign({ order: 4}, self.navLinks.pricing));
            };

            self.setStrataLinks = function() {
                console.log('set strata links');
                
                self.mainNav.desktopLinks = [];
                self.mainNav.mobileLinks = [];
                self.mainNav.desktopStrataDropdownLinks = [];

                // order desktop links
                self.mainNav.desktopLinks.push(Object.assign({ order: 1}, self.navLinks.strataDashboard));
                self.mainNav.desktopLinks.push(Object.assign({ order: 2}, self.navLinks.strataMembers));
                self.mainNav.desktopLinks.push(Object.assign({ order: 3}, self.navLinks.strataAnnouncements));
                self.mainNav.desktopLinks.push(Object.assign({ order: 4}, self.navLinks.strataDropdown));

                self.mainNav.desktopLinks.push(Object.assign({ order: 5}, self.navLinks.account));

                // order mobile links
                self.mainNav.mobileLinks.push(Object.assign({ order: 1}, self.navLinks.account));

                self.mainNav.mobileLinks.push(Object.assign({ order: 2}, self.navLinks.strataDashboard));
                self.mainNav.mobileLinks.push(Object.assign({ order: 3}, self.navLinks.strataMembers));
                self.mainNav.mobileLinks.push(Object.assign({ order: 4}, self.navLinks.strataAnnouncements));
                self.mainNav.mobileLinks.push(Object.assign({ order: 5}, self.navLinks.strataMinutes));
                
            };

            self.getDesktopLinks = function() {
                return self.mainNav.desktopLinks;
            }

            self.getMobileLinks = function() {
                return self.mainNav.mobileLinks;
            }

            self.getDesktopStrataDropdownLinks = function() {
                return self.mainNav.desktopStrataDropdownLinks;
            };

            self.mainNavSetToStrata = function(scope, callback) {
                console.log('listener reg');
                
                var handler = $rootScope.$on('main-nav-set-to-strata', callback);
                scope.$on('destroy', handler);
            }

            self.mainNavSetToIntro = function(scope, callback) {
                var handler = $rootScope.$on('main-nav-set-to-intro', callback);
                scope.$on('destroy', handler);
            }

            // init defaults
            self.setIntroLinks();
        }

        return new MainNavService();
    }])
    
    .service('ModalService', ['$uibModal', 'AlertService', function ($uibModal, AlertService) {
        return {
            openAccountModal: function (modalConfig) {
                modalConfig.templateUrl = require('./templates/account-modal/account-modal.html');
                modalConfig.controller = 'AccountModalCtrl';
                
                var modalInstance = $uibModal.open(modalConfig);

                // catch the promise propgated by the modal to avoid any errors (required)
                modalInstance.result
                .then(result => {
                    AlertService.reset();
                })
                .catch(err => { 
                    AlertService.reset();
                });
            }
        };
    }])
    
    .service('AlertService', ['$timeout', function ($timeout) {

        let alert = {
            show: false,
            type: 'success',
            dismissable: true
        };

        return {
            showAlert: function () {
                alert.show = true;
                return true;
            },
            hideAlert: function () {
                alert.show = false;
                return true;
            },
            hasAlert: function () {
                return alert.show;
            },
            reset: function () {
                alert = {};
                return true;
            },
            setAlert: function (alertObj) {
                // update alert 
                alert = angular.copy(alertObj);

                // parse loopback application server error
                if (alert.type == 'error' && alert.slimErr) {
                    alert.errList = [];
                    alert.title = alert.slimErr && 
                                     alert.slimErr.data && 
                                     alert.slimErr.data.exception && 
                                     alert.slimErr.data.exception[0] && 
                                     alert.slimErr.data.exception[0].message ? 
                                     alert.slimErr.data.exception[0].message :
                                     'Error';
                }

                return true;
            },
            getAlert: function () {
                return alert;
            }
        };
    }])
    
    .factory('StrataFactory', ['Strata', function(Strata) {

        function Strata(strata) {
            this.id             = strata && strata.id               ? strata.id : undefined;
            this.name           = strata && strata.name             ? strata.name : '';
            this.address        = strata && strata.address          ? strata.address : '';
            this.city           = strata && strata.city             ? strata.city : '';
            this.country        = strata && strata.country          ? strata.country : '';
            this.provState      = strata && strata.provState        ? strata.provState : '';
            this.postalZip      = strata && strata.postalZip        ? strata.postalZip : '';
            this.desc           = strata && strata.desc             ? strata.desc : '';
            this.reminder       = strata && strata.reminder         ? strata.reminder : '';
            this.announcements  = strata && strata.announcements    ? strata.announcements : [];
        }

        return Strata;
    }])
    
    .factory('StrataAnnouncementInst', ['StrataAnnouncement', function(StrataAnnouncement) {

        function StrataAnnouncement(announcement) {
            
            this.id             = announcement && announcement.id           ? announcement.id : undefined;
            this.title          = announcement && announcement.title        ? announcement.title : '';
            this.expDate        = announcement && announcement.expDate      ? announcement.expDate : '';
            this.desc           = announcement && announcement.desc         ? announcement.desc : '';
            this.postToBoard    = announcement && announcement.postToBoard  ? announcement.postToBoard : false;
            this.created        = announcement && announcement.created      ? announcement.created : undefined;
            this.posts          = announcement && announcement.posts        ? announcement.posts : [];
        }

        return StrataAnnouncement;
    }]);
})(angular);