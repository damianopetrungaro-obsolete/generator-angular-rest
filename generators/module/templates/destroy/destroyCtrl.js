(function() {

  'use strict';

    // Pass the <%= modulenamePlural %>DestroyCtrl to the app
    angular
        .module('<%= appname %>')
        .controller('<%= modulenamePlural %>DestroyCtrl', <%= modulenamePlural %>DestroyCtrl);


    // Define the <%= modulenamePlural %>DestroyCtrl
    function <%= modulenamePlural %>DestroyCtrl(<%= modulenamePlural %>Factory, $stateParams) {


        // Inject with ng-annotate
        "ngInject";


        // Define <%= modulenamePlural %>Destroy as this for ControllerAs and auto-$scope
        var <%= modulenamePlural %>Destroy = this;


        // Define the <%= modulenamePlural %>Destroy functions and objects that will be passed to the view
        <%= modulenamePlural %>Destroy.<%= modulename %> = {};                                                 // Object for show the <%= modulename %>
        <%= modulenamePlural %>Destroy.destroy = destroy;                                         // Delete a resource


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
        | Declaring all functions used in the <%= modulenamePlural %>DestroyCtrl
        |
        */


        // Sample for init function
        function initLog() {

            console.log('<%= modulenamePlural %>DestroyCtrl init');
        }


        // Delete a resource
        function destroy(id) {

            return <%= modulenamePlural %>Factory.destroy(id).then(function(data) {

                // Custom function for success handling
                console.log('Result form API with SUCCESS', data);

            }, function(data) {

            	// Custom function for error handling
                console.log('Result form API with ERROR', data);

            });
        }


        // Get the <%= modulename %>
        function show(id) {

            return <%= modulenamePlural %>Factory.show(id).then(function(data) {

                // Custom function for success handling
                console.log('Result form API with SUCCESS', data);

                // Assign data to array and return them
                <%= modulenamePlural %>Destroy.<%= modulename %> = data;
                return <%= modulenamePlural %>Destroy.<%= modulename %>;

            }, function(data) {

                // Custom function for error handling
                console.log('Result form API with ERROR', data);

            });
        }
    }

})();
