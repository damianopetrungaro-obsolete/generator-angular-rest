var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
  // The name `constructor` is important here
  constructor: function () {
    // Calling the super constructor is important so our generator is correctly set up
    generators.Base.apply(this, arguments);

    // Next, add your custom code
    this.log('constructor just ran');

    /*
    *
    ARGUMENTS
    *
    */

    // This makes `appname` a required argument.
    this.argument('sampleArg', { type: String, required: true });
    // And you can then access it later on this way
    this.log(this.sampleArg);


    /*
    *
    OPTIONS
    *
    */

    // This method get the option passed by flas ES --sampleOpt
    this.option('sampleOpt');

    // And you can then access it later on this way; e.g.
    this.sampleOpt = this.options.sampleOpt ? 'TRUE': 'FALSE';
    this.log(this.sampleOpt);

  },
  prompting: function () {

    //
    var done = this.async();

    //
    this.prompt({
      type    : 'input',                // Define type of input
      name    : 'variable',                 // Define the var name
      message : 'Your project name',    // Define the message to print to the user
      default : 'DEFAULT-NAME!',        // Define a default value
    }, function (answers) {
      this._private(answers.variable);
      done();

    }.bind(this));

  },
  intsallDep: function () {
    this.log('Installing Dependecies');
    //this.npmInstall(['lodash','gulp','gulp-uglify'], { 'saveDev': true });
    this.log('Installed Dependecies');
  },
  paths: function () {
    this.destinationPath = this.destinationPath(this.sampleArg);
    this.log(this.destinationPath);
    this.templateRoot = this.sourceRoot();
    this.log(this.templateRoot);
  },
  move: function () {
    this.log(this.prompt.name);
  },
  // Method with _ as first char, wont' be called automatically
  _private: function (passed) {

    this.fs.copyTpl(
      this.templatePath(),
      this.destinationPath(this.sampleArg),
      { appname: passed }
    );

    this.log('passed is' + passed);
  }
});
