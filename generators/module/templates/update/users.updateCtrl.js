(function() {

  'use strict';

    // Pass the <%= modulename %>sUpdateCtrl to the app
    angular
        .module('<%= appname %>')
        .controller('<%= modulename %>sUpdateCtrl', <%= modulename %>sUpdateCtrl);


    // Define the <%= modulename %>sUpdateCtrl
    function <%= modulename %>sUpdateCtrl(<%= modulename %>sFactory, $stateParams) {


        // Inject with ng-annotate
        "ngInject";


        // Define <%= modulename %>sUpdate as this for ControllerAs and auto-$scope
        var <%= modulename %>sUpdate = this;


        // Define the <%= modulename %>sUpdate functions and objects that will be passed to the view
        <%= modulename %>sUpdate.<%= modulename %> = {};                                                  // Object for show the <%= modulename %>
        <%= modulename %>sUpdate.update = update;                                            // Update a resource


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
        | Declaring all functions used in the <%= modulename %>sUpdateCtrl
        |
        */


        // Sample for init function
        function initLog() {

            console.log('<%= modulename %>sUpdateCtrl init');
        }


        // Delete a resource
        function update(id, data) {

            return <%= modulename %>sFactory.update(id, data).then(function(data) {

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
                <%= modulename %>sUpdate.<%= modulename %> = data;
                return <%= modulename %>sUpdate.<%= modulename %>;

            }, function(data) {

                // Custom function for error handling
                console.log('Result form API with ERROR', data);

            });
        }
    }

})();
