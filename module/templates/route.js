(function() {

  'use strict';

    // Pass the <%= modulenamePlural %>Route to the app
	angular
	    .module('<%= appname %>')
	    .run(<%= modulenamePlural %>Route);


	// Define the <%= modulenamePlural %>Route
    function <%= modulenamePlural %>Route(routerHelper) {


        // Inject with ng-annotate
        "ngInject";


    	// Intercept all the states and add them to the routing
    	routerHelper.configureStates(getStates());
    }


    // Define the getStates
    function getStates() {

		return [{

		    state: '<%= modulenamePlural %>-index',
		    config: {
		        url: '/<%= modulenamePlural %>',
		        templateUrl: 'app/modules/<%= modulenamePlural %>/index/<%= modulenamePlural %>.indexView.html',
		        controller: '<%= modulenamePlural %>IndexCtrl',
		        controllerAs: '<%= modulenamePlural %>Index'
		    }
		}, {
		    state: '<%= modulenamePlural %>-store',
		    config: {
		        url: '/<%= modulenamePlural %>/store',
		        templateUrl: 'app/modules/<%= modulenamePlural %>/store/<%= modulenamePlural %>.storeView.html',
		        controller: '<%= modulenamePlural %>StoreCtrl',
		        controllerAs: '<%= modulenamePlural %>Store'
		    }
		}, {
		    state: '<%= modulenamePlural %>-show',
		    config: {
		        url: '/<%= modulenamePlural %>/:id',
		        templateUrl: 'app/modules/<%= modulenamePlural %>/show/<%= modulenamePlural %>.showView.html',
		        controller: '<%= modulenamePlural %>ShowCtrl',
		        controllerAs: '<%= modulenamePlural %>Show'
		    }
		}, {
		    state: '<%= modulenamePlural %>-update',
		    config: {
		        url: '/<%= modulenamePlural %>/:id/update',
		        templateUrl: 'app/modules/<%= modulenamePlural %>/update/<%= modulenamePlural %>.updateView.html',
		        controller: '<%= modulenamePlural %>UpdateCtrl',
		        controllerAs: '<%= modulenamePlural %>Update'
		    }
		}, {
		    state: '<%= modulenamePlural %>-destroy',
		    config: {
		        url: '/<%= modulenamePlural %>/:id/delete',
		        templateUrl: 'app/modules/<%= modulenamePlural %>/destroy/<%= modulenamePlural %>.destroyView.html',
		        controller: '<%= modulenamePlural %>DestroyCtrl',
		        controllerAs: '<%= modulenamePlural %>Destroy'
		    }
		}];
	}

})();
