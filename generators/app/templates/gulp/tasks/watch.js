'use strict';

var gulp = 			require('gulp'),
	paths = 		require('../config');

// Watch tasks
gulp.task('watch', function(){

	// For every app change, reload js and scss
	gulp.watch(paths.js.files,		['scripts']);		// Watch for scripts changes
	gulp.watch(paths.scss.files,	['styles']);		// Watch for styles changes
});