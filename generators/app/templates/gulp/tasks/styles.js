'use strict';

var gulp =		require('gulp'),
	paths =		require('../config'),
	plumber =	require('gulp-plumber'),
	compass =	require('gulp-compass');

// Convert, minify and concat scss/css
gulp.task('styles', function() {

	return gulp.src(paths.scss.files)						// Get all the css files
			.pipe(plumber())								// Control for errors
			.pipe(compass({
	
				config_file:	paths.scss.config,			// Get configuration file
				css: 			paths.scss.folder.css,		// Get css path
				sass: 			paths.scss.folder.scss,		// Get scss path
				sourcemap: 		true						// Generate sourcemap
			}))
			.pipe(gulp.dest(paths.scss.folder.css));		// Put the files into css folder
});
