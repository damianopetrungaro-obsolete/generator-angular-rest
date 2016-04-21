(function() {

    'use strict';

    // Pass the <%= modulenamePlural %>sValidator to the app
    angular
    .module('<%= appname %>')
        .run(<%= modulenamePlural %>sValidator);


    // Define the <%= modulenamePlural %>sValidator
    function <%= modulenamePlural %>sValidator(validatorHelper) {


        // Inject with ng-annotate
        "ngInject";


        /*
        |--------------------------------------------------------------------------
        | Contrsucts function
        |--------------------------------------------------------------------------
        |
        | All functions that should be init when the controller start
        |
        */


        validatorHelper.configureValidators(getValidators()); // Intercept all the api and add them to the httpBackend



        /*
        |--------------------------------------------------------------------------
        | Functions
        |--------------------------------------------------------------------------
        |
        | Declaring all functions used in the <%= modulenamePlural %>sValidator
        |
        */



        // Function that pass the array that will create the model validator
        function getValidators() {

            // Object to pass with validation rules
            return {};

        }
    }

})();
