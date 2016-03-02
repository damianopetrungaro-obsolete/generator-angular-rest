var generators = require('yeoman-generator'),
    helper = require('../helper.js'),
    yosay = require('yosay');

module.exports = generators.Base.extend({

    // The name `constructor` is important here
    constructor: function () {

        // Calling the super constructor is important so our generator is correctly set up
        generators.Base.apply(this, arguments);

        // Greeting
        this.log(yosay(helper.welecomeApp));
    },
    prompting: function() {

        // Define this as that
        var done = this.async();

        // Ask for user input
        this.prompt({
            name: 'appName',                                            // Define variable name
            message: 'What will be the name of your application ?',     // Define message to show to the user
            default: this.appname                                       // Define default value (dir name)
        }, function (response) {

            // Show message to user
            this.log(helper.message("Hey! '" + response.appName + "' is a great name for an angular-app"));

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
        this.log(helper.message("I am moving all into " + this.appname + " directory!"));

        // Move templates to directory
        this.fs.copyTpl(
          this.templatePath(),
          this.destinationPath(),
          { appname: helper.lowercase(this.config.get('appName')) }
        );
    },
    install: function () {

        // Show message to user
        this.log(helper.message("I am installing npm"));

        // Install npm dependecies
        this.npmInstall();
    },
    end: function() {

        // Bye bye!
        this.log(yosay(helper.bye));
    }
});
