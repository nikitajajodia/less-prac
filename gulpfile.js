var gulp        = require('gulp');
var browserify  = require('browserify');
var source      = require('vinyl-source-stream');
var buffer      = require('vinyl-buffer');

var plugins     = require('gulp-load-plugins')();

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

gulp.task('copy-images',function(){
  return gulp.src('./img/**')
   .pipe(gulp.dest('../../../../../opt/lampp/htdocs/Demo-css/build/client/img'))
});

gulp.task('copy-fonts',function(){
  return gulp.src('./fonts/**')
   .pipe(gulp.dest('../../../../../opt/lampp/htdocs/Demo-css/build/client/fonts'))
});

gulp.task('less',function () {
  return gulp.src('./less/main.less')
    .pipe(plugins.less())
    .pipe(plugins.cssmin())
    .pipe(gulp.dest('./css'));
});

gulp.task('build',['browserify','less','copy-images','copy-fonts'],function(){
  gulp.watch('./js/**',['browserify']);
  gulp.watch('./img/**',['copy-images','browserify']);
  gulp.watch('./fonts/**',['copy-fonts','browserify']);
  gulp.watch('./less/main.less',['less','browserify'])
})