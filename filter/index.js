var generators = require('yeoman-generator'),
    helper = require('../helper.js'),
    rename = require('gulp-rename'),
    yosay = require('yosay');

module.exports = generators.Base.extend({

    // The name `constructor` is important here
    constructor: function () {

        // Calling the super constructor is important so our generator is correctly set up
        generators.Base.apply(this, arguments);

        // Greeting
        this.log(yosay(helper.welecomeFilter));
    },
    prompting: function() {

        var done = this.async();

        // Ask for user input
        this.prompt({
            name: 'filterName',                                 // Define variable name
            message: 'What will be the name of your filter ?',  // Define message to show to the user
            default: helper.rand(6)                              // Define default value
        }, function (response) {

            // Show message to user
            this.log(helper.message("Yeah! '" + response.filterName + "' is an amazing name for a filter!"));

            // Set componentName and continue with installation
            this.filterName  = response.filterName;
            done();
        }.bind(this));
    },
    writing: function () {

            // Add transform strep Register for manage files before moving
            this.registerTransformStream(rename({prefix: helper.lowercase(this.filterName) + '.'}));

            // Move templates to directory
            this.fs.copyTpl(
              this.templatePath(),
              this.destinationPath(helper.FILTERS_PATH),{
                filtername: helper.lowercase(this.filterName),
                appname: helper.lowercase(this.config.get('appName'))
            });
    },
    end: function() {

        // Bye bye!
        this.log(yosay(helper.bye));
    }
});
