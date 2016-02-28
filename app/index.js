var generators = require('yeoman-generator');
var helper = require('../helper.js');

module.exports = generators.Base.extend({
  // The name `constructor` is important here
  constructor: function () {
    // Calling the super constructor is important so our generator is correctly set up
    generators.Base.apply(this, arguments);

    // This makes `appname` a required argument.
    this.argument('appName', { type: String, required: true });
    this.config.set('appName', this.appName);

  },move: function () {

    this.fs.copyTpl(
      this.templatePath(),
      this.destinationPath(),
      { appname: helper.lowercase(this.appName) }
    );
  }
});
