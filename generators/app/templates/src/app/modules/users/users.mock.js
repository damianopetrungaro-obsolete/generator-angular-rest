(function() {

  'use strict';

    // Pass the usersMock to the app
	angular
	    .module('<%= appname %>')
	    .run(usersMock);


	// Define the usersMock
    function usersMock(mockHelper) {


        // Inject with ng-annotate
        "ngInject";


        // Object for user's mock
        var users = {};


        /*
        |--------------------------------------------------------------------------
        | Contrsucts function
        |--------------------------------------------------------------------------
        |
        | All functions that should be init when the controller start
        |
        */


    	setUsers();															            // Set the list of user
    	mockHelper.configureMocks(getMocks()); 									        // Intercept all the api and add them to the httpBackend



	    /*
	    |--------------------------------------------------------------------------
	    | Functions
	    |--------------------------------------------------------------------------
	    |
	    | Declaring all functions used in the usersMock
	    |
	    */


		// Function for destroy users API
		function destroyRespond(method, url, data, headers, params) {

            // Get the id param from url
            var id = url.split("/").pop();

			// Get a random header
			var header = randomHeader();

			// If the result will be 200, execute the operation
			if(header == 200) {

                // Delete user by id from user's array
                for(var i = 0; i <= users.length - 1; i++) {

                    // If user exists
                    if(users[i].id == id) {

                        // Delete  user
                        users.splice(i, 1);

                        // Return the success header
                        return [header, {data: 'User removed'}];
                    }
                }

				// Return the error header
                return [header, {error: 'User not found'}];
			}

			// Return the error header
			return [header, {error:'Error in user removing'}];
		}


		// Function for index users API
		function indexRespond(method, url, data, headers, params) {

			// Get a random header
			var header = randomHeader();

			// If the result will be 200, execute the operation
			if(header == 200) {

				// Return the success header
                return [header, {data: users}];
			}

			// Return the error header
			return [header, {error:'Error while listing users'}];
		}


		// Function for show users API
		function showRespond(method, url, data, headers, params) {

            // Get the id param from url
            var id = url.split("/").pop();

			// Get a random header
			var header = randomHeader();

			// If the result will be 200, execute the operation
			if(header == 200) {

                // Get user by id from user's array
                for(var i = 0; i <= users.length - 1; i++) {

                    // If user exists
                    if(users[i].id == id) {

                        // Return the success header
                        return [header, {data: users[i]}];
                    }
                }

                // Return the error header
    			return [header, {error:'User not found'}];
			}

			// Return the error header
			return [header, {error:'Error showing user'}];
		}


		// Function for store users API
		function storeRespond(method, url, data, headers, params) {

			// Get a random header
			var header = randomHeader();

            // If the result will be 200, execute the operation
			if(header == 200) {

                // Assisgn user id - override if inserted
                data.id = users.length;

                // Insert the new user
                users.push(data);

                // Return the success header
                return [header, {data: 'User stored'}];
            }

			// Return the error header
			return [header, {error:'Error storing the user'}];
		}


		// Function for update users API
		function updateRespond(method, url, data, headers, params) {

            // Get the id param from url
            var id = url.split("/").pop();

			// Get a random header
			var header = randomHeader();

			// If the result will be 200, execute the operation
			if(header == 200) {

                // Get user by id from user's array
                for(var i = 0; i <= users.length - 1; i++) {

                    // If user exists
                    if(users[i].id == id) {

                        // Override the user
                        users[i] = data;

                        // Return the success header
                        return [header, {data: 'User updated'}];
                    }
                }

                // Return the error header
    			return [header, {error:'User not found'}];
			}

			// Return the error header
			return [header, {error:'Error updating user'}];
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
			    url: /\/api\/users\/(d*)/,
			    params: ['id'],
			    respond: destroyRespond

			},{

				label: 'index',
			    method: 'GET',
			    url: '/api/users/',
			    respond: indexRespond

			},{

				label: 'show',
			    method: 'GET',
			    url: /\/api\/users\/(d*)/,
			    params: ['id'],
			    respond: showRespond

			},{

				label: 'store',
			    method: 'POST',
			    url: '/api/users/',
			    respond: storeRespond

			},{

				label: 'update',
			    method: 'PUT',
			    url: /\/api\/users\/(d*)/,
			    params: ['id'],
			    respond: updateRespond
			}];
		}


		// Function for set the array
		function setUsers() {

            users = [{

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
