var gulp = require('gulp');
var connect = require('gulp-connect');
var browserSync = require('browser-sync');
var reload      = browserSync.reload;

var autoprefixer = require('gulp-autoprefixer');

// Static server
gulp.task('browser-sync', function() {
     browserSync({
        server: {
            baseDir: ".",

        },
        port: 8080,
        notify: false,
        logLevel: "silent"
    });

    //gulp.watch('**/*.{css}', ['auto-prefix', reload]);
    gulp.watch('**/*.{html,js,css,ico}', reload);
    
});

gulp.task('generate-service-worker', function(callback) {
  var fs = require('fs');
  var swPrecache = require('sw-precache');
  var rootDir = '.';
  var path = require('path');

  swPrecache({
    staticFileGlobs: [rootDir + '/**/*.{js,html,css,png,jpg,gif}'],
    stripPrefix: rootDir
  }, function(error, swFileContents) {
    if (error) {
      return callback(error);
    }
    fs.writeFile(path.join(rootDir, 'sw.js'), swFileContents, callback);
  });
});

//gulp.task('default',['connect','watch'])
gulp.task('default',['browser-sync'])
