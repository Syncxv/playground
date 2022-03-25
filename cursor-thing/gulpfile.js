const gulp = require("gulp");
const browserSync = require("browser-sync");
const autoPrefixer = require("gulp-autoprefixer");
const sass = require("gulp-sass")(require("sass"));
const del = require("del");

gulp.task("default", (done) => {
    gulp.series("serve")(done);
});

gulp.task("serve", (done) => {
    gulp.series("clean", gulp.parallel("sass" /*'js' */, "html"), "browsersync", "watch")(done);
});

gulp.task("sass", () => {
    return gulp
        .src("./src/scss/main.scss")
        .pipe(
            sass({
                includePaths: "node_modules",
            })
        )
        .pipe(autoPrefixer())
        .pipe(gulp.dest("./dist/assets/css/"))
        .pipe(browserSync.stream({ match: "**/*.css" }));
});

gulp.task("html", () => {
    return gulp.src("./src/*.html").pipe(gulp.dest("dist"));
});

gulp.task("browsersync", (done) => {
    browserSync.init({
        server: ["./dist", "./src/static"],
        notify: false,
        ui: false,
        online: false,
        ghostMode: {
            clicks: false,
            forms: false,
            scroll: false,
        },
    });
    done();
});

gulp.task("watch", () => {
    global.isWatching = true;

    gulp.watch("./src/scss/**/*.scss", gulp.series("sass"));
    // gulp.watch("./src/js/**/*.*", gulp.series('js'));
});

gulp.task("clean", () => {
    return del(["./tmp/**/*"], { dot: true });
});
