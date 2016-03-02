'use strict';

var gulp = require('gulp');

// Define default tasks for gulp
gulp.task('default',    ['scripts', 'styles', 'watch']);

gulp.task('production', ['scripts', 'styles', 'images']);
