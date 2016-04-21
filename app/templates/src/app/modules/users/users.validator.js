(function() {

    'use strict';

    // Pass the usersValidator to the app
    angular
        .module('<%= appname %>')
        .run(usersValidator);


    // Define the usersValidator
    function usersValidator(validatorHelper) {


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
        | Declaring all functions used in the usersValidator
        |
        */



        // Function that pass the array that will create the model validator
        function getValidators() {

            // Object to pass with validation rules
            return {
                'User': {
                    'lastName': {
                        'size': {
                            'min': 2,
                            'max': 10,
                            'message': 'Last name must be between 2 and 10 characters.'
                        },
                        'required': {
                            'message': 'Last name is required.'
                        }
                    },
                    'firstName': {
                        'size': {
                            'min': 2,
                            'max': 20,
                            'message': 'First name must be between 2 and 20 characters.'
                        }
                    }
                }
            };

        }
    }

})();
