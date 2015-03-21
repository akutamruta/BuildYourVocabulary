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

    gulp.watch('**/*.{html,js,css,ico}', reload);
    
});


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
            excludes: {
              scripts: [
                'swReg.js',
                'serviceWorker.js',
                'serviceworker-cache-polyfill.js'
              ]
            }
        }))
        .pipe(gulp.dest('./dist'));

});

gulp.task('default',['browser-sync'])

