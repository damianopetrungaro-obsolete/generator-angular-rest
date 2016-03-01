var generators = require('yeoman-generator');
var chalk = require('chalk');
var rename = require('gulp-rename');
var helper = require('../helper.js');

module.exports = generators.Base.extend({

    // The name `constructor` is important here
    constructor: function () {

        // Calling the super constructor is important so our generator is correctly set up
        generators.Base.apply(this, arguments);

        // Greeting
        this.log(chalk.red(helper.faces));
    },
    prompting: function() {

        // Define this as that
        var that = this;
        var done = this.async();

        // Ask for user input
        this.prompt({
            name: 'filterName',                                 // Define variable name
            message: 'What will be the name of your filter ?',  // Define message to show to the user
            default: helper.rand(6)                              // Define default value
        }, function (response) {

            // Show message to user
            that.log(chalk.yellow("Amaing! " + response.filterName + " is an amazing name for a filter!"));
            that.log(chalk.red(helper.spaces));

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
        this.log('end!');
    }
});
