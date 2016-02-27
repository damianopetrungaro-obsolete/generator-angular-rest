(function() {

  'use strict';

    // Pass the <%= modulename %>sMock to the app
	angular
	    .module('<%= appname %>')
	    .run(<%= modulename %>sMock);


	// Define the <%= modulename %>sMock
    function <%= modulename %>sMock(mockHelper) {


        // Inject with ng-annotate
        "ngInject";


        // Object for <%= modulename %>'s mock
        var <%= modulename %>s = {};


        /*
        |--------------------------------------------------------------------------
        | Contrsucts function
        |--------------------------------------------------------------------------
        |
        | All functions that should be init when the controller start
        |
        */


    	set<%= modulenameCamel %>s();															            // Set the list of <%= modulename %>
    	mockHelper.configureMocks(getMocks()); 									        // Intercept all the api and add them to the httpBackend



	    /*
	    |--------------------------------------------------------------------------
	    | Functions
	    |--------------------------------------------------------------------------
	    |
	    | Declaring all functions used in the <%= modulename %>sMock
	    |
	    */


		// Function for destroy <%= modulename %>s API
		function destroyRespond(method, url, data, headers, params) {

            // Get the id param from url
            var id = url.split("/").pop();

			// Get a random header
			var header = randomHeader();

			// If the result will be 200, execute the operation
			if(header == 200) {

                // Delete <%= modulename %> by id from <%= modulename %>'s array
                for(var i = 0; i <= <%= modulename %>s.length - 1; i++) {

                    // If <%= modulename %> exists
                    if(<%= modulename %>s[i].id == id) {

                        // Delete  <%= modulename %>
                        <%= modulename %>s.splice(i, 1);

                        // Return the success header
                        return [header, {data: '<%= modulenameCamel %> removed'}];
                    }
                }

				// Return the error header
                return [header, {error: '<%= modulenameCamel %> not found'}];
			}

			// Return the error header
			return [header, {error:'Error in <%= modulename %> removing'}];
		}


		// Function for index <%= modulename %>s API
		function indexRespond(method, url, data, headers, params) {

			// Get a random header
			var header = randomHeader();

			// If the result will be 200, execute the operation
			if(header == 200) {

				// Return the success header
                return [header, {data: <%= modulename %>s}];
			}

			// Return the error header
			return [header, {error:'Error while listing <%= modulename %>s'}];
		}


		// Function for show <%= modulename %>s API
		function showRespond(method, url, data, headers, params) {

            // Get the id param from url
            var id = url.split("/").pop();

			// Get a random header
			var header = randomHeader();

			// If the result will be 200, execute the operation
			if(header == 200) {

                // Get <%= modulename %> by id from <%= modulename %>'s array
                for(var i = 0; i <= <%= modulename %>s.length - 1; i++) {

                    // If <%= modulename %> exists
                    if(<%= modulename %>s[i].id == id) {

                        // Return the success header
                        return [header, {data: <%= modulename %>s[i]}];
                    }
                }

                // Return the error header
    			return [header, {error:'<%= modulenameCamel %> not found'}];
			}

			// Return the error header
			return [header, {error:'Error showing <%= modulename %>'}];
		}


		// Function for store <%= modulename %>s API
		function storeRespond(method, url, data, headers, params) {

			// Get a random header
			var header = randomHeader();

            // If the result will be 200, execute the operation
			if(header == 200) {

                // Assisgn <%= modulename %> id - override if inserted
                data.id = <%= modulename %>s.length;

                // Insert the new <%= modulename %>
                <%= modulename %>s.push(data);

                // Return the success header
                return [header, {data: '<%= modulenameCamel %> stored'}];
            }

			// Return the error header
			return [header, {error:'Error storing the <%= modulename %>'}];
		}


		// Function for update <%= modulename %>s API
		function updateRespond(method, url, data, headers, params) {

            // Get the id param from url
            var id = url.split("/").pop();

			// Get a random header
			var header = randomHeader();

			// If the result will be 200, execute the operation
			if(header == 200) {

                // Get <%= modulename %> by id from <%= modulename %>'s array
                for(var i = 0; i <= <%= modulename %>s.length - 1; i++) {

                    // If <%= modulename %> exists
                    if(<%= modulename %>s[i].id == id) {

                        // Override the <%= modulename %>
                        <%= modulename %>s[i] = data;

                        // Return the success header
                        return [header, {data: '<%= modulenameCamel %> updated'}];
                    }
                }

                // Return the error header
    			return [header, {error:'<%= modulenameCamel %> not found'}];
			}

			// Return the error header
			return [header, {error:'Error updating <%= modulename %>'}];
		}


		// Basic algorithm for random headers
		function randomHeader(){

			// Generate a random number from 1 to 10
			var random = Math.floor((Math.random() * 10) + 1);

			// Return 500 if random is 10
			if(random == 10) {

				return 500;
			}

			// Return 404 if random is 9
			if(random == 9) {

				return 404;
			}

			// Return 200
			return 200;
		}


		// Function that pass the array that will create the httpBackend
	    function getMocks() {

	    	// Object to pass for fake API
			return [{

				label: 'destroy',
			    method: 'DELETE',
			    url: /\/api\/<%= modulename %>s\/(d*)/,
			    params: ['id'],
			    respond: destroyRespond

			},{

				label: 'index',
			    method: 'GET',
			    url: '/api/<%= modulename %>s/',
			    respond: indexRespond

			},{

				label: 'show',
			    method: 'GET',
			    url: /\/api\/<%= modulename %>s\/(d*)/,
			    params: ['id'],
			    respond: showRespond

			},{

				label: 'store',
			    method: 'POST',
			    url: '/api/<%= modulename %>s/',
			    respond: storeRespond

			},{

				label: 'update',
			    method: 'PUT',
			    url: /\/api\/<%= modulename %>s\/(d*)/,
			    params: ['id'],
			    respond: updateRespond
			}];
		}


		// Function for set the array
		function set<%= modulenameCamel %>s() {

            <%= modulename %>s = [{

                "id": 1,
                "name": "Mario",
                "surname": "Rossi"
            },
            {
                "id": 2,
                "name": "Luigi",
                "surname": "Verdi"
            },
            {
                "id": 3,
                "name": "Furio",
                "surname": "Bianchi"
            }];
		}
	}

})();
