import gulp from 'gulp';
import concat from 'gulp-concat';
import cssnano from 'gulp-cssnano';
import sass from 'gulp-sass';
import * as del from 'del';
import rename from 'gulp-rename';
import uglify from 'gulp-uglify';
import browserSync from 'browser-sync';

// Для динамічного імпорту gulp-imagemin, оскільки він є ES Module
const imagemin = await import('gulp-imagemin').then(module => module.default);

const paths = {
    styles: {
        src: 'src/scss/**/*.scss',
        dest: 'dist/css/'
    },
    scripts: {
        src: 'src/js/**/*.js',
        dest: 'dist/js/'
    },
    images: {
        src: 'src/images/**/*',
        dest: 'dist/images/'
    }
};

// Задачі Gulp (Tasks)
function clean() {
    return del(['dist']);
}

function styles() {
    return gulp.src(paths.styles.src)
        .pipe(sass().on('error', sass.logError))
        .pipe(cssnano())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest(paths.styles.dest))
        .pipe(browserSync.stream());
}

function scripts() {
    return gulp.src(paths.scripts.src)
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest(paths.scripts.dest))
        .pipe(browserSync.stream());
}

function images() {
    return gulp.src(paths.images.src)
        .pipe(imagemin())
        .pipe(gulp.dest(paths.images.dest));
}

function watch() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
    gulp.watch(paths.styles.src, styles);
    gulp.watch(paths.scripts.src, scripts);
    gulp.watch(paths.images.src, images);
    gulp.watch('./*.html').on('change', browserSync.reload);
}

exports.clean = clean;
exports.styles = styles;
exports.scripts = scripts;
exports.images = images;
exports.watch = watch;
exports.default = gulp.series(clean, gulp.parallel(styles, scripts, images), watch);
