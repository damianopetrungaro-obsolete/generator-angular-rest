(function() {

  'use strict';

    // Pass the <%= modulenamePlural %>UpdateCtrl to the app
    angular
        .module('<%= appname %>')
        .controller('<%= modulenamePlural %>UpdateCtrl', <%= modulenamePlural %>UpdateCtrl);


    // Define the <%= modulenamePlural %>UpdateCtrl
    function <%= modulenamePlural %>UpdateCtrl(<%= modulenamePlural %>Factory, $stateParams) {


        // Inject with ng-annotate
        "ngInject";


        // Define <%= modulenamePlural %>Update as this for ControllerAs and auto-$scope
        var <%= modulenamePlural %>Update = this;


        // Define the <%= modulenamePlural %>Update functions and objects that will be passed to the view
        <%= modulenamePlural %>Update.<%= modulename %> = {};                                                  // Object for show the <%= modulename %>
        <%= modulenamePlural %>Update.update = update;                                            // Update a resource


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
        | Declaring all functions used in the <%= modulenamePlural %>UpdateCtrl
        |
        */


        // Sample for init function
        function initLog() {

            console.log('<%= modulenamePlural %>UpdateCtrl init');
        }


        // Delete a resource
        function update(id, data) {

            return <%= modulenamePlural %>Factory.update(id, data).then(function(data) {

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
                <%= modulenamePlural %>Update.<%= modulename %> = data;
                return <%= modulenamePlural %>Update.<%= modulename %>;

            }, function(data) {

                // Custom function for error handling
                console.log('Result form API with ERROR', data);

            });
        }
    }

})();
