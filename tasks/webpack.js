var gulp = require('gulp');
var webpack = require('webpack-stream');
var plumber = require('gulp-plumber');

//setting
var webpackConfig = require('../webpack.config');
var settings = require('../gulpfile_settings');

gulp.task('webpack', function () {
    return gulp.src('')
        .pipe(plumber())
        .pipe(webpack(webpackConfig))
        .pipe(gulp.dest('')
    );
});
