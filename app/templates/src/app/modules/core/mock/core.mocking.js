(function(){

	'use strict';

	// Pass the mockHelperProvider to the app
	angular
		.module('core.mocking')
		.provider('mockHelper', mockHelperProvider);


    // Define the mockHelperProvider
	function mockHelperProvider() {


		// Holds the service factory function
		this.$get = MockHelper;


		// Define the mockHelperProvider
		function MockHelper($httpBackend) {


			// Inject with ng-annotate
			"ngInject";


			// Pass through this extension
			$httpBackend.whenGET(/\.html$/).passThrough();
			$httpBackend.whenGET(/\.png$/).passThrough();
			$httpBackend.whenGET(/\.svg$/).passThrough();
			$httpBackend.whenGET(/\.jpg$/).passThrough();
			$httpBackend.whenGET(/\.jpeg$/).passThrough();
			$httpBackend.whenGET(/\.css$/).passThrough();


			// Define the object to return
			var service = {

				configureMocks: configureMocks,		// Configure all the states for the route
			};


			// Return the object
			return service;


	        /*
	        |--------------------------------------------------------------------------
	        | Functions
	        |--------------------------------------------------------------------------
	        |
	        | Declaring all functions used in the MockHelper
	        |
	        */


			// Configure all the mocks for the route
			function configureMocks(mocks) {

				// Foreach mocks, create a fake backend interaction
				mocks.forEach(function(mock){

					$httpBackend.when(mock.method, mock.url).respond(mock.respond);
				});
			}
		}
	}

})();
