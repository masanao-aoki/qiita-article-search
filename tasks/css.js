var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var plumber = require('gulp-plumber');

//setting
var settings = require('../gulpfile_settings');

gulp.task('css', function () {
    return gulp.src(
        [ settings.watch.cssBase.dir ]
    )
    .pipe(plumber())
    .pipe(
        postcss(
            [
                autoprefixer({browsers: ['last 5 version']}),
                require('postcss-nested')
            ]
        )
    )
    .pipe(
        gulp.dest( settings.dest.css.dir )
    );
});
