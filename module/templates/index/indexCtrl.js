(function() {

  'use strict';

    // Pass the <%= modulenamePlural %>IndexCtrl to the app
    angular
        .module('<%= appname %>')
        .controller('<%= modulenamePlural %>IndexCtrl', <%= modulenamePlural %>IndexCtrl);


    // Define the <%= modulenamePlural %>IndexCtrl
    function <%= modulenamePlural %>IndexCtrl(<%= modulenamePlural %>Factory) {


        // Inject with ng-annotate
        "ngInject";


        // Define <%= modulenamePlural %>Index as this for ControllerAs and auto-$scope
        var <%= modulenamePlural %>Index = this;


        // Define the <%= modulenamePlural %>Index functions and objects that will be passed to the view
        <%= modulenamePlural %>Index.<%= modulenamePlural %> = [];                                              // Array for list of <%= modulenamePlural %>


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
        | Declaring all functions used in the <%= modulenamePlural %>IndexCtrl
        |
        */


        // Sample for init function
        function initLog() {

            console.log('<%= modulenamePlural %>IndexCtrl init');
        }


        // Get all <%= modulenamePlural %>.
        function index() {

            return <%= modulenamePlural %>Factory.index().then(function(data) {

                // Custom function for success handling
                console.log('Result form API with SUCCESS', data);

            	// Assign data to array and return them
	            <%= modulenamePlural %>Index.<%= modulenamePlural %> = data.data;
	            return <%= modulenamePlural %>Index.<%= modulenamePlural %>;

            }, function(data) {

                // Custom function for error handling
                console.log('Result form API with ERROR', data);

            });
        }
    }

})();
