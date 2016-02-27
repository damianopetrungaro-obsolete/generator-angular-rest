(function() {

  'use strict';

    // Pass the usersStoreCtrl to the app
    angular
        .module('<%= appname %>')
        .controller('usersStoreCtrl', usersStoreCtrl);


    // Define the usersStoreCtrl
    function usersStoreCtrl(usersFactory) {


        // Inject with ng-annotate
        "ngInject";


        // Define usersStore as this for ControllerAs and auto-$scope
        var usersStore = this;


        // Define the usersStore functions and objects that will be passed to the view
        usersStore.store = store;                                           // Store a resource


        /*
        |--------------------------------------------------------------------------
        | Contrsucts function
        |--------------------------------------------------------------------------
        |
        | All functions that should be init when the controller start
        |
        */


        initLog();


        /*
        |--------------------------------------------------------------------------
        | Functions
        |--------------------------------------------------------------------------
        |
        | Declaring all functions used in the usersStoreCtrl
        |
        */


        // Sample for init function
        function initLog() {

            console.log('usersStoreCtrl init');
        }


        // Delete a resource
        function store(data) {

            return usersFactory.store(data).then(function(data) {

                // Custom function for success handling
                console.log('Result form API with SUCCESS', data);

            }, function(data) {

                // Custom function for error handling
                console.log('Result form API with ERROR', data);

            });
        }
    }

})();
