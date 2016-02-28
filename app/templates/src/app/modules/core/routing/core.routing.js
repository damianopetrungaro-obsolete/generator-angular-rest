(function(){

	'use strict';

	// Pass the routerHelperProvider to the app
	angular
		.module('core.routing')
		.provider('routerHelper', routerHelperProvider);


    // Define the routerHelperProvider
	function routerHelperProvider($locationProvider, $stateProvider, $urlRouterProvider, $urlMatcherFactoryProvider) {


		// Inject with ng-annotate
		"ngInject";


		// Holds the service factory function
		this.$get = RouterHelper;


		// Declare html5Mode true for a clean url
		$locationProvider.html5Mode(true);


		// Declare strict to false for remove trailing slash
		$urlMatcherFactoryProvider.strictMode(false);


		// Declare the otherwise, go here if no state is found
		$urlRouterProvider.otherwise('/404');


		// Define the routerHelperProvider
		function RouterHelper($state) {


			// Define the object to return
			var service = {

				configureStates: configureStates,			// Configure all the states for the route
				getStates: getStates 						// Return the lists of states

			};


			// Return the object
			return service;


	        /*
	        |--------------------------------------------------------------------------
	        | Functions
	        |--------------------------------------------------------------------------
	        |
	        | Declaring all functions used in the RouterHelper
	        |
	        */


			// Configure all the states for the route
			function configureStates(states) {

				// Add to the routing the state passed trought array of objects
				states.forEach(function(state) {

					$stateProvider.state(state.state, state.config);

				});
			}


			// Return the lists of states
			function getStates() {

				return $state.get();
			}
		}
	}

})();
