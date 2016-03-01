var generators = require('yeoman-generator');
var rename = require('gulp-rename');
var chalk = require('chalk');
var helper = require('../helper.js');

module.exports = generators.Base.extend({
  // The name `constructor` is important here
  constructor: function () {

    // Calling the super constructor is important so our generator is correctly set up
    generators.Base.apply(this, arguments);

    // Greeting
    this.log(chalk.red(helper.faces));
  },
  question: function () {

      // Define this as that
      var that = this;

      // Ask for user input
      this.prompt({
          name: 'componentName',                                 // Define variable name
          message: 'What will be the name of your component ?',  // Define message to show to the user
          default: helper.rand(6)                              // Define default value
      }, function (response) {

          // Show message to user
          that.log(chalk.yellow("Amaing! " + response.componentName + " is an amazing name for a component!"));
          that.log(chalk.red(helper.spaces));

          // Set componentName and continue with installation
          that._moveAndInstall(response.componentName);
      });
  },
  _moveAndInstall: function (componentName) {

    // Add transform strep Register for manage files before moving
    this.registerTransformStream(rename({prefix: helper.lowercase(componentName) + '-'}));

    // Move templates to directory
    this.fs.copyTpl(
      this.templatePath(),
      this.destinationPath(helper.COMPONENTS_PATH + componentName + '-component'),{
          componentname: helper.lowercase(componentName),
          componentnameCapitalize: helper.capitalize(componentName),
        appname: helper.lowercase(this.config.get('appName'))
    });
  }
});
