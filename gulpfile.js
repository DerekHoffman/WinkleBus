"use strict";

const fs = require('fs');
const matchdep = require('matchdep');
const del = require('del');
const args = require('yargs').argv; //read parameters to gulp
const webpack = require('webpack-stream');
const webpackConfig = require(__dirname+'/webpack.config.js');
const gutil = require( 'gulp-util' );
const ftp = require( 'vinyl-ftp' );

//handles gulp-* dependencies for us
//loops through devDependencies in package and sets gulp module name as variable
matchdep.filterDev('gulp*').forEach(function(module){
	let module_name = module.replace(/^gulp-/, '').replace(/-/, '');
	if(module_name != 'if') {
		global[module_name] = require(module);
	}else {
		global['gulpif'] = require(module);
	}
})
/*-- START -- server connections --*/
//use ssh2 module to connect to our server
const FTP_SECRET = require('../_ftpconfig.json');
/*-- END -- server connections --*/
const APPDIR = __dirname+'/templates';
const READYFORPROD = (args.dev) ? false : true;
const DOMAIN = 'magazineoutlet'; //set after validation function

// Set default paths
let path = {
	CSS: __dirname+'/app/dev/styles/style_bundle.css',
	LIBRARIES: __dirname+'/bower_components',
  BUILD_DEST: __dirname+'/app/build/'
};

gulp.task('default', ['webpack', 'concat', 'deploy'], () => {

});

gulp.task('webpack', () => {
	return gulp.src(__dirname+'/app/dev/components/App.jsx')
		.pipe(webpack(webpackConfig))
		.pipe(gulp.dest(path.BUILD_DEST));
});

gulp.task('concat', () => {
	return gulp.src([
		path.LIBRARIES+'/jquery/dist/jquery.min.js',
		path.LIBRARIES+'/bootstrap/dist/js/bootstrap.min.js'
	])
		.pipe(concat('Libraries.js'))
		.pipe(gulp.dest(path.BUILD_DEST));
});

gulp.task( 'deploy', function () {

    var conn = ftp.create( {
        host:     'ftp.dphoffman.com',
        user:    	FTP_SECRET.user,
        password: FTP_SECRET.password,
        parallel: 10,
        log:      gutil.log
    } );

    var globs = [
				'app/build/**'
    ];

    // using base = '.' will transfer everything to /public_html correctly
    // turn off buffering in gulp.src for best performance

    return gulp.src( globs, { base: './app/build', buffer: false } )
        .pipe( conn.newer( '/public_html/WinkleBus' ) ) // only upload newer files
        .pipe( conn.dest( '/public_html/WinkleBus' ) );

} );

gulp.task('dev', ['webpack', 'concat'], shell.task([
	'webpack-dev-server'
]));
