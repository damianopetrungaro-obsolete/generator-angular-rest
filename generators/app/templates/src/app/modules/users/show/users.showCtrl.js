(function() {

  'use strict';

    // Pass the usersShowCtrl to the app
    angular
        .module('<%= appname %>')
        .controller('usersShowCtrl', usersShowCtrl);


    // Define the usersShowCtrl
    function usersShowCtrl(usersFactory, $stateParams) {


        // Inject with ng-annotate
        "ngInject";


        // Define usersShow as this for ControllerAs and auto-$scope
        var usersShow = this;


        // Define the usersShow functions and objects that will be passed to the view
        usersShow.user = {};                                                // Object for show the user


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
        | Declaring all functions used in the usersShowCtrl
        |
        */


        // Sample for init function
        function initLog() {

            console.log('usersShowCtrl init');
        }


        // Get the user
        function show(id) {

            return usersFactory.show(id).then(function(data) {

                // Custom function for success handling
                console.log('Result form API with SUCCESS', data);

            	// Assign data to array and return them
	            usersShow.user = data;
	            return usersShow.user;

            }, function(data) {

                // Custom function for error handling
                console.log('Result form API with ERROR', data);

            });
        }
    }

})();
