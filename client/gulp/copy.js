/*global -$ */
'use strict';

var gulp = require('gulp'),
    path = require('path');

gulp.task('copy', function() {

    var src = {
        fa: 'bower_components/fontawesome/fonts/*',
        glyph: 'bower_components/bootstrap/dist/fonts/*',
        jquery: 'bower_components/jquery/dist/jquery.js'
    };

    gulp.src(src.fa)
        .pipe(gulp.dest('.tmp/fonts/font-awesome/'))
        .pipe(gulp.dest('public/fonts/font-awesome/'));

    gulp.src(src.glyph)
        .pipe(gulp.dest('.tmp/fonts/glyphicons/'))
        .pipe(gulp.dest('public/fonts/glyphicons/'));

    gulp.src(src.jquery)
        .pipe(gulp.dest('.tmp/js/'))
        .pipe(gulp.dest('public/js/'));
});
