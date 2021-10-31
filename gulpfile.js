// Deklarerar variabler för paket
const {src, dest, parallel, series, watch} = require('gulp');
const concat = require('gulp-concat');
const terser = require('gulp-terser');
const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');
const browserSync = require('browser-sync').create();
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass')(require('sass'));
const babel = require('gulp-babel');

//sökvägar
const files = {
    htmlPath: "src/**/*.html",
    cssPath: "src/css/*.css",
    sassPath: "src/sass/*.scss",
    jsPath: "src/js/*.js",
    imagePath: "src/images/*"
}

//HTML task kopiera till pub
function copyHTML() {
    return src(files.htmlPath)
    .pipe(dest('pub'));
}

//sass task - kompilerar till css, läggs i pub
function sassTask() {
    return src(files.sassPath)
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(sourcemaps.write('./maps'))
    .pipe(dest('pub/css')
    );
}

//js-task
function jsTask() {
    return src(files.jsPath)
    .pipe(sourcemaps.init())
    .pipe(babel())//Transpilerar...
    .pipe(concat('main.js'))
    .pipe(terser())
    .pipe(sourcemaps.write('../maps'))
    .pipe(dest('pub/js'));   
}

//image-task
function imageTask() {
    return src(files.imagePath)
    .pipe(imagemin())
    .pipe(dest('pub/images'));    
}

//webp-task kopierar till pub
function webpTask() {
    return src(files.imagePath)
    .pipe(webp())
    .pipe(dest('pub/images'));    
}


//watch task
function watchTask() {
    //skapa webbserver
    browserSync.init({
        server: "./pub"
    });
    //lyssna efter förändringar i sökvägar och kör tasks parallelt - live reload i webbläsaren med skapad webbserver
    watch([files.htmlPath, files.sassPath, files.jsPath, files.imagePath], parallel(copyHTML, sassTask, jsTask, imageTask, webpTask)).on('change', browserSync.reload);
}
//exporterar task-funktioner i en serie
exports.default = series(
    parallel(copyHTML, sassTask, jsTask, imageTask, webpTask),
    watchTask
);
