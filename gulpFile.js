let gulp = require("gulp");

let watch = require("gulp-watch");
let livereload = require("gulp-livereload");
let rename = require("gulp-rename");

let minHTML = require("gulp-htmlmin");
let cleanCSS = require("gulp-clean-css");
let minJS = require("gulp-minify");

// Dev Path
const devRootPath = "./src/";

// Prod Path
const prodRootPath = "./";
const ProdPath = "./assets/";

// Global Paths
const cssPath = "css/";
const jsPath = "js/";
const imagesPath = "img/";

gulp.task("minifyHTML", ()=>{
    livereload.listen();
    return watch(devRootPath + "*.html")
        .pipe(minHTML({ 
            collapseWhitespace: true,
            html5: true,
            minifyJS: true,
            minifyURLs: true,
            minifyCSS: true,
            removeEmptyElements: true
        }))
        .pipe(gulp.dest(prodRootPath))
        .pipe(livereload(console.log("Watching HTML")));
});

gulp.task("minifyCSS", ()=>{
    return watch(devRootPath + cssPath + "*.css")
        .pipe(cleanCSS({
            compatibility: "ie8"
        }))
        .pipe(rename("style.min.css"))
        .pipe(gulp.dest(ProdPath + cssPath))
        .pipe(livereload(console.log("Watching CSS")));
});

gulp.task("minifyJS", ()=>{
    livereload.listen();
    return watch(devRootPath + jsPath + "*.js")
        .pipe(minJS({
            ext: {
                src: "-debug.js",
                min: ".min.js"
            }
        }))
        .pipe(gulp.dest(ProdPath + jsPath))
        .pipe(livereload(console.log("Watching JS")));
});

gulp.task("default", gulp.parallel("minifyHTML", "minifyCSS", "minifyJS"));