const gulp = require("gulp");
const minify = require('gulp-minifier');
const watch = require("gulp-watch");
const livereload = require("gulp-livereload");


gulp.task('minify', function () {
    livereload.listen();
    return watch('./src/**/*')
        .pipe(minify({
            minify: true,
            minifyHTML: {
                collapseWhitespace: true,
                conservativeCollapse: true,
            },
            minifyJS: {
                sourceMap: false
            },
            minifyCSS: true,
            getKeptComment: function (content, filePath) {
                var m = content.match(/\/\*![\s\S]*?\*\//img);
                return m && m.join('\n') + '\n' || '';
        }
    })).pipe(gulp.dest("*.js" ? "./assets/" : "./assets/"))
        .pipe(livereload(console.log("Watching files")));
});

gulp.task("default", gulp.parallel("minify"));