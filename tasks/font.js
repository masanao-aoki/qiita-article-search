var gulp = require('gulp');
//setting
var settings = require('../gulpfile_settings');

gulp.task( 'font', function() {
    return gulp.src(
        [ settings.watch.font.files ]
        )
        .pipe( gulp.dest( settings.dest.font.dir )
    );
});
