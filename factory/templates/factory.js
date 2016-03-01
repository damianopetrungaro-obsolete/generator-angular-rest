(function() {

  'use strict';

    // Pass the <%= factoryname %>Factory to the app
    angular
        .module('<%= appname %>')
        .factory('<%= factoryname %>Factory', <%= factoryname %>Factory);


    // Define the <%= factoryname %>Factory
    function <%= factoryname %>Factory() {


        // Inject with ng-annotate
        "ngInject";


        // Define the <%= factoryname %> factory object to return
        var <%= factoryname %>Factory = {

            init: init

        };


        // Return the <%= factoryname %> factory
        return <%= factoryname %>Factory;


        /*
        |--------------------------------------------------------------------------
        | Functions
        |--------------------------------------------------------------------------
        |
        | Declaring all functions used in the <%= factoryname %>Factory
        |
        */


        // Display a listing of <%= factoryname %>.
        function init() {

            console.log('Init <%= factoryname %> factory');
        }

    }

})();
