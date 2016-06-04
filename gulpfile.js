var gulp = require('gulp');
var babel = require("gulp-babel");
var watch = require("gulp-watch");
var run = require("run-sequence");
var exec = require("child_process").exec;

const cfg = {
    babelCMD : "babel-node ./src/index.js",
    src : "./src/index.js",
    dest : "./dest",
    watchFiles : "./src/**/*.js"

};
gulp.task("run", (cb) => {
    exec(cfg.babelCMD, {cwd:process.cwd()}, (error, stdout, stderr) => {
        console.log(stdout);
        console.log(stderr);
        cb();
    });
});

gulp.task("build", (cb) => {
    gulp.src(cfg.src)
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest(cfg.dest));
    cb();
})

gulp.task('default', () => {
    watch(cfg.watchFiles, function () {
        run("run", "build");
    });
});