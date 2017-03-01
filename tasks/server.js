var gulp = require('gulp')
	, nodemon = require('gulp-nodemon')
	, livereload = require('gulp-livereload')


//setting
var settings = require('../gulpfile_settings');

gulp.task('server', function () {
	livereload.listen();

	nodemon({
		script: 'server.js'
		, watch: 'root'
		, ignore: [  // nodemon で監視しないディレクトリ
			'node_modules'
		],
		// stdout: false
})
	.on('start',function () {
		console.log('started')
		setTimeout(function () {
			livereload.reload();
		}, 1000)

	})
	.on('restart', function () {
		console.log('restarted!')
	})
})
