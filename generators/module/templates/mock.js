(function() {

  'use strict';

    // Pass the <%= modulenamePlural %>Mock to the app
	angular
	    .module('<%= appname %>')
	    .run(<%= modulenamePlural %>Mock);


	// Define the <%= modulenamePlural %>Mock
    function <%= modulenamePlural %>Mock(mockHelper) {


        // Inject with ng-annotate
        "ngInject";


        // Object for <%= modulename %>'s mock
        var <%= modulenamePlural %> = {};


        /*
        |--------------------------------------------------------------------------
        | Contrsucts function
        |--------------------------------------------------------------------------
        |
        | All functions that should be init when the controller start
        |
        */


    	set<%= modulenameCapitalizePlural %>();															            // Set the list of <%= modulename %>
    	mockHelper.configureMocks(getMocks()); 									        // Intercept all the api and add them to the httpBackend



	    /*
	    |--------------------------------------------------------------------------
	    | Functions
	    |--------------------------------------------------------------------------
	    |
	    | Declaring all functions used in the <%= modulenamePlural %>Mock
	    |
	    */


		// Function for destroy <%= modulenamePlural %> API
		function destroyRespond(method, url, data, headers, params) {

            // Get the id param from url
            var id = url.split("/").pop();

			// Get a random header
			var header = randomHeader();

			// If the result will be 200, execute the operation
			if(header == 200) {

                // Delete <%= modulename %> by id from <%= modulename %>'s array
                for(var i = 0; i <= <%= modulenamePlural %>.length - 1; i++) {

                    // If <%= modulename %> exists
                    if(<%= modulenamePlural %>[i].id == id) {

                        // Delete  <%= modulename %>
                        <%= modulenamePlural %>.splice(i, 1);

                        // Return the success header
                        return [header, {data: '<%= modulenameCapitalize %> removed'}];
                    }
                }

				// Return the error header
                return [header, {error: '<%= modulenameCapitalize %> not found'}];
			}

			// Return the error header
			return [header, {error:'Error in <%= modulename %> removing'}];
		}


		// Function for index <%= modulenamePlural %> API
		function indexRespond(method, url, data, headers, params) {

			// Get a random header
			var header = randomHeader();

			// If the result will be 200, execute the operation
			if(header == 200) {

				// Return the success header
                return [header, {data: <%= modulenamePlural %>}];
			}

			// Return the error header
			return [header, {error:'Error while listing <%= modulenamePlural %>'}];
		}


		// Function for show <%= modulenamePlural %> API
		function showRespond(method, url, data, headers, params) {

            // Get the id param from url
            var id = url.split("/").pop();

			// Get a random header
			var header = randomHeader();

			// If the result will be 200, execute the operation
			if(header == 200) {

                // Get <%= modulename %> by id from <%= modulename %>'s array
                for(var i = 0; i <= <%= modulenamePlural %>.length - 1; i++) {

                    // If <%= modulename %> exists
                    if(<%= modulenamePlural %>[i].id == id) {

                        // Return the success header
                        return [header, {data: <%= modulenamePlural %>[i]}];
                    }
                }

                // Return the error header
    			return [header, {error:'<%= modulenameCapitalize %> not found'}];
			}

			// Return the error header
			return [header, {error:'Error showing <%= modulename %>'}];
		}


		// Function for store <%= modulenamePlural %> API
		function storeRespond(method, url, data, headers, params) {

			// Get a random header
			var header = randomHeader();

            // If the result will be 200, execute the operation
			if(header == 200) {

                // Assisgn <%= modulename %> id - override if inserted
                data.id = <%= modulenamePlural %>.length;

                // Insert the new <%= modulename %>
                <%= modulenamePlural %>.push(data);

                // Return the success header
                return [header, {data: '<%= modulenameCapitalize %> stored'}];
            }

			// Return the error header
			return [header, {error:'Error storing the <%= modulename %>'}];
		}


		// Function for update <%= modulenamePlural %> API
		function updateRespond(method, url, data, headers, params) {

            // Get the id param from url
            var id = url.split("/").pop();

			// Get a random header
			var header = randomHeader();

			// If the result will be 200, execute the operation
			if(header == 200) {

                // Get <%= modulename %> by id from <%= modulename %>'s array
                for(var i = 0; i <= <%= modulenamePlural %>.length - 1; i++) {

                    // If <%= modulename %> exists
                    if(<%= modulenamePlural %>[i].id == id) {

                        // Override the <%= modulename %>
                        <%= modulenamePlural %>[i] = data;

                        // Return the success header
                        return [header, {data: '<%= modulenameCapitalize %> updated'}];
                    }
                }

                // Return the error header
    			return [header, {error:'<%= modulenameCapitalize %> not found'}];
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
			    url: /\/api\/<%= modulenamePlural %>\/(d*)/,
			    params: ['id'],
			    respond: destroyRespond

			},{

				label: 'index',
			    method: 'GET',
			    url: '/api/<%= modulenamePlural %>/',
			    respond: indexRespond

			},{

				label: 'show',
			    method: 'GET',
			    url: /\/api\/<%= modulenamePlural %>\/(d*)/,
			    params: ['id'],
			    respond: showRespond

			},{

				label: 'store',
			    method: 'POST',
			    url: '/api/<%= modulenamePlural %>/',
			    respond: storeRespond

			},{

				label: 'update',
			    method: 'PUT',
			    url: /\/api\/<%= modulenamePlural %>\/(d*)/,
			    params: ['id'],
			    respond: updateRespond
			}];
		}


		// Function for set the array
		function set<%= modulenameCapitalizePlural %>() {

            <%= modulenamePlural %> = [];
		}
	}

})();
