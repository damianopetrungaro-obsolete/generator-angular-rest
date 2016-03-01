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
          name: 'factoryName',                                 // Define variable name
          message: 'What will be the name of your factory ?',  // Define message to show to the user
          default: helper.rand(6)                              // Define default value
      }, function (response) {

          // Show message to user
          that.log(chalk.yellow("Amaing! " + response.factoryName + " is an amazing name for a factory!"));
          that.log(chalk.red(helper.spaces));

          // Set factoryName and continue with installation
          that._moveAndInstall(response.factoryName);
      });
  },
  _moveAndInstall: function (factoryName) {

    // Add transform strep Register for manage files before moving
    this.registerTransformStream(rename({prefix: helper.lowercase(factoryName) + '.'}));

    // Move templates to directory
    this.fs.copyTpl(
      this.templatePath(),
      this.destinationPath(helper.FACTORIES_PATH),{
        factoryname: helper.lowercase(factoryName),
        appname: helper.lowercase(this.config.get('appName'))
    });
  }
});
