(function() {

  'use strict';

    // Pass the <%= modulename %>sShowCtrl to the app
    angular
        .module('<%= appname %>')
        .controller('<%= modulename %>sShowCtrl', <%= modulename %>sShowCtrl);


    // Define the <%= modulename %>sShowCtrl
    function <%= modulename %>sShowCtrl(<%= modulename %>sFactory, $stateParams) {


        // Inject with ng-annotate
        "ngInject";


        // Define <%= modulename %>sShow as this for ControllerAs and auto-$scope
        var <%= modulename %>sShow = this;


        // Define the <%= modulename %>sShow functions and objects that will be passed to the view
        <%= modulename %>sShow.<%= modulename %> = {};                                                // Object for show the <%= modulename %>


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
        | Declaring all functions used in the <%= modulename %>sShowCtrl
        |
        */


        // Sample for init function
        function initLog() {

            console.log('<%= modulename %>sShowCtrl init');
        }


        // Get the <%= modulename %>
        function show(id) {

            return <%= modulename %>sFactory.show(id).then(function(data) {

                // Custom function for success handling
                console.log('Result form API with SUCCESS', data);

            	// Assign data to array and return them
	            <%= modulename %>sShow.<%= modulename %> = data;
	            return <%= modulename %>sShow.<%= modulename %>;

            }, function(data) {

                // Custom function for error handling
                console.log('Result form API with ERROR', data);

            });
        }
    }

})();
