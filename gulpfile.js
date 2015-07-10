var gulp        = require('gulp');
var fs          = require('fs');
var browserify  = require('browserify');
var source      = require('vinyl-source-stream');
var buffer      = require('vinyl-buffer');
var semver      = require('semver');
var rimraf      = require('rimraf');
var path        = require('path');
var less        = require('gulp-less');

var gulpLoadPlugins = require('gulp-load-plugins'),
    plugins = gulpLoadPlugins();

gulp.task('browserify',function(cb) {
  return browserify({
    entries: ['./js/index.js']
  })
  .bundle()
  .pipe(source('bundle.js'))
  .pipe(buffer())
  .pipe(plugins.addSrc('./index.html'))
  .pipe(gulp.dest('../../../../../opt/lampp/htdocs/Demo-css/build/client'))
});

gulp.task('copy-images',['browserify'],function(){
  return gulp.src('./img/**')
   .pipe(gulp.dest('../../../../../opt/lampp/htdocs/Demo-css/build/client/img'))
});

gulp.task('copy-fonts',['browserify'],function(){
  return gulp.src('./fonts/**')
   .pipe(gulp.dest('../../../../../opt/lampp/htdocs/Demo-css/build/client/fonts'))
});

gulp.task('less',function () {
  return gulp.src('./less/**/*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./css'));
});
gulp.task('build',['browserify','copy-images','copy-fonts','less'],function(){
  
})