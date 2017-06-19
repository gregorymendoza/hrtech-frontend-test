const gulp = require('gulp'),
	  watch = require('gulp-watch'),
	  sass = require('gulp-sass'),
	  uglify = require('gulp-uglify'),
	  htmlmin = require('gulp-htmlmin'),
	  autoprefixer = require('gulp-autoprefixer'),
	  rename = require('gulp-rename'),
	  plumber = require('gulp-plumber'),
	  pump = require('pump'),
	  livereload = require('gulp-livereload');


// Paths
const sassSrc = './src/scss/*.scss',
	  cssDest = './dist/css/',
	  jsSrc = './src/js/*.js',
	  jsDest = './dist/js/',
	  htmlSrc = './src/*.html',
	  htmlDest = './dist/';

// Style Task
gulp.task('styles', () => {
	gulp.src(sassSrc)
		.pipe(plumber())
		.pipe(sass.sync({
			outputStyle: 'compressed',
			errLogToConsole: true
		}))
		.pipe(autoprefixer({
			browsers: ['last 2 versions', 'safari 5', 'ie 6', 'ie 7', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'],
			cascade: false
		}))
		.pipe(rename({ extname: '.min.css' }))
		.pipe(gulp.dest(cssDest))
		.pipe(livereload());
});

// JavaScript Task
gulp.task('compress', cb => {
  pump([
        gulp.src(jsSrc),
        uglify(),
        rename({ extname: '.min.js' }),
    	gulp.dest(jsDest),
        livereload()
    ],
    cb
  );
});

// HTML Task
gulp.task('htmlmin', () => {
  gulp.src(htmlSrc)
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest(htmlDest))
    .pipe(livereload());
});

gulp.task('watch', () => {
	livereload.listen();
    gulp.watch(sassSrc, ['styles']);
    gulp.watch(jsSrc, ['compress']);
    gulp.watch(htmlSrc, ['htmlmin']);
});

gulp.task('default', ['styles', 'compress', 'htmlmin', 'watch']);