(function() {

  'use strict';

    // Pass the usersRoute to the app
	angular
	    .module('<%= appname %>')
	    .run(usersRoute);


	// Define the usersRoute
    function usersRoute(routerHelper) {


        // Inject with ng-annotate
        "ngInject";


    	// Intercept all the states and add them to the routing
    	routerHelper.configureStates(getStates());
    }


    // Define the getStates
    function getStates() {

		return [{

		    state: 'users-index',
		    config: {
		        url: '/users',
		        templateUrl: 'app/modules/users/index/users.indexView.html',
		        controller: 'usersIndexCtrl',
		        controllerAs: 'usersIndex'
		    }
		}, {
		    state: 'users-store',
		    config: {
		        url: '/users/store',
		        templateUrl: 'app/modules/users/store/users.storeView.html',
		        controller: 'usersStoreCtrl',
		        controllerAs: 'usersStore'
		    }
		}, {
		    state: 'users-show',
		    config: {
		        url: '/users/:id',
		        templateUrl: 'app/modules/users/show/users.showView.html',
		        controller: 'usersShowCtrl',
		        controllerAs: 'usersShow'
		    }
		}, {
		    state: 'users-update',
		    config: {
		        url: '/users/:id/update',
		        templateUrl: 'app/modules/users/update/users.updateView.html',
		        controller: 'usersUpdateCtrl',
		        controllerAs: 'usersUpdate'
		    }
		}, {
		    state: 'users-destroy',
		    config: {
		        url: '/users/:id/delete',
		        templateUrl: 'app/modules/users/destroy/users.destroyView.html',
		        controller: 'usersDestroyCtrl',
		        controllerAs: 'usersDestroy'
		    }
		}];
	}

})();
