import { SSL_OP_MSIE_SSLV2_RSA_PADDING } from "constants";

(function (angular) {
    angular.module('app.controllers', [
        'app.services'
    ])

    .controller('AppCtrl', ['$rootScope', '$scope', function($scope, $rootScope) {
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
        $scope.toggleSideNav        = function() {
            if ($scope.navToggled) {
                $scope.navToggled       = !$scope.navToggled;
                $scope.sideNavLinks.removeClass('show');
            } else {
                $scope.navToggled       = !$scope.navToggled;
                $scope.sideNavLinks.addClass('show');
            }
        };

        // manually open/close side nav
        $scope.setSideNav           = function(action) {
            if (action == 'open') {
                if (!$scope.navToggled) {
                    $scope.navToggled       = !$scope.navToggled;
                    $scope.sideNavLinks.addClass('show');
                }
                return true;
            } else if (action == 'close') {
                if ($scope.navToggled) {
                    $scope.navToggled       = !$scope.navToggled;
                    $scope.sideNavLinks.removeClass('show');
                }
                return true;
            }

            return false;
        };
    }])

    .controller('MainNavLinksCtrl', ['$rootScope', '$scope', '$timeout', '$sce', '$compile', '$state', 'ModalService', 'MainNavService', 'Util', 'Account', 'screenSize', function($rootScope, $scope, $timeout, $sce, $compile, $state, ModalService, MainNavService, Util, Account, screenSize) {
        // init scope
        $scope.$state = $state;
        $scope.Account = Account;
        $scope.mainNavLinks = [];
        $scope.MainNavService = MainNavService;
        $scope.authDDToggled = false;
        $scope.screenIsMobile = screenSize.is('xs, sm');

        // init sideNavLinks for parent ctrl
        if ($scope.elemId == 'side-nav-links') {
            $timeout(function() {
                $scope.sideNavLinks = angular.element('#side-nav-links');
            }, 0);
        }

        // initialize scope.sideNavLinks for parent controller once child has loaded
        updateNavLinks();

        // setup listener to update links as pages change
        MainNavService.mainNavSetToIntro($scope, function() {
            $scope.MainNavService.setIntroLinks();
            updateNavLinks();
        });

        MainNavService.mainNavSetToStrata($scope, function() {
            $scope.MainNavService.setStrataLinks();
            updateNavLinks();
        });

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
        $scope.openAccountModal     = function() {
            $rootScope.$emit('close-side-nav');

            ModalService.openAccountModal({
                animation: true,
                ariaLabelledBy: 'Login or Register a New Account',
                ariaDescribedBy: 'Select one of the tabs and provide your credentials to create a new account or login',
                backdrop: true,
                size: 'md'
            });
        };

        $scope.toggleAuthenicatedDropdown = function() {
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
        if ($state.includes('login')) {
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
                console.log("succ:", succ);
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
        console.log("Account.isAuthenticated():", Account.isAuthenticated());
        Account.getCurrent()
        .$promise
        .then(succ => {
            console.log("succ:", succ);
            
        })
        .catch(err => {
            console.log("err:", err);
            
        });
        
        

        $scope.passwordResetEmailSent = false;

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
                    text: "If the email does not arrive within a minute or two, please check your junk/other folders to ensure that it wasn't forwarded there. Otherwise, use the following link to <a class='text-primary' ng-click='submitResetPassForm()'>resend</a> your password reset email."
                });
            })
            .catch(function(err) {
                $scope.resetPassFormSubmit = false;
            });
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

        $timeout(() => {
            window.prerenderReady = true;
        }, 500);
    }])
    
    .controller('MyStrataCtrl', ['$scope', 'Account', function($scope, Account) {
    }])
    
    .controller('AlertBoxCtrl', ['$scope', 'Util', function($scope, Util) {
        // trust html
        $scope.trustHtml = function(htmlCode) {
            return Util.trustHTML(htmlCode, $scope);
        };
    }]);
})(angular);