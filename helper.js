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

// Retirn random message into 2 strings
exports.message = function (string) {
    return  "\n\n\n===============================================================================\n" +
            string + "\n" +
            "===============================================================================\n\n\n";
};


// Return messages
exports.welecomeApp =       "'Allo 'Allo! \n Are you ready for a REST app? \n Let's do it!";
exports.welecomeComponent = "'Allo 'Allo! \n You need a component ah? \n Let's do it!";
exports.welecomeFactory =   "'Allo 'Allo! \n I know.. \n You want a factory... \n Let's do it!";
exports.welecomeFilter =    "'Allo 'Allo! \n Hey! Did you said filter? \n Let's do it!";
exports.welecomeModule =    "'Allo 'Allo! \n Wanna build an entire module? \n No problem! \n Let's do it!";
exports.bye = "All done! \n Thanks for using me! \n Hope to see you again!";
