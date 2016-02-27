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

		return [{

		    state: '<%= modulename %>s-index',
		    config: {
		        url: '/<%= modulename %>s',
		        templateUrl: 'app/modules/<%= modulename %>s/index/<%= modulename %>s.indexView.html',
		        controller: '<%= modulename %>sIndexCtrl',
		        controllerAs: '<%= modulename %>sIndex'
		    }
		}, {
		    state: '<%= modulename %>s-store',
		    config: {
		        url: '/<%= modulename %>s/store',
		        templateUrl: 'app/modules/<%= modulename %>s/store/<%= modulename %>s.storeView.html',
		        controller: '<%= modulename %>sStoreCtrl',
		        controllerAs: '<%= modulename %>sStore'
		    }
		}, {
		    state: '<%= modulename %>s-show',
		    config: {
		        url: '/<%= modulename %>s/:id',
		        templateUrl: 'app/modules/<%= modulename %>s/show/<%= modulename %>s.showView.html',
		        controller: '<%= modulename %>sShowCtrl',
		        controllerAs: '<%= modulename %>sShow'
		    }
		}, {
		    state: '<%= modulename %>s-update',
		    config: {
		        url: '/<%= modulename %>s/:id/update',
		        templateUrl: 'app/modules/<%= modulename %>s/update/<%= modulename %>s.updateView.html',
		        controller: '<%= modulename %>sUpdateCtrl',
		        controllerAs: '<%= modulename %>sUpdate'
		    }
		}, {
		    state: '<%= modulename %>s-destroy',
		    config: {
		        url: '/<%= modulename %>s/:id/delete',
		        templateUrl: 'app/modules/<%= modulename %>s/destroy/<%= modulename %>s.destroyView.html',
		        controller: '<%= modulename %>sDestroyCtrl',
		        controllerAs: '<%= modulename %>sDestroy'
		    }
		}];
	}

})();
