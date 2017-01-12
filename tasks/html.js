var gulp = require('gulp');
//setting
var settings = require('../gulpfile_settings');

gulp.task( 'html', function() {
    return gulp.src(
        [ settings.watch.html.files ],
            { base: 'src' }
        )
        .pipe( gulp.dest( settings.dest.html.dir )
    );
});
