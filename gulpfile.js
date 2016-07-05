'use strict';

var path = require('path');
var browserify = require('browserify');
var gulp = require('gulp');
var connect = require('gulp-connect');
var concat = require('gulp-concat');
var clean = require('gulp-clean');
var sass = require('gulp-sass');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var plumber = require('gulp-plumber');
var buffer = require('vinyl-buffer');
var source = require('vinyl-source-stream');
var ejs = require("ejs");
var fs = require('fs');

var pjson = require("./package");
var ejsCfg = require('./ejs-cfg');

gulp.task('ejs', function() {
    fs.mkdir(ejsCfg.distUrl, function() {});
    ejsCfg.pages.forEach(function(e) {
        fs.readFile(path.join(ejsCfg.ejsBaseUrl, e.ejs), "utf8", function(error, data) {
            if (error) throw error;
            var json = e.data || {};
            if(typeof e.data == 'string'){
                json = require('./' + path.join('./', ejsCfg.dataBaseUrl, e.data))
            }
            console.log(json);
            var t = ejs.render(data, e.data || {}, { cache: true, filename: e.ejs })
            fs.writeFile(path.join(ejsCfg.distUrl, e.page), t, function(err) {
                if (err) throw err;
                //console.log(e.page + " Files Saved");
            });
        });
    })
});

gulp.task('server', ['watch'], function() {
    connect.server({
        port: 4000,
        root: 'dist',
        livereload : true
    });
});

//scss编译
gulp.task('sass', function() {
    return gulp.src('src/styles/**/*.scss')
        .pipe(sass({
                outputStyle: 'compressed',
                includePaths: []
            })
            .on('error', sass.logError))
        .pipe(gulp.dest('./dist/styles'));
});

gulp.task('clean', function() {
    return gulp.src('./dist')
        .pipe(clean());
});

gulp.task('copy', function() {
    gulp.src('src/images/**/*')
        .pipe(plumber())
        .pipe(gulp.dest('dist/images'));
    gulp.src('src/libs/**/*')
        .pipe(plumber())
        .pipe(gulp.dest('dist/libs'));
});

gulp.task('js', ['jshint'], function() {
    return gulp.src(['src/js/**/*.js', '!src/libs/**/*.js'])
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(concat('app.min.js')) //合并所有js到main.js
        .pipe(uglify())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./dist/js')); //输出
});

gulp.task('jshint', function() {
    return gulp.src(['src/js/**/*.js'])
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'))
});

gulp.task('watch', ['js', 'sass', 'copy', 'ejs'], function() {
    gulp.watch('src/js/**/*.js', ['js']);
    gulp.watch('src/styles/**/*.scss', ['sass']);
    gulp.watch('src/**/*.ejs', ['ejs']);
    gulp.watch(['src/**/*', '!src/js/**/*', '!src/scss/**/*', '!src/**/*.ejs'], ['copy']);
});

gulp.task('default', ['ejs']);
