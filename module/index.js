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
          name: 'moduleName',                                 // Define variable name
          message: 'What will be the name of your module ?',  // Define message to show to the user
          default: this.appname                               // Define defaukt vakue (dir name)
      }, function (response) {

          // Show message to user
          that.log(chalk.yellow("Amaing! " + response.moduleName + " is an amazing name for a module!"));
          that.log(chalk.red(helper.spaces));

          // Set moduleName and continue with installation
          that._moveAndInstall(response.moduleName);
      });
  },
  _moveAndInstall: function (moduleName) {

    // Add transform strep Register for manage files before moving
    this.registerTransformStream(rename({prefix: helper.lowercase(helper.plural(moduleName)) + '.'}));

    // Move templates to directory
    this.fs.copyTpl(
      this.templatePath(),
      this.destinationPath(helper.MODULES_PATH + helper.lowercase(helper.plural(moduleName))),{
        modulename: helper.lowercase(moduleName),
        modulenamePlural: helper.lowercase(helper.plural(moduleName)),
        modulenameCapitalize: helper.capitalize(helper.singular(moduleName)),
        modulenameCapitalizePlural: helper.capitalize(helper.plural(moduleName)),
        appname: helper.lowercase(this.config.get('appName'))
    });
  }
});
