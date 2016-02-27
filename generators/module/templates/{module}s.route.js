(function() {

  'use strict';

    // Pass the <%= modulename %>sRoute to the app
	angular
	    .module('<%= appname %>')
	    .run(<%= modulename %>sRoute);


	// Define the <%= modulename %>sRoute
    function <%= modulename %>sRoute(routerHelper) {


        // Inject with ng-annotate
        "ngInject";


    	// Intercept all the states and add them to the routing
    	routerHelper.configureStates(getStates());
    }


    // Define the getStates
    function getStates() {

        // Here an example of returning route config
        return [{
        // 	    state: '<%= modulename %>s-index',
        // 	    config: {
        // 	        url: '/<%= modulename %>s',
        // 	        templateUrl: 'app/modules/<%= modulename %>s/index/<%= modulename %>s.indexView.html',
        // 	        controller: '<%= modulename %>sIndexCtrl',
        // 	        controllerAs: '<%= modulename %>sIndex'
        // 	    }
        }];
    }

})();
