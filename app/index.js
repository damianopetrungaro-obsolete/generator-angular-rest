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
    prompting: function() {

        // Define this as that
        var that = this;
        var done = this.async();

        // Ask for user input
        this.prompt({
            name: 'appName',                                            // Define variable name
            message: 'What will be the name of your application ?',     // Define message to show to the user
            default: this.appname                                       // Define default value (dir name)
        }, function (response) {

            // Show message to user
            that.log(chalk.yellow("Wow! " + response.appName + " is a great name for an angular-app"));
            that.log(chalk.red(helper.spaces));

            // Set appName and continue with installation
            this.appName  = response.appName;

            done();
        }.bind(this));
    },
    configuring: function() {

        // Set configuration files
        this.config.set('appName', this.appName);

    },
    writing: function (response) {

        // Show message to user
        this.log(chalk.red("I am moving all into " + this.appname + " directory!"));
        this.log(chalk.red(helper.spaces));

        // Move templates to directory
        this.fs.copyTpl(
          this.templatePath(),
          this.destinationPath(),
          { appname: helper.lowercase(this.config.get('appName')) }
        );

    },
    install: function () {

        // Install npm dependecies
        this.log(chalk.red("I am installing npm"));
        this.log(chalk.red(helper.spaces));
        this.npmInstall();
    },
    end: function() {

        // Show message to user
        this.log(chalk.red("I Bye bye man!"));
        this.log(chalk.red(helper.spaces));    }
});
