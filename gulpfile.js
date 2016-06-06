var gulp = require('gulp');
var babel = require("gulp-babel");
var watch = require("gulp-watch");
var run = require("run-sequence");
var exec = require("child_process").exec;
//https://nodejs.org/api/domain.html
var domain = require('domain');

const d = domain.create();
//  https://www.npmjs.com/package/minimist
//  https://www.npmjs.com/package/gulp-environment
var argFile = gulp.env.file;
const file = argFile || "index.js";
const cfg = {
    babelCMD : "babel-node ./src/"+ file,
    src : "./src/" + file,
    dest : "./dest",
    watchFiles : "./src/**/*.js"
};

gulp.task("run", (cb) => {
    exec(cfg.babelCMD, {cwd:process.cwd()}, (error, stdout, stderr) => {
        console.log(stdout);
        console.log(stderr);
        cb();
    });
})

gulp.task("build", (cb) => {
    d.run(function() {
        gulp.src(cfg.src)
            .pipe(babel({
                presets: ['es2015']
            }))
            .pipe(gulp.dest(cfg.dest));
        cb();
    });
    d.on('error', (er) => {
        console.error('Caught error!', er);
    });
})

gulp.task('default', () => {
    run("run", "build");
    watch(cfg.watchFiles, function () {
            run("run", "build");
    });
});