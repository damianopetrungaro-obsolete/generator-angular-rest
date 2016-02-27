var generators = require('yeoman-generator');
var helper = require('../../helper.js');

console.log(helper);

module.exports = generators.Base.extend({
  // The name `constructor` is important here
  constructor: function () {
    // Calling the super constructor is important so our generator is correctly set up
    generators.Base.apply(this, arguments);

    // This makes `appname` a required argument.
    this.argument('moduleName', { type: String, required: true });

  },
  move: function () {

    this.fs.copyTpl(
      this.templatePath(),
      this.destinationPath(helper.MODULES_PATH + this.moduleName), {

        modulename: this.moduleName,
        modulenameCapitalize: helper.capitalize(this.moduleName),
        appname: this.config.get('appName')
      }
    );

    // Rename all files created
    helper.replacer('{module}', this.moduleName, helper.MODULES_PATH);

  }
});
