var gulp = require('gulp');
var rename = require('gulp-rename');
var sass = require('gulp-sass');

var styleSrc = './src/scss/styles.scss';
var styleDist = './dist/css';

gulp.task('styles', function(done){
	gulp.src(styleSrc)
		.pipe(sass({
			errorLogToConsole: true,
		}))
		.on('error', console.error.bind(console))
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest(styleDist));

		done();
});