var gulp = require('gulp');
//setting
var settings = require('../gulpfile_settings');

gulp.task( 'img', function() {
    return gulp.src(
        [ settings.watch.img.files ]
        )
        .pipe( gulp.dest( settings.dest.img.dir )
    );
});
