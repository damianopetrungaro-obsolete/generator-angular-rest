var replace = require('replace');

//Path
exports.MODULES_PATH = 'src/app/modules/';
exports.COMPONENTS_PATH = 'src/app/shared/components/';

//Capitalize
exports.capitalize = function (string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

exports.replacer = function (from, to, path) {
  replace({
    regex: from,
    replacement: to,
    paths: [path],
    recursive: true,
    silent: true,
  });
};
