import { SSL_OP_MSIE_SSLV2_RSA_PADDING } from "constants";

(function (angular) {
    angular.module('app.controllers', [
        'app.services'
    ])

    .controller('AppCtrl', ['$rootScope', '$scope', 'screenSize', function($scope, $rootScope, screenSize) {
        // $rootScope.currentUser = currentUser;
        
        $scope.screenIsMobile = screenSize.is('xs');
        
        screenSize.on('xs', (isMatch) => {
            // if was mobile and now desktop, close side nav
            if ($scope.screenIsMobile && !isMatch) {
                $rootScope.$emit('close-side-nav');
            }
            // update scope
            if (isMatch) {
                $scope.screenIsMobile = true;
            } else {
                $scope.screenIsMobile = false;
            }
        });
        
        /* Functions */

        $scope.emitCloseSideNav = function() {
            $rootScope.$emit('close-side-nav');
        };
    }])

    .controller('MainNavCtrl', ['$rootScope', '$scope', function($rootScope, $scope) {
        
        $scope.navToggled           = false;
        // close side nav on change success start event
        $rootScope.$on('state-change-start', function() {
            $scope.setSideNav('close');
        });

        // close side nav on login success
        $rootScope.$on('account-login-success', function() {
            $scope.setSideNav('close');
        });

        // close side nav on login success
        $rootScope.$on('close-side-nav', function() {
            $scope.setSideNav('close');
        });

        // toggle side nav
        $scope.toggleSideNav        = function(event) {
            event.preventDefault();
            event.stopImmediatePropagation();

            $scope.navToggled       = !$scope.navToggled;
            angular.element("#wrapper").toggleClass("toggled");
            angular.element("#main-nav .navbar.fixed-top").toggleClass("show");
        };

        // manually open/close side nav
        $scope.setSideNav           = function(action) {
            if (action == 'open') {
                if (!$scope.navToggled) {
                    $scope.navToggled       = !$scope.navToggled;
                    angular.element("#main-nav .navbar.fixed-top").addClass("show");
                    angular.element("#wrapper").addClass("toggled");
                }
                return true;
            } else if (action == 'close') {
                if ($scope.navToggled) {
                    $scope.navToggled       = !$scope.navToggled;
                    angular.element("#main-nav .navbar.fixed-top").removeClass("show");
                    angular.element("#wrapper").removeClass("toggled");
                }
                return true;
            }

            return false;
        };
    }])

    .controller('MainNavLinksCtrl', ['$rootScope', '$scope', '$timeout', '$sce', '$compile', '$state', 'ModalService', 'MainNavService', 'Util', 'Account', 'screenSize', function($rootScope, $scope, $timeout, $sce, $compile, $state, ModalService, MainNavService, Util, Account, screenSize) {
        console.log('main nav links ctrl');
        // init scope
        $scope.$state = $state;
        $scope.Account = Account;
        $scope.mainNavLinks = [];
        $scope.MainNavService = MainNavService;
        $scope.authDDToggled = false;
        $scope.screenIsMobile = screenSize.is('xs, sm');
        screenSize.on('xs, sm', (isMatch) => {
            // if was mobile and now desktop, close side nav
            if ($scope.screenIsMobile && !isMatch) {
                $rootScope.$emit('close-side-nav');
            }
            // update scope
            if (isMatch) {
                $scope.screenIsMobile = true;
            } else {
                $scope.screenIsMobile = false;
            }
        });

        $scope.screenIsMobileOrDesktop = screenSize.is('xs, sm, lg');
        screenSize.on('xs, sm, lg', (isMatch) => {
            // update scope
            if (isMatch) {
                $scope.screenIsMobileOrDesktop = true;
            } else {
                $scope.screenIsMobileOrDesktop = false;
            }
        });

        // setup listener to update links as pages change
        MainNavService.mainNavSetToIntro($scope, function() {
            $scope.MainNavService.setIntroLinks();
            updateNavLinks();
        });

        MainNavService.mainNavSetToStrata($scope, function() {
            $scope.MainNavService.setStrataLinks();
            updateNavLinks();
        });

        if ($state.includes('app.strata.main')) {
            $rootScope.$emit('main-nav-set-to-strata')
        }
        

        // init sideNavLinks for parent ctrl
        if ($scope.elemId == 'side-nav-links') {
            $timeout(function() {
                $scope.sideNavLinks = angular.element('#side-nav-links');
            }, 0);
        }

        // initialize scope.sideNavLinks for parent controller once child has loaded
        updateNavLinks();

        function updateNavLinks() {
            if ($scope.elemId == 'side-nav-links') {
                $scope.mainNavLinks      = MainNavService.getMobileLinks();
            } else {
                $scope.mainNavLinks      = MainNavService.getDesktopLinks();
            }
        }

        // trust html
        $scope.trustHtml = function(htmlCode) {
            return Util.trustHTML(htmlCode, $scope);
        };

        $scope.hideDissmissable = true;

        //open account modal
        $scope.openAccountModal     = function(event) {
            event.preventDefault();
            event.stopImmediatePropagation();

            // allow 300 ms for the side-nav to close before opening modal
            let timeoutDuration = 0;
            
            if ($scope.$parent.navToggled) {
                timeoutDuration = 300;
            }
            
            $rootScope.$emit('close-side-nav');
            $timeout(() => {
                ModalService.openAccountModal({
                    animation: true,
                    ariaLabelledBy: 'Login or Register a New Account',
                    ariaDescribedBy: 'Select one of the tabs and provide your credentials to create a new account or login',
                    backdrop: true,
                    size: 'md'
                });
            }, timeoutDuration);
        };

        $scope.toggleAuthenicatedDropdown = function(event) {
            if ($scope.screenIsMobile) {
                event.preventDefault();
                event.stopImmediatePropagation();
            }

            $scope.authDDToggled = !$scope.authDDToggled;
        };

        $scope.logout = function() {
            Account.logout()
            .$promise
            .then(succ => {
                $rootScope.$emit('close-side-nav');
                $state.transitionTo('app.home');
            })
            .catch(err => {
            });
        };
    }])
    
    .controller('AccountModalCtrl', ['$rootScope', '$scope', '$timeout', '$state', '$uibModalInstance', 'Account', 'AlertService', function($rootScope, $scope, $timeout, $state, $uibModalInstance, Account, AlertService) {
        const defNewUser = {
            firstName: '',
            lastName: '',
            email: '',
            pass: '',
            cpass: ''
        };

        const defExistUser = {
            email: '',
            pass: ''
        };

        const dServerResponse = {
            loginErr: false,
            loginSucc: false,
            signUpErr: false,
            signUpSucc: false
        };
        
        // init $scope
        $scope.newUser              = angular.copy(defNewUser);
        $scope.existingUser         = angular.copy(defExistUser);
        $scope.serverResponse       = angular.copy(dServerResponse);
        AlertService.reset();

        // flag used to determine which tab is active
        $scope.activeTab = 'login';

        // flag to hide dissmissable btn
        if ($state.includes('app.login')) {
            $scope.hideDissmissable = true;
        } else {
            $scope.hideDissmissable = false;
        }
        
        // toggle active tab variable
        $scope.setActiveTab = function (activeTab) {
            $scope.activeTab = activeTab;
            return true;
        };

        // change between tabs
        $scope.tabClicked = function(tabName) {
            // update active tab
            $scope.setActiveTab(tabName);
            // reset alerts
            AlertService.reset();
            // reset error/succ state of forms
            $scope.serverResponse       = angular.copy(dServerResponse); 
        };

        // sign up new user
        $scope.submitSignUpForm = function () {
            $scope.signUpSubmit = true;
            
            Account.create({
                firstName: $scope.newUser.firstName,
                lastName: $scope.newUser.lastName,
                email: $scope.newUser.email,
                password: $scope.newUser.pass
            })
            .$promise
            .then(function(succ) {
                $scope.signUpSubmit = false;
                $scope.serverResponse.signUpSucc = true; // hide form

                // Show alert to confirm identity
                AlertService.setAlert({
                    show: true,
                    type: 'success',
                    dismissable: false,
                    title: 'Account Created',
                    subHeader: 'Email Verification Required',
                    text: "You're almost there! We've sent a verification email to the address you provided (" + succ.email + "). Clicking the confirmation link in that email lets us know the email address is both valid and yours. It is also the final step in the sign up process and will allow you to log in."
                });
                
            })
            .catch(function(err) {
                $scope.signUpSubmit = false;
                $scope.serverResponse.signUpErr = true;

                AlertService.setAlert({
                    show: true,
                    type: 'error',
                    dismissable: false,
                    title: 'Duplicate Email',
                    subHeader: 'Email Address Already Exists',
                    text: "Whoops, it appears as though this email address is already being used. If you're having problems logging in, you can reset your password <a href='/reset-password'>here</a>. Otherwise, try signing up using a different email address."
                });
            });
        };

        // login
        $scope.submitLoginForm = function() {
            $scope.loginSubmit = true;

            Account.login({
                email: $scope.existingUser.email,
                password: $scope.existingUser.pass,
            })
            .$promise
            .then(function(succ) {
                console.log("login succ:", succ);
                $rootScope.currentUser = succ.user;
                $rootScope.$emit('loopback-auth-success', succ.user);
                
                //successful login
                $scope.loginSubmit = false;
                $scope.closeModal();
                $state.transitionTo('app.my-strata');
            })
            .catch(function(err) {
                $scope.loginSubmit = false;
                $scope.serverResponse.loginErr = true;

                AlertService.setAlert({
                    show: true,
                    type: 'error',
                    dismissable: false,
                    title: 'Invalid Login'
                });
            });
        };

        // close modal
        $scope.closeModal = function() {
            $uibModalInstance.dismiss('cancel');
        };

        // validate confirm password matches password
        $scope.isPassConfirmed = function (confirmPass) {
            return confirmPass.signUpForm.newUserPass.$$rawModelValue === confirmPass.signUpForm.newUserCPass.$$rawModelValue;
        };
    }])

    .controller('ResetPasswordCtrl', ['$scope', '$stateParams', 'Account', 'AlertService', function($scope, $stateParams, Account, AlertService) {
        $scope.resetPass = {
            email: ''
        };

        $scope.passwordResetEmailSent = false;
        $scope.form = {
            resetPassForm: {}
        };

        $scope.submitResetPassForm = function () {
            $scope.resetPassFormSubmit = true;

            Account.resetPassword({
                email: $scope.resetPass.email
            })
            .$promise
            .then(function(succ) {
                $scope.resetPassFormSubmit = false;
                $scope.passwordResetEmailSent = true;
                AlertService.setAlert({
                    show: true,
                    type: 'success',
                    dismissable: false,
                    title: 'Email Sent',
                    subHeader: "Your Password Reset Email Is On Its Way",
                    text: "We've sent an email to <b>{{resetPass.email}}</b> with a link to reset your password. If the email does not arrive within a minute or two, please check your junk/other folders to ensure that it wasn't forwarded there. Otherwise, please use the following link to <a class='text-primary' ng-click='submitResetPassForm()'>resend</a> your password reset email."
                });
            })
            .catch(function(err) {
                console.log("err:", err);
                
                // handle 404 if email does not exist
                if (err && err.status == 404) {
                    AlertService.setAlert({
                        show: true,
                        type: 'error',
                        dismissable: false,
                        title: 'Email Address Does Not Exist',
                        subHeader: "No Account Matching The Specified Email Address",
                        text: "The provided email address <b>{{resetPass.email}}</b> could not be associated with any account. This means that you should be able to <a class='text-primary' ui-sref='app.login'>create a new account</a> using this email address."
                    });
                }

                // handle 401 if account email is not verified
                if (err && err.status == 401) {
                    AlertService.setAlert({
                        show: true,
                        type: 'error',
                        dismissable: false,
                        title: 'Email Address Not Verified',
                        subHeader: "Verify Your Email Address To Reset Your Password",
                        text: "We found an account associated with <b>{{resetPass.email}}</b>, but this email address has not yet been verified. Please use the following link to <a class='text-primary' ng-click='resendActivationEmail()'>resend</a> your account activation email. When you are done, you should be able to log in, otherwise, return here to reset your password."
                    });
                }
                $scope.resetPassFormSubmit = false;
            });

            $scope.resendActivationEmail = function() {
                if (!$scope.form.resetPassForm.$valid) {
                    return;
                };

                $scope.resetPassFormSubmit = true;                

                Account.resendAccountActivationEmail({
                    email: $scope.resetPass.email
                })
                .$promise
                .then(succ => {
                    $scope.resetPassFormSubmit = false;
                    $scope.passwordResetEmailSent = true;
                    AlertService.setAlert({
                        show: true,
                        type: 'success',
                        dismissable: false,
                        title: 'Email Sent',
                        subHeader: "Your Account Activation Email Is On Its Way",
                        text: "We've sent an email to <b>{{resetPass.email}}</b> with a link to activate your account. We need you to verify your email address so that we know it is valid and that it belongs to you. When you are done, you should be able to log in, otherwise, return here to reset your password."
                    });
                })
                .catch(err => {
                    console.log("err:", err);
                    $scope.resetPassFormSubmit = false;
                });
            };
        };
    }])

    .controller('ResetPasswordVerifiedCtrl', ['$scope', '$stateParams', 'Account', 'AlertService', function($scope, $stateParams, Account, AlertService) {
        // init scope
        $scope.passReset = {
            pass: '',
            cpass: ''
        };
        $scope.resetPassSubmit = false;
        $scope.passResetFormSucc = false;

        $scope.submitpassResetForm = function() {
            $scope.passResetFormSubmit = true;

            // console.log('$stateParams.access_token: ', $stateParams.access_token);
            // console.log('$scope.passReset.pass: ', $scope.passReset.pass);

            Account.resetPasswordConfirm({
                accessToken: $stateParams.access_token,
                newPassword: $scope.passReset.pass
            })
            .$promise
            .then(function (succ) {
                $scope.passResetFormSubmit = false;
                $scope.passResetFormSucc = true;
                AlertService.setAlert({
                    show: true,
                    type: 'success',
                    dismissable: false,
                    title: 'Password Reset',
                    subHeader: "Your Password Has Been Changed",
                    text: "Woohoo! Your password was changed successfully. Please use the following link to <a ui-sref='app.login' class='text-primary'>login</a> using your new password."
                });
            })
            .catch(function (err) {
                $scope.passResetFormSubmit = false;
            });
        };

        // validate confirm password matches password
        $scope.isPassConfirmed = function (confirmPass) {
            return confirmPass.passResetForm.newPass.$$rawModelValue === confirmPass.passResetForm.newCPass.$$rawModelValue;
        };
    }])

    .controller('LoginCtrl', ['$scope', 'ModalService', function($scope, ModalService) {
        //open account modal on page load
        ModalService.openAccountModal({
            appendTo: angular.element('#login-page'),
            animation: false,
            ariaLabelledBy: 'Login or Register a New Account',
            ariaDescribedBy: 'Select one of the tabs and provide your credentials to create a new account or login',
            backdrop: false,
            windowTopClass: 'position-relative',
            size: 'md'
        });
    }])

    .controller('HomeCtrl', ['$timeout', '$scope', 'Account', ($timeout, $scope, Account) => {
        $scope.Account = Account; // remove this later
        $scope.cardOneText = "After you've created your strata, you'll be provided with a main dashboard that you are able to customize to your liking. This dashboard will be the main entry point to your strata so it will be seen by all of your members. We provide you with the tools to invite all of your strata members by email or text message as well as the abilities to customize their roles within your organization (president, secretary, etc).";
        $scope.cardTwoText = "Want to ensure that everyone is aware of the upcoming fire inspection or AGM meeting? We provide you with the abilities to create announcements which allow your members to RSVP or decline an upcoming event that they may or may not be able to attend. Either way, you'll have the peace of mind knowing who is expected to be home or if alternative arrangements need to be made."
        $scope.cardThreeText = "You'll likely want to store and share documents such as your minutes, financial reports and any other files that may be pertinent to your strata. You'll also likely want to be able to separate strata council documents from the documents that your home owners can view. We provide you with the abilities to manage your files efficiently so that you don't think twice about it.";

        $timeout(() => {
            window.prerenderReady = true;
        }, 500);
    }])

    .controller('MainFooterCtrl', ['$scope', function($scope) {
        $scope.currentDate = new Date();
    }])
    
    .controller('MyStrataCtrl', ['$scope', 'Account', 'stratas', 'screenSize', function($scope, Account, stratas, screenSize) {
        // init scope
        $scope.stratas = stratas;
        console.log("stratas:", stratas);
        
        $scope.screenIsMobile = screenSize.is('xs, sm');
        
        screenSize.on('xs', (isMatch) => {
            // update scope
            if (isMatch) {
                $scope.screenIsMobile = true;
            } else {
                $scope.screenIsMobile = false;
            }
        });
    }])
    
    .controller('AlertBoxCtrl', ['$scope', 'Util', function($scope, Util) {
        // trust html
        $scope.trustHtml = function(htmlCode) {
            return Util.trustHTML(htmlCode, $scope);
        };
    }])
    
    .controller('StrataCreateCtrl', ['$scope', '$rootScope', '$state', 'Strata', 'screenSize', 'StrataFactory', function($scope, $rootScope, $state, Strata, screenSize, StrataFactory) {
        // init scope
        $scope.submitForm = false;
        $scope.strata = new StrataFactory();
        $scope.screenIsMobile = screenSize.is('xs, sm');
        
        screenSize.on('xs', (isMatch) => {
            // update scope
            if (isMatch) {
                $scope.screenIsMobile = true;
            } else {
                $scope.screenIsMobile = false;
            }
        });

        /* Functions */

        // save submit strata form
        $scope.submitStrataForm = function() {
            $scope.submitForm = true;
            $scope.strata.accountId = $rootScope && $rootScope.currentUser ? $rootScope.currentUser.id : undefined;
            
            Strata.create({
                name: $scope.strata.name,
                address: $scope.strata.address,
                city: $scope.strata.city,
                country: $scope.strata.country,
                provState: $scope.strata.provState,
                postalZip: $scope.strata.postalZip,
                accountId: $rootScope.currentUser.id
            })
            .$promise
            .then(succ => {
                $scope.submitForm = false;
                
                // $scope.submitForm = false;
                $state.transitionTo('app.strata.main.dashboard', { strataId: succ.id, createStrataSucc: 'y' });
            })
            .catch(err => {
                console.log("err:", err);
                $scope.submitForm = false;
            });
        };
    }])

    .controller('StrataMainCtrl', ['$scope', 'StrataFactory', function($scope, StrataFactory) {
        
    }])
    
    .controller('StrataDashboardCtrl', ['$scope', '$timeout', '$stateParams', 'AlertService', 'Strata', 'StrataFactory', 'strata', 'screenSize',  function($scope, $timeout, $stateParams, AlertService, Strata, StrataFactory, strata, screenSize) {
        // display create success alert
        if ($stateParams.createStrataSucc) {
            AlertService.setAlert({
                show: true,
                type: 'success',
                dismissable: true,
                title: 'Strata Created',
                subHeader: 'Welcome To Your Strata Dashboard',
                text: "Your new strata was created successfully."
            });
        }

        // init scope
        $scope.strata = new StrataFactory(strata);
        console.log("$scope.strata:", $scope.strata);
        

        $scope.screenIsMobile = screenSize.is('xs, sm');
        screenSize.on('xs', (isMatch) => {
            // update scope
            if (isMatch) {
                $scope.screenIsMobile = true;
            } else {
                $scope.screenIsMobile = false;
            }
        });

        $scope.editName = {
            elem: angular.element("#editName"),
            show: false,
            beforeDataChange: undefined
        };
        $scope.editAddress = {
            elem: angular.element("#editAddress"),
            show: false,
            beforeDataChange: undefined
        };
        $scope.editDesc = {
            elem: angular.element("#editDesc"),
            show: false,
            beforeDataChange: undefined
        };
        $scope.editReminder = {
            elem: angular.element("#editReminder"),
            show: false,
            beforeDataChange: undefined
        };

        /* Functions */

        // toggle edit name
        $scope.toggleEdit = function(editItem, action) {
            if (!action) {
                editItem.show = !editItem.show;
                return true;
            }

            if (action == 'show' || action == 'open') {
                editItem.show = true;
                editItem.beforeDataChange = angular.copy($scope.strata);
                // focus input
                $timeout(e => {
                    editItem.elem.focus();
                }, 0);
            }
            else if (action == 'close' || action == 'hide' || action == 'dismiss') {
                editItem.show = false;
                $scope.strata.address = editItem.beforeDataChange.address;
                $scope.strata.city = editItem.beforeDataChange.city;
                $scope.strata.country = editItem.beforeDataChange.country;
                $scope.strata.desc = editItem.beforeDataChange.desc;
                $scope.strata.name = editItem.beforeDataChange.name;
                $scope.strata.postalZip = editItem.beforeDataChange.postalZip;
                $scope.strata.provState = editItem.beforeDataChange.provState;
                $scope.strata.reminder = editItem.beforeDataChange.reminder;
            }
            
        };

        // submit edit name
        $scope.submitEditNameForm = function() {
            Strata.update({
                where: {
                    id:    $scope.strata.id,
                }
            }, {
                name: $scope.strata.name
            })
             .$promise
             .then(succ => {
                $scope.editName.show = false;
             })
             .catch(err => {
                $scope.editName.show = false;
             });
        };

        // submit edit desc
        $scope.submitEditDescForm = function() {
            
            Strata.update({
                where: {
                    id:    $scope.strata.id,
                }
            }, {
                desc: $scope.strata.desc
            })
             .$promise
             .then(succ => {
                $scope.editDesc.show = false;
             })
             .catch(err => {
                $scope.editDesc.show = false;
             });
        };

        // submit edit reminder
        $scope.submitEditReminderForm = function() {
            Strata.update({
                where: {
                    id:    $scope.strata.id,
                }
            }, {
                reminder: $scope.strata.reminder
            })
             .$promise
             .then(succ => {
                $scope.editReminder.show = false;
             })
             .catch(err => {
                 $scope.editReminder.show = false;
             });
        };

        $scope.submitEditAddressForm = function() {
            Strata.update({
                where: {
                    id:    $scope.strata.id,
                }
            }, {
                address: $scope.strata.address,
                city: $scope.strata.city,
                provState: $scope.strata.provState,
                country: $scope.strata.country,
                postalZip: $scope.strata.postalZip
            })
             .$promise
             .then(succ => {
                $scope.editAddress.show = false;
             })
             .catch(err => {
                $scope.editAddress.show = false;
             });
        };
    }])

    .controller('StrataAnnouncementCreateCtrl', ['$scope', '$stateParams', '$state', 'StrataAnnouncement', 'StrataAnnouncementInst', function($scope, $stateParams, $state, StrataAnnouncement, StrataAnnouncementInst) {
        // init scope
        $scope.announcement = new StrataAnnouncementInst();
        
        $scope.dateOptions = {
            dateDisabled: false,
            initDate: new Date(),
            maxDate: new Date(2100, 5, 22),
            minDate: new Date(),
            startingDay: 1
        };

        $scope.expDateCalendar = {
            opened: false
        };

        /* Functions */

        $scope.openExpDatePicker = function() {
            $scope.expDateCalendar.opened = true;
        };

        $scope.submitAnnouncementForm = function() {
            $scope.formSubmit = true;

            if(angular.isDate($scope.announcement.expDate)) {
                $scope.announcement.expDate.setHours(0, 0, 0, 0);
            }
            
            StrataAnnouncement.create({
                id: $scope.announcement.id,
                title: $scope.announcement.title,
                desc: $scope.announcement.desc,
                expDate: $scope.announcement.expDate ? $scope.announcement.expDate.toISOString() : undefined,
                postToBoard: $scope.announcement.postToBoard ? $scope.announcement.postToBoard : false,
                strataId: $stateParams.strataId
            })
            .$promise
            .then(succ => {
                $scope.formSubmit = false;
                $state.transitionTo('app.strata.main.announcements.view', { strataId: $stateParams.strataId, announcementId: succ.id, createAnnouncementSucc: succ.id })
            })
            .catch(err => {
                $scope.formSubmit = false;
                console.log("err:", err);
            });
        };
    }])

    .controller('StrataAnnouncementListCtrl', ['$scope', '$filter', '$stateParams', 'strataAnnouncements', 'AlertService', function($scope, $filter, $stateParams, strataAnnouncements, AlertService) {
        console.log("strataAnnouncements:", strataAnnouncements);
        // display create success alert
        if ($stateParams.createAnnouncementSucc) {
            AlertService.setAlert({
                show: true,
                type: 'success',
                dismissable: true,
                title: 'Announcement Created',
                subHeader: 'asdfasdf',
                text: "asfasd asdasd asd asd."
            });
        }

        $scope.currentPage = 1;
        $scope.pageSize = -1;
        $scope.pageSizeOptions = [
            {
                text: 'All',
                value: -1
            },
            {
                text: 5,
                value: 5
            },
            {
                text: 10,
                value: 10
            },
            {
                text: 25,
                value: 25
            },
            {
                text: 50,
                value: 50
            }
        ];
        $scope.strataAnnouncements = strataAnnouncements;
        $scope.q = '';
        $scope.totalAnnouncements = strataAnnouncements.length;
        
        $scope.getData = function () {
        // needed for the pagination calc
        // https://docs.angularjs.org/api/ng/filter/filter
            return $filter('filter')($scope.strataAnnouncements, $scope.q)
        };

        $scope.updatePageSizeLimit = function () {
            if ($scope.pageSize < 0) {
                $scope.pageSizeLimit = $scope.getData().length;
            } else {
                $scope.pageSizeLimit = $scope.pageSize;
            }
        };

        $scope.pageSizeLimit = $scope.getData().length;
        
        $scope.numberOfPages = function () {
            let pageSizeOrAll = $scope.pageSize << 0 ? $scope.getData().length : $scope.pageSize;
            return Math.ceil($scope.getData().length/pageSizeOrAll);                
        };
    }])

    .controller('StrataAnnouncementViewCtrl', ['$scope', '$rootScope', '$timeout', '$stateParams', 'StrataAnnouncement', 'AnnouncementPost', 'StrataAnnouncementInst', 'announcement', function($scope, $rootScope, $timeout, $stateParams, StrataAnnouncement, AnnouncementPost, StrataAnnouncementInst, announcement) {
        // init scope
        $scope.announcement = new StrataAnnouncementInst(announcement);
        console.log("$scope.announcement:", $scope.announcement);
        
        $scope.editTitle = {
            elem: angular.element("#editTitle"),
            show: false,
            beforeDataChange: undefined
        };
        
        $scope.editDesc = {
            elem: angular.element("#editDesc"),
            show: false,
            beforeDataChange: undefined
        };
        
        /* Functions */

        // toggle edit name
        $scope.toggleEdit = function(editItem, action, selector) {
            if (!action) {
                editItem.show = !editItem.show;
                return true;
            }

            if (action == 'show' || action == 'open') {
                editItem.show = true;
                
                // focus input
                if (selector) {
                    // editting comment
                    editItem.beforeDataChange = angular.copy(editItem);
                    $timeout(e => {
                        angular.element(selector + editItem.id).focus();
                    }, 0);
                } else {
                    // editing announcement
                    editItem.beforeDataChange = angular.copy($scope.announcement);

                    $timeout(e => {
                        editItem.elem.focus();
                    }, 0);
                }
            }
            else if (action == 'close' || action == 'hide' || action == 'dismiss') {
                editItem.show = false;
                
                // focus input
                if (selector) {
                    // editting comment
                    editItem.text = editItem.beforeDataChange.text;
                } else {
                    // editing announcement
                    $scope.announcement.title = editItem.beforeDataChange.title;
                }
            }
            
        };

        // update title
        $scope.submitEditTitleForm = function() {
            StrataAnnouncement.update({
                where: {
                    id: $scope.announcement.id,
                }
            }, {
                title: $scope.announcement.title
            })
            .$promise
            .then(succ => {
               $scope.editTitle.show = false;
            })
            .catch(err => {
               $scope.editTitle.show = false;
            });
        };

        // update description
        $scope.submitEditDescForm = function() {
            StrataAnnouncement.update({
                where: {
                    id: $scope.announcement.id,
                }
            }, {
                desc: $scope.announcement.desc
            })
            .$promise
            .then(succ => {
               $scope.editDesc.show = false;
            })
            .catch(err => {
               $scope.editDesc.show = false;
            });
        };

        // Create Post
        $scope.submitCreatePostForm = function() {
            $scope.submitCommentCreate = true;
            
            AnnouncementPost.create({
                text: $scope.post,
                announcementId: $scope.announcement.id,
                accountId: $rootScope.currentUser.id
            })
            .$promise
            .then(succ => {
                console.log("succ:", succ);
                $scope.submitCommentCreate = false;
            })
            .catch(err => {
                console.log("err:", err);
                $scope.submitCommentCreate = false;
            });
        };

        // Edit Post
        $scope.submitEditPostForm = function(post) {
            AnnouncementPost.update({
                where: {
                    id: post.id,
                }
            }, {
                text: post.text
            })
            .$promise
            .then(succ => {
                post.show = false;
            })
            .catch(err => {
                post.show = false;
            });
        };

    }])
    
    .controller('StrataMembersCtrl', ['$scope', function($scope) {
        
        
    }])
    
    .controller('StrataMinutesCtrl', ['$scope', function($scope) {

    }]);
})(angular);