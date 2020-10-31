const { dest, src, parallel, watch } = require("gulp");

const gulpSass = require("gulp-sass");
const autoprefixCSS = require("gulp-autoprefixer");
const minifyCss = require("gulp-minify-css");

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

exports.default = function() {
    watch(["src/scss/*.scss", "src/js/*.js"], parallel(sass, js));
}