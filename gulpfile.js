const { dest, src, parallel, watch } = require("gulp");

const gulpSass = require("gulp-sass");
const autoprefixCSS = require("gulp-autoprefixer");
const minifyCss = require("gulp-minify-css");

const imagemin = require("gulp-imagemin");

const minifyJS = require("gulp-minify");

function sass() {
    return src("./src/scss/*.scss")
        .pipe(gulpSass())
        .pipe(autoprefixCSS())
        .pipe(minifyCss())
        .pipe(dest("./assets/css/"));
}

function js() {
    return src("./src/js/*.js")
        .pipe(minifyJS())
        .pipe(dest("./assets/js/"));
}

function img() {
    return src("./src/img/*")
        .pipe(imagemin())
        .pipe(dest("./assets/img"));
    }

exports.default = function() {
    watch(["src/scss/*.scss", "src/js/*.js", "src/img/*"], parallel(sass, js, img));
}