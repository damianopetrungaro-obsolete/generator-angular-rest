(function() {

  'use strict';

    // Pass the customDirective to the app
    angular
        .module('<%= appname %>')
        .directive('customDirective', customDirective);


    // Define the customDirective
    function customDirective() {

        // Define directive
        var directive = {

                restrict: 'EA',
                templateUrl: 'app/shared/components/custom-component/custom-component.html',
                scope: {
                    customString: '@',                      // Isolated scope string
                    customAttribute: '=',                   // Isolated scope two-way data binding
                    customAction: '&'                       // Isolated scope action
                },
                link: linkFunc,
                controller: customDirectiveController,
                controllerAs: 'customDirective'
        };

        // Return directive
        return directive;

        // Define link function
        function linkFunc(scope, el, attr, ctrl) {

            // Do stuff...
        }
    }

    // Define directive controller
    function customDirectiveController() {

        // Do stuff...
    }

})();
