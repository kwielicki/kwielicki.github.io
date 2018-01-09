const gulp   	 = require('gulp'),
	  concat 	 = require('gulp-concat'),
	  sourcemaps = require('gulp-sourcemaps'),
	  uglify 	 = require('gulp-uglify'),
	  babel 	 = require('gulp-babel');

// Task - concate javascript files
gulp.task('js-concatenate', function() {
  return gulp.src((
    [
      'assets/javascript/lunr.js',
      'assets/javascript/lozad.min.js',
      'assets/javascript/tiny-slider.min.js',
      'assets/javascript/platform.js',
      'assets/javascript/search.js',
      'assets/javascript/site.js',
      '!assets/javascript/bundle.min.js'
    ]))
  	.pipe(sourcemaps.init())
  		.pipe(babel({
            presets: ['es2015-script']
        }))
    	.pipe(concat({ path: 'bundle.min.js', stat: { mode: 0666 }}))
    .pipe(uglify())
	.pipe(sourcemaps.write())
    .pipe(gulp.dest('assets/javascript/'));
});