var generators = require('yeoman-generator');
var rename = require('gulp-rename');
var helper = require('./../helper.js');

module.exports = generators.Base.extend({
  // The name `constructor` is important here
  constructor: function () {
    // Calling the super constructor is important so our generator is correctly set up
    generators.Base.apply(this, arguments);

    // This makes `appname` a required argument.
    this.argument('moduleName', { type: String, required: true });
  },
  move: function () {

    // Add transform strep Register for manage files before moving
    this.registerTransformStream(rename({prefix: helper.lowercase(helper.plural(this.moduleName)) + '.'}));

    this.fs.copyTpl(
      this.templatePath(),
      this.destinationPath(helper.MODULES_PATH + helper.lowercase(helper.plural(this.moduleName))),
      {
        modulename: helper.lowercase(this.moduleName),
        modulenamePlural: helper.lowercase(helper.plural(this.moduleName)),
        modulenameCapitalize: helper.capitalize(helper.singular(this.moduleName)),
        modulenameCapitalizePlural: helper.capitalize(helper.plural(this.moduleName)),
        appname: helper.lowercase(this.config.get('appName'))
      }
    );
  }
});
