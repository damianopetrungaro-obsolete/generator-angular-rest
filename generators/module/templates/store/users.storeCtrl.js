(function() {

  'use strict';

    // Pass the <%= modulename %>sStoreCtrl to the app
    angular
        .module('<%= appname %>')
        .controller('<%= modulename %>sStoreCtrl', <%= modulename %>sStoreCtrl);


    // Define the <%= modulename %>sStoreCtrl
    function <%= modulename %>sStoreCtrl(<%= modulename %>sFactory) {


        // Inject with ng-annotate
        "ngInject";


        // Define <%= modulename %>sStore as this for ControllerAs and auto-$scope
        var <%= modulename %>sStore = this;


        // Define the <%= modulename %>sStore functions and objects that will be passed to the view
        <%= modulename %>sStore.store = store;                                           // Store a resource


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
        | Declaring all functions used in the <%= modulename %>sStoreCtrl
        |
        */


        // Sample for init function
        function initLog() {

            console.log('<%= modulename %>sStoreCtrl init');
        }


        // Delete a resource
        function store(data) {

            return <%= modulename %>sFactory.store(data).then(function(data) {

                // Custom function for success handling
                console.log('Result form API with SUCCESS', data);

            }, function(data) {

                // Custom function for error handling
                console.log('Result form API with ERROR', data);

            });
        }
    }

})();
