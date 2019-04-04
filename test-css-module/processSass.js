const sass = require('node-sass');

module.exports = (data, filename) => {
  const result = sass.renderSync({ data, file: filename, indentedSyntax: true }).css;

  return result.toString('utf8');
};