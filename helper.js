var lingo = require("lingo").en;

// Path
exports.MODULES_PATH = 'src/app/modules/';
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
