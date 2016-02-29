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

        var that = this;
        this.prompt({

            name: 'appName',
            message: 'What will be the name of your application ?',
            default: this.appname
        }, function (ans) {

            that.log(chalk.yellow("Wow! " + ans.appName + " is a great name for an angular-app"));
            that.log(chalk.red(helper.spaces));

            that.config.set('appName', ans.appName);
            that._moveAndInstall(ans);
        });
    },
    _moveAndInstall: function (ans) {

        this.log(chalk.red("I am moving all into " + this.appname + " directory and installing dependecies"));
        this.log(chalk.red(helper.spaces));

        this.fs.copyTpl(
          this.templatePath(),
          this.destinationPath(),
          { appname: helper.lowercase(this.config.get('appName')) }
        );

        //this.npmInstall();

        this.log(chalk.red(helper.spaces));
        this.log(chalk.red("All ready! \n \n Type  'npm run serve'!"));
        this.log(chalk.red(helper.spaces));
    }
});
