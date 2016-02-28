(function() {

  'use strict';

    // Pass the <%= modulenamePlural %>Factory to the app
    angular
        .module('<%= appname %>')
        .factory('<%= modulenamePlural %>Factory', <%= modulenamePlural %>Factory);


    // Define the <%= modulenamePlural %>Factory
    function <%= modulenamePlural %>Factory($http) {


        // Inject with ng-annotate
        "ngInject";


        // Define base URI for <%= modulename %> <%= modulename %>
        var <%= modulename %>Base = '/api/<%= modulenamePlural %>/';


        // Define the <%= modulename %> factory object to return
        var <%= modulenamePlural %>Factory = {

            index: index,
            show: show,
            store: store,
            update: update,
            destroy: destroy,

        };


        // Return the <%= modulename %> factory
        return <%= modulenamePlural %>Factory;


        /*
        |--------------------------------------------------------------------------
        | Functions
        |--------------------------------------------------------------------------
        |
        | Declaring all functions used in the <%= modulenamePlural %>Factory
        |
        */


        // Display a listing of <%= modulenamePlural %>.
        function index() {

            return $http.get(<%= modulename %>Base)
                        .then(function(data){ return data; });
        }


        // Display a specified <%= modulename %>.
        function show(id) {

            return $http.get(<%= modulename %>Base + id)
                        .then(function(data){ return data.data; });
        }


        // Store a newly created <%= modulename %> in storage.
        function store(data) {

            return $http.post(<%= modulename %>Base, data)
                        .then(function(data){ return data.data; });
        }


        // Update the specified <%= modulename %> in storage.
        function update(id, data) {

            return $http.put(<%= modulename %>Base + id, data)
                        .then(function(data){ return data.data; });
        }


        // Remove the specified <%= modulename %> from storage.
        function destroy(id) {

            return $http.delete(<%= modulename %>Base + id)
                        .then(function(data){ return data.data; });
        }

    }

})();
