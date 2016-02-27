var generators = require('yeoman-generator');

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
      this.destinationPath('src/app/modules/' + this.moduleName),
      {
        modulename: this.moduleName,
        modulenameCamel: this.moduleName,
        appname: this.config.get('appName')
      }
    );
  }
});
