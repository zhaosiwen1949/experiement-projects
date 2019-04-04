const path = require('path');
const gulp = require('gulp');
const babel = require('gulp-babel');
const rimraf = require('rimraf');
const t = require('@babel/types');

const visitor = {
  ImportDeclaration(path, _ref = { opts: {} }) {
    const specifiers = path.node.specifiers;
    const source = path.node.source;
    const REG = /\.scss$/
    console.log(REG.test(source.value));
    if (REG.test(source.value)) {
      // 如果import '.scss'，就转换成对应的css文件
      const newValue = source.value.replace(REG, '.css');
      path.replaceWith(
        t.importDeclaration(specifiers, t.stringLiteral(newValue))
      )
    }
  }
};

gulp.task('default', () => {
    rimraf.sync('./dist/');
    return gulp.src('src/app.js')
      .pipe(babel({
        // presets: ['@babel/preset-env'],
        plugins: [
          [
            require.resolve('babel-plugin-css-modules-transform'),
            {
              keepImport: true,
              extractCss: {
                dir: './dist',
                relativeRoot: './src',
                filename: '[path]/[name].css'
              },
              preprocessCss: path.resolve(__dirname, './processSass.js'),
              extensions: ['.css', '.scss']
            }
          ],
          [
            {
              visitor
            }
          ]
        ]
      }))
      .pipe(gulp.dest('dist'))
  }
);