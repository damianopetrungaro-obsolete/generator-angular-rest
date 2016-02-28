(function() {

  'use strict';

    // Pass the <%= modulenamePlural %>StoreCtrl to the app
    angular
        .module('<%= appname %>')
        .controller('<%= modulenamePlural %>StoreCtrl', <%= modulenamePlural %>StoreCtrl);


    // Define the <%= modulenamePlural %>StoreCtrl
    function <%= modulenamePlural %>StoreCtrl(<%= modulenamePlural %>Factory) {


        // Inject with ng-annotate
        "ngInject";


        // Define <%= modulenamePlural %>Store as this for ControllerAs and auto-$scope
        var <%= modulenamePlural %>Store = this;


        // Define the <%= modulenamePlural %>Store functions and objects that will be passed to the view
        <%= modulenamePlural %>Store.store = store;                                           // Store a resource


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
        | Declaring all functions used in the <%= modulenamePlural %>StoreCtrl
        |
        */


        // Sample for init function
        function initLog() {

            console.log('<%= modulenamePlural %>StoreCtrl init');
        }


        // Delete a resource
        function store(data) {

            return <%= modulenamePlural %>Factory.store(data).then(function(data) {

                // Custom function for success handling
                console.log('Result form API with SUCCESS', data);

            }, function(data) {

                // Custom function for error handling
                console.log('Result form API with ERROR', data);

            });
        }
    }

})();
