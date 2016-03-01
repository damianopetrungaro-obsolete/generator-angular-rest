(function() {

  'use strict';

    // Pass the <%= filtername%>Filter to the app
    angular
        .module('<%= appname %>')
        .filter('<%= filtername%>Filter', <%= filtername%>Filter);


    // Define the <%= filtername%>Filter
    function <%= filtername%>Filter() {

        // Define filter
        var filter = function(input, arg) {

			return '<%= filtername%> filter ouput';
		};

        // Return filter
        return filter;

    }
})();
