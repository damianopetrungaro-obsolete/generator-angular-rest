var lingo = require("lingo").en;

// Path
exports.MODULES_PATH = 'src/app/modules/';
exports.FACTORIES_PATH = 'src/app/shared/factories/';
exports.FILTERS_PATH = 'src/app/shared/filters/';
exports.COMPONENTS_PATH = 'src/app/shared/components/';

// Capitalize
exports.capitalize = function (string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

// CamelCase
exports.camelcase = function (string) {
    return lingo.camelcase(string, true);
};

// Lowecase
exports.lowercase = function (string) {
  return string.toLowerCase();
};

// Plural
exports.plural = function (string) {
  if(lingo.isSingular(string)){
      return lingo.pluralize(string);
  }
  return string;
};

// Signular
exports.singular = function (string) {
  if(lingo.isPlural(string)){
      return lingo.singularize(string);
  }
  return string;
};

// Random string
exports.rand = function (length)
{
    var random = "";
    var letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for( var i=0; i < length; i++ )
        random += letters.charAt(Math.floor(Math.random() * letters.length));

    return random;
};

exports.spaces =
"-------------------------------------------------------------------------------------------------------------------\n" +
"-------------------------------------------------------------------------------------------------------------------\n";


exports.faces =
"-------------------------------------------------------------------------------------------------------------------\n" +
" Greet by Angular-rest\n" +
" Thank you for download me!\n" +
"     _-----_\n" +
"    |       |    .----------------------.\n" +
"    |--(o)--|    |       Rest API       |\n" +
"   `---------´   |         and          |\n" +
"    ( _´U`_ )    |       Mocking        |\n" +
"    /___A___\\    |                      |\n" +
"     |  ~  |     |    Made with love    |\n" +
"   __'.___.'__   '----------------------'\n" +
" ´   `  |° ´ Y `\n";
