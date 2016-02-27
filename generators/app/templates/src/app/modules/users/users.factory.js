(function() {

  'use strict';

    // Pass the usersFactory to the app
    angular
        .module('<%= appname %>')
        .factory('usersFactory', usersFactory);


    // Define the usersFactory
    function usersFactory($http) {


        // Inject with ng-annotate
        "ngInject";


        // Define base URI for user user
        var userBase = '/api/users/';


        // Define the user factory object to return
        var usersFactory = {

            index: index,
            show: show,
            store: store,
            update: update,
            destroy: destroy,

        };


        // Return the user factory
        return usersFactory;


        /*
        |--------------------------------------------------------------------------
        | Functions
        |--------------------------------------------------------------------------
        |
        | Declaring all functions used in the usersFactory
        |
        */


        // Display a listing of users.
        function index() {

            return $http.get(userBase)
                        .then(function(data){ return data; });
        }


        // Display a specified user.
        function show(id) {

            return $http.get(userBase + id)
                        .then(function(data){ return data.data; });
        }


        // Store a newly created user in storage.
        function store(data) {

            return $http.post(userBase, data)
                        .then(function(data){ return data.data; });
        }


        // Update the specified user in storage.
        function update(id, data) {

            return $http.put(userBase + id, data)
                        .then(function(data){ return data.data; });
        }


        // Remove the specified user from storage.
        function destroy(id) {

            return $http.delete(userBase + id)
                        .then(function(data){ return data.data; });
        }

    }

})();
