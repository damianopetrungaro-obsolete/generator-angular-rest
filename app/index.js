var generators = require('yeoman-generator');
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
            name: 'appName',                                            // Define variable name
            message: 'What will be the name of your application ?',     // Define message to show to the user
            default: this.appname                                       // Define defaukt vakue (dir name)
        }, function (response) {

            // Show message to user
            that.log(chalk.yellow("Wow! " + response.appName + " is a great name for an angular-app"));
            that.log(chalk.red(helper.spaces));

            // Set appName and continue with installation
            that.config.set('appName', response.appName);
            that._moveAndInstall(response);
        });
    },
    _moveAndInstall: function (response) {

        // Show message to user
        this.log(chalk.red("I am moving all into " + this.appname + " directory and installing dependecies"));
        this.log(chalk.red(helper.spaces));

        // Move templates to directory
        this.fs.copyTpl(
          this.templatePath(),
          this.destinationPath(),
          { appname: helper.lowercase(this.config.get('appName')) }
        );

        // Install npm dependecies
        this.npmInstall();
    }
});
