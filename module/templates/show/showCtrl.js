(function() {

  'use strict';

    // Pass the <%= modulenamePlural %>ShowCtrl to the app
    angular
        .module('<%= appname %>')
        .controller('<%= modulenamePlural %>ShowCtrl', <%= modulenamePlural %>ShowCtrl);


    // Define the <%= modulenamePlural %>ShowCtrl
    function <%= modulenamePlural %>ShowCtrl(<%= modulenamePlural %>Factory, $stateParams) {


        // Inject with ng-annotate
        "ngInject";


        // Define <%= modulenamePlural %>Show as this for ControllerAs and auto-$scope
        var <%= modulenamePlural %>Show = this;


        // Define the <%= modulenamePlural %>Show functions and objects that will be passed to the view
        <%= modulenamePlural %>Show.<%= modulename %> = {};                                                // Object for show the <%= modulename %>


        /*
        |--------------------------------------------------------------------------
        | Contrsucts function
        |--------------------------------------------------------------------------
        |
        | All functions that should be init when the controller start
        |
        */


        initLog();
        show($stateParams.id);


        /*
        |--------------------------------------------------------------------------
        | Functions
        |--------------------------------------------------------------------------
        |
        | Declaring all functions used in the <%= modulenamePlural %>ShowCtrl
        |
        */


        // Sample for init function
        function initLog() {

            console.log('<%= modulenamePlural %>ShowCtrl init');
        }


        // Get the <%= modulename %>
        function show(id) {

            return <%= modulenamePlural %>Factory.show(id).then(function(data) {

                // Custom function for success handling
                console.log('Result form API with SUCCESS', data);

            	// Assign data to array and return them
	            <%= modulenamePlural %>Show.<%= modulename %> = data;
	            return <%= modulenamePlural %>Show.<%= modulename %>;

            }, function(data) {

                // Custom function for error handling
                console.log('Result form API with ERROR', data);

            });
        }
    }

})();
