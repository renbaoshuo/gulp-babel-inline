# gulp-babel-inline

[![npm version](https://img.shields.io/npm/v/@renbaoshuo/gulp-babel-inline.svg?style=flat-square)](https://www.npmjs.com/package/@renbaoshuo/gulp-babel-inline)
[![Author](https://img.shields.io/badge/Author-Baoshuo-b68469.svg?style=flat-square)](https://baoshuo.ren)
[![npm license](https://img.shields.io/npm/l/@renbaoshuo/gulp-babel-inline.svg?style=flat-square)](./LICENSE)

*Issues with the output should be reported in [Babel](https://github.com/babel/babel/issues) repository.*

## Install

```bash
npm install @renbaoshuo/gulp-babel-inline
# or use yarn: yarn add @renbaoshuo/gulp-babel-inline
```

## Usage

```javascript
const gulp = require('gulp');
const babelInline = require('@renbaoshuo/gulp-babel-inline');

gulp.task('default', () =>
    gulp.src('src/**/*.html')
        .pipe(babelInline({
            presets: ['@babel/preset-env']
        }))
        .pipe(gulp.dest('dist'))
);
```

## Author

**gulp-babel-inline** © [Baoshuo](https://github.com/renbaoshuo), Released under the [MIT](./LICENSE) License.  
Authored and maintained by Baoshuo with help from [contributors](https://github.com/renbaoshuo/gulp-babel-inline/contributors).

> [Personal Website](https://baoshuo.ren) · [Blog](https://blog.baoshuo.ren) · GitHub [@renbaoshuo](https://github.com/renbaoshuo) · Twitter [@renbaoshuo](https://twitter.com/renbaoshuo)
