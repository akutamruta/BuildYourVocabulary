var gulp = require('gulp');
var connect = require('gulp-connect');
var browserSync = require('browser-sync');
var reload      = browserSync.reload;
var vulcanize = require('gulp-vulcanize');

var autoprefixer = require('gulp-autoprefixer');

// Static server
gulp.task('browser-sync', function() {
     browserSync({
        server: {
            baseDir: "./dist",

        },
        port: 8080,
        notify: false,
        logLevel: "silent"
    });

    //gulp.watch('**/*.{css}', ['auto-prefix', reload]);
    gulp.watch('**/*.{html,js,css,ico}', reload);
    
});

/*gulp.task('generate-service-worker', function(callback) {
  var fs = require('fs');
  var swPrecache = require('sw-precache');
  var rootDir = '.';
  var path = require('path');

  swPrecache({*/
    //staticFileGlobs: [rootDir + '/**/*.//{js,html,css,png,jpg,gif}'],
    /*stripPrefix: rootDir
  }, function(error, swFileContents) {
    if (error) {
      return callback(error);
    }
    fs.writeFile(path.join(rootDir, 'sw.js'), swFileContents, callback);
  });
});*/

gulp.task('generate-sw', function(callback) {
  var fs = require('fs');
  var swPrecache = require('sw-precache');
  var rootDir = './dist';
  var path = require('path');

  swPrecache({
    staticFileGlobs: [rootDir + '/**/*.{js,html,css,png,jpg,gif,ico}'],
    stripPrefix: rootDir
  }, function(error, swFileContents) {
    if (error) {
      return callback(error);
    }
    fs.writeFile(path.join(rootDir, 'serviceWorker.js'), swFileContents, callback);
  });
});

gulp.task('vulcanize', function() {

  return gulp.src('index.html')
        .pipe(vulcanize({
            dest: './dist',
            strip: true,
            inline: true,
            //csp : true
            excludes: {
              scripts: [
                'swReg.js',
                'serviceWorker.js'
              ]
            }
        }))
        .pipe(gulp.dest('./dist'));

});

//gulp.task('default',['connect','watch'])
gulp.task('default',['browser-sync'])

var uglify = require('gulp-uglifyjs');
 
gulp.task('uglify', function() {
  gulp.src('./**/*.js && !node_modules/**/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
});

