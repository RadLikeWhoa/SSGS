var gulp = require('gulp')
var sass = require('gulp-ruby-sass')
var autoprefixer = require('autoprefixer-core')
var mqpacker = require('css-mqpacker')
var csso = require('gulp-csso')
var postcss = require('gulp-postcss')

gulp.task('styles', function () {
  return sass('scss/style.scss', {
      style: 'compressed',
      loadPath: 'bower_components/ssgs'
    })
    .on('error', function (err) { console.log(err.message); })
    .pipe(postcss([ autoprefixer('last 2 versions'), mqpacker ]))
    .pipe(csso())
    .pipe(gulp.dest('css'))
})

gulp.task('watch', function () {
  gulp.watch('scss/style.scss', [ 'styles' ])
})

gulp.task('default', [ 'styles', 'watch' ])