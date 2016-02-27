'use strict';

var gulp = 		require('gulp'),
	paths =		require('../config'),
	image = 	require('gulp-image');

// Minify and concat angular app
gulp.task('images', function() {

	return gulp.src(paths.img.files)				// Get all the files
			.pipe(image())							// Manage all img files
			.pipe(gulp.dest(paths.img.folder.dest));	// Put all images
});