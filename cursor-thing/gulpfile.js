const gulp = require('gulp')
const browserSync = require('browser-sync')
const autoPrefixer = require('gulp-autoprefixer')
const sass = require('gulp-sass')(require('sass'))
const del = require('del')
const webpack = require('webpack-stream')
gulp.task('default', done => {
    gulp.series('serve')(done)
})

gulp.task('serve', done => {
    gulp.series('clean', gulp.parallel('sass', 'ts', 'html'), 'browsersync', 'watch')(done)
})

gulp.task('sass', () => {
    return gulp
        .src('./src/scss/main.scss')
        .pipe(
            sass({
                includePaths: 'node_modules'
            })
        )
        .pipe(autoPrefixer())
        .pipe(gulp.dest('./dist/assets/css/'))
        .pipe(browserSync.stream({ match: '**/*.css' }))
})

gulp.task('html', () => {
    return gulp.src('./src/*.html').pipe(gulp.dest('dist'))
})
gulp.task('ts', () => {
    return gulp
        .src(['./src/ts/**/*'])
        .pipe(webpack(require('./webpack.config.js')))
        .pipe(gulp.dest('./dist/assets/js'))
})
gulp.task('browsersync', done => {
    browserSync.init({
        server: ['./dist', './src/static'],
        notify: false,
        ui: false,
        online: false,
        ghostMode: {
            clicks: false,
            forms: false,
            scroll: false
        }
    })
    done()
})

gulp.task('watch', () => {
    global.isWatching = true

    gulp.watch('./src/scss/**/*.scss', gulp.series('sass')).on('change', browserSync.reload)
    gulp.watch('./src/ts/**/*.*', gulp.series('ts')).on('change', browserSync.reload)
    gulp.watch('./src/*.html', gulp.series('html')).on('change', browserSync.reload)
})

gulp.task('clean', () => {
    return del(['./dist/**/*'], { dot: true })
})
