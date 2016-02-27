(function() {

  'use strict';

    // Pass the <%= modulename %>sIndexCtrl to the app
    angular
        .module('<%= appname %>')
        .controller('<%= modulename %>sIndexCtrl', <%= modulename %>sIndexCtrl);


    // Define the <%= modulename %>sIndexCtrl
    function <%= modulename %>sIndexCtrl(<%= modulename %>sFactory) {


        // Inject with ng-annotate
        "ngInject";


        // Define <%= modulename %>sIndex as this for ControllerAs and auto-$scope
        var <%= modulename %>sIndex = this;


        // Define the <%= modulename %>sIndex functions and objects that will be passed to the view
        <%= modulename %>sIndex.<%= modulename %>s = [];                                              // Array for list of <%= modulename %>s


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
        | Declaring all functions used in the <%= modulename %>sIndexCtrl
        |
        */


        // Sample for init function
        function initLog() {

            console.log('<%= modulename %>sIndexCtrl init');
        }


        // Get all <%= modulename %>s.
        function index() {

            return <%= modulename %>sFactory.index().then(function(data) {

                // Custom function for success handling
                console.log('Result form API with SUCCESS', data);

            	// Assign data to array and return them
	            <%= modulename %>sIndex.<%= modulename %>s = data.data;
	            return <%= modulename %>sIndex.<%= modulename %>s;

            }, function(data) {

                // Custom function for error handling
                console.log('Result form API with ERROR', data);

            });
        }
    }

})();
