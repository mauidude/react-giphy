var gulp = require('gulp');
var babelify = require('babelify');
var browserify = require('browserify');
var connect = require('gulp-connect');
var rename = require('gulp-rename');
var gutil = require('gulp-util');
var source = require('vinyl-source-stream');

gulp.task('connect', function() {
  connect.server({
    root: 'dist',
    port: 8080
  });
});

gulp.task('html', function() {
  return gulp.src('index.html')
    .pipe(gulp.dest('dist'));
});

gulp.task('js', function () {
  return browserify('js/index.js')
    .transform(babelify, {
      presets: ['es2015', 'react', 'stage-2']
    })
    .bundle()
    .pipe(source('bundle.js'))
    .on('error', gutil.log)
    .pipe(gulp.dest('dist/js'));
});

gulp.task('watch', function() {
  gulp.watch('js/**/*.js', ['js']);
  gulp.watch('index.html', ['html']);
});

gulp.task('build', ['html', 'js']);
gulp.task('default', ['connect', 'build', 'watch']);
