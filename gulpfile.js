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
    gulp.watch('**/*.{html,js,css}', reload);
    
});



//gulp.task('default',['connect','watch'])
gulp.task('default',['browser-sync'])
