(function() {

  'use strict';

    // Pass the <%= modulename %>sDestroyCtrl to the app
    angular
        .module('<%= appname %>')
        .controller('<%= modulename %>sDestroyCtrl', <%= modulename %>sDestroyCtrl);


    // Define the <%= modulename %>sDestroyCtrl
    function <%= modulename %>sDestroyCtrl(<%= modulename %>sFactory, $stateParams) {


        // Inject with ng-annotate
        "ngInject";


        // Define <%= modulename %>sDestroy as this for ControllerAs and auto-$scope
        var <%= modulename %>sDestroy = this;


        // Define the <%= modulename %>sDestroy functions and objects that will be passed to the view
        <%= modulename %>sDestroy.<%= modulename %> = {};                                                 // Object for show the <%= modulename %>
        <%= modulename %>sDestroy.destroy = destroy;                                         // Delete a resource


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
        | Declaring all functions used in the <%= modulename %>sDestroyCtrl
        |
        */


        // Sample for init function
        function initLog() {

            console.log('<%= modulename %>sDestroyCtrl init');
        }


        // Delete a resource
        function destroy(id) {

            return <%= modulename %>sFactory.destroy(id).then(function(data) {

                // Custom function for success handling
                console.log('Result form API with SUCCESS', data);

            }, function(data) {

            	// Custom function for error handling
                console.log('Result form API with ERROR', data);

            });
        }


        // Get the <%= modulename %>
        function show(id) {

            return <%= modulename %>sFactory.show(id).then(function(data) {

                // Custom function for success handling
                console.log('Result form API with SUCCESS', data);

                // Assign data to array and return them
                <%= modulename %>sDestroy.<%= modulename %> = data;
                return <%= modulename %>sDestroy.<%= modulename %>;

            }, function(data) {

                // Custom function for error handling
                console.log('Result form API with ERROR', data);

            });
        }
    }

})();
