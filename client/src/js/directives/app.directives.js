(function (angular) {
    angular.module('app.directives', [
        
    ])

    .directive('bindHtmlCompile', ['$compile', function ($compile) {
        return {
          restrict: 'A',
          link: function (scope, element, attrs) {
            scope.$watch(function () {
              return scope.$eval(attrs.bindHtmlCompile);
            }, function (value) {
              // Incase value is a TrustedValueHolderType, sometimes it
              // needs to be explicitly called into a string in order to
              // get the HTML string.
              element.html(value && value.toString());
              // If scope is provided use it, otherwise use parent scope
              var compileScope = scope;
              if (attrs.bindHtmlScope) {
                compileScope = scope.$eval(attrs.bindHtmlScope);
              }
              $compile(element.contents())(compileScope);
            });
          }
        };
      }])
    
    .directive('mainNav', ['$window', 'ModalService', function ($window, ModalService) {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: require('./templates/main-nav/main-nav.html'),
            controller: 'MainNavCtrl'
        };
    }])

    .directive('mainNavLinks', ['$timeout', 'MainNavService', 'ModalService', function($timeout, MainNavService, ModalService) {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                sideNavLinks: '=',
                elemId: '@elemId',
                elemClasses: '@elemClasses'
            },
            controller: 'MainNavLinksCtrl',
            templateUrl: function(elem, attr) {
                console.log("elem:", elem);
                console.log("attr:", attr);
                if (!attr.templateName) {
                    return require('./templates/main-nav-links/main-nav-links.html')
                } else {
                    return require('./templates/main-nav-links/' + attr.templateName + '.html')
                }
            },
            link: function(scope, elem, attr) {
            }
        };
    }])

    .directive('mainFooter', [function () {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: require('./templates/main-footer/main-footer.html'),
            // controller: 'MainFooterCtrl'
        };
    }])
    
    
    .directive('alertBox', ['AlertService', function (AlertService) {
        return {
            restrict: 'E',
            controller: 'AlertBoxCtrl',
            templateUrl: function (scope, elem) {
                // Use default theme if no theme is provided
                if (elem.theme) {
                    return require('./templates/alert-box/' + elem.theme + '.html')
                } else {
                    return require('./templates/alert-box/default.html')
                }
            },
            link: function (scope) {
                scope.AlertService = AlertService;
            }
        };
    }]);
})(angular);