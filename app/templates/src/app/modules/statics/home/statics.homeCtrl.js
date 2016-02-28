(function() {

  'use strict';

    // Pass the staticsHomeCtrl to the app
    angular
        .module('<%= appname %>')
        .controller('staticsHomeCtrl', staticsHomeCtrl);


    // Define the staticsHomeCtrl
    function staticsHomeCtrl() {


        // Inject with ng-annotate
        "ngInject";


        // Define staticsHome as this for ControllerAs and auto-$scope
        var staticsHome = this;
            staticsHome.title =    "AngularJS-boilerplate";
            staticsHome.content =  "A micro AngularJS boilerplate for start projects with mocking and routing modules ready, based on John Papa's style guide";


        /*
        |--------------------------------------------------------------------------
        | Contrsucts function
        |--------------------------------------------------------------------------
        |
        | All functions that should be init when the controller start
        |
        */


        initLog();


        /*
        |--------------------------------------------------------------------------
        | Functions
        |--------------------------------------------------------------------------
        |
        | Declaring all functions used in the staticsHomeCtrl
        |
        */


        // Sample for init function
        function initLog() {

            console.log('staticsHomeCtrl init');
        }
    }

})();
