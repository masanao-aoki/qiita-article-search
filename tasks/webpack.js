var gulp = require('gulp');
var webpack = require('webpack-stream');

//setting
var webpackConfig = require('../webpack.config');
var settings = require('../gulpfile_settings');

gulp.task('webpack', function () {
    return gulp.src('')
        .pipe(webpack(webpackConfig))
        .pipe(gulp.dest('')
    );
});
