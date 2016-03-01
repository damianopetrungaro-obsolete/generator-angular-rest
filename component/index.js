var generators = require('yeoman-generator');
var rename = require('gulp-rename');
var helper = require('../helper.js');

module.exports = generators.Base.extend({

    // The name `constructor` is important here
    constructor: function () {

        // Calling the super constructor is important so our generator is correctly set up
        generators.Base.apply(this, arguments);

        // Greeting
        this.log(helper.faces);
    },
    prompting: function() {

        var done = this.async();

        // Ask for user input
        this.prompt({
            name: 'componentName',                                  // Define variable name
            message: 'What will be the name of your component ?',   // Define message to show to the user
            default: helper.rand(6)                                 // Define default value
        }, function (response) {

            // Show message to user
            this.log(helper.message("Great! '" + response.componentName + "'' is a wonderful name for a component!"));

            // Set componentName and continue with installation
            this.componentName  = response.componentName;
            done();
        }.bind(this));
    },
    writing: function () {

        // Add transform strep Register for manage files before moving
        this.registerTransformStream(rename({prefix: helper.lowercase(this.componentName) + '-'}));

        // Move templates to directory
        this.fs.copyTpl(
          this.templatePath(),
          this.destinationPath(helper.COMPONENTS_PATH + this.componentName + '-component'),{
              componentname: helper.lowercase(this.componentName),
              componentnameCapitalize: helper.capitalize(this.componentName),
            appname: helper.lowercase(this.config.get('appName'))
        });

    },
    end: function() {

        // Bye bye!
        this.log(helper.bye);
    }
});
