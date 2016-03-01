(function() {

  'use strict';

    // Pass the <%= componentname %>Directive to the app
    angular
        .module('<%= appname %>')
        .directive('<%= componentname %>Directive', <%= componentname %>Directive);


    // Define the <%= componentname %>Directive
    function <%= componentname %>Directive() {

        // Define directive
        var directive = {

                restrict: 'EA',
                templateUrl: 'app/shared/components/<%= componentname %>-component/<%= componentname %>-component.html',
                scope: {
                    <%= componentname %>String: '@',                      // Isolated scope string
                    <%= componentname %>Attribute: '=',                   // Isolated scope two-way data binding
                    <%= componentname %>Action: '&'                       // Isolated scope action
                },
                link: linkFunc,
                controller: <%= componentname %>DirectiveController,
                controllerAs: '<%= componentname %>Directive'
        };

        // Return directive
        return directive;

        // Define link function
        function linkFunc(scope, el, attr, ctrl) {

            // Do stuff...
        }
    }

    // Define directive controller
    function <%= componentname %>DirectiveController() {

        // Do stuff...
    }

})();
