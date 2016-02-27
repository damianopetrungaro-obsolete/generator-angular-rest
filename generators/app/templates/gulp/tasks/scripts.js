'use strict';

var gulp = 			require('gulp'),
	paths =			require('../config'),
	rename = 		require('gulp-rename'),
	uglify = 		require('gulp-uglify'),
	concat = 		require('gulp-concat'),
	ngAnnotate = 	require('gulp-ng-annotate');

// Minify and concat angular app
gulp.task('scripts', function() {

	return gulp.src([

				paths.js.modules,					// Get all modules
				paths.js.files						// Get all the other files
			])
			.pipe(ngAnnotate())
			.pipe(concat(paths.js.bundle))			// Concat all file in once
			.pipe(gulp.dest(paths.js.folder.dest))	// Put the file into js folder
			.pipe(uglify())							// Minify the code
			.pipe(rename({ extname: '.min.js' }))	// Add .min.js extension
			.pipe(gulp.dest(paths.js.folder.dest));	// Put the minified file into js folder
});
