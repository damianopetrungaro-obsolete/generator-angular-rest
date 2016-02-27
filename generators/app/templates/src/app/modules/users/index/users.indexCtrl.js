(function() {

  'use strict';

    // Pass the usersIndexCtrl to the app
    angular
        .module('<%= appname %>')
        .controller('usersIndexCtrl', usersIndexCtrl);


    // Define the usersIndexCtrl
    function usersIndexCtrl(usersFactory) {


        // Inject with ng-annotate
        "ngInject";


        // Define usersIndex as this for ControllerAs and auto-$scope
        var usersIndex = this;


        // Define the usersIndex functions and objects that will be passed to the view
        usersIndex.users = [];                                              // Array for list of users


        /*
        |--------------------------------------------------------------------------
        | Contrsucts function
        |--------------------------------------------------------------------------
        |
        | All functions that should be init when the controller start
        |
        */


        initLog();
        index();

        /*
        |--------------------------------------------------------------------------
        | Functions
        |--------------------------------------------------------------------------
        |
        | Declaring all functions used in the usersIndexCtrl
        |
        */


        // Sample for init function
        function initLog() {

            console.log('usersIndexCtrl init');
        }


        // Get all users.
        function index() {

            return usersFactory.index().then(function(data) {

                // Custom function for success handling
                console.log('Result form API with SUCCESS', data);

            	// Assign data to array and return them
	            usersIndex.users = data.data;
	            return usersIndex.users;

            }, function(data) {

                // Custom function for error handling
                console.log('Result form API with ERROR', data);

            });
        }
    }

})();
