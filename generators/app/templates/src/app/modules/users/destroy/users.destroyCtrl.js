(function() {

  'use strict';

    // Pass the usersDestroyCtrl to the app
    angular
        .module('<%= appname %>')
        .controller('usersDestroyCtrl', usersDestroyCtrl);


    // Define the usersDestroyCtrl
    function usersDestroyCtrl(usersFactory, $stateParams) {


        // Inject with ng-annotate
        "ngInject";


        // Define usersDestroy as this for ControllerAs and auto-$scope
        var usersDestroy = this;


        // Define the usersDestroy functions and objects that will be passed to the view
        usersDestroy.user = {};                                                 // Object for show the user
        usersDestroy.destroy = destroy;                                         // Delete a resource


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
        | Declaring all functions used in the usersDestroyCtrl
        |
        */


        // Sample for init function
        function initLog() {

            console.log('usersDestroyCtrl init');
        }


        // Delete a resource
        function destroy(id) {

            return usersFactory.destroy(id).then(function(data) {

                // Custom function for success handling
                console.log('Result form API with SUCCESS', data);

            }, function(data) {

            	// Custom function for error handling
                console.log('Result form API with ERROR', data);

            });
        }


        // Get the user
        function show(id) {

            return usersFactory.show(id).then(function(data) {

                // Custom function for success handling
                console.log('Result form API with SUCCESS', data);

                // Assign data to array and return them
                usersDestroy.user = data;
                return usersDestroy.user;

            }, function(data) {

                // Custom function for error handling
                console.log('Result form API with ERROR', data);

            });
        }
    }

})();
