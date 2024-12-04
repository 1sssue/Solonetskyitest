const gulp = require('gulp');
const concat = require('gulp-concat');
const cssnano = require('gulp-cssnano');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const del = require('del');
const browserSync = require('browser-sync').create();

// Шляхи до файлів
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
    },
    html: {
        src: 'src/*.html',
        dest: 'dist/'
    }
};

// Очищення папки dist
function clean() {
    return del(['dist']);
}

// Компіляція SCSS у CSS
function styles() {
    return gulp.src(paths.styles.src)
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('styles.css'))
        .pipe(cssnano())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest(paths.styles.dest))
        .pipe(browserSync.stream());
}

// Оптимізація JavaScript
function scripts() {
    return gulp.src(paths.scripts.src)
        .pipe(concat('scripts.js'))
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest(paths.scripts.dest))
        .pipe(browserSync.stream());
}

// Оптимізація зображень
function images() {
    return gulp.src(paths.images.src)
        .pipe(imagemin())
        .pipe(gulp.dest(paths.images.dest));
}

// Копіювання HTML
function html() {
    return gulp.src(paths.html.src)
        .pipe(gulp.dest(paths.html.dest))
        .pipe(browserSync.stream());
}

// Автоматичне оновлення файлів
function watchFiles() {
    browserSync.init({
        server: {
            baseDir: 'dist'
        }
    });
    gulp.watch(paths.styles.src, styles);
    gulp.watch(paths.scripts.src, scripts);
    gulp.watch(paths.images.src, images);
    gulp.watch(paths.html.src, html).on('change', browserSync.reload);
}

// Таски
const build = gulp.series(clean, gulp.parallel(styles, scripts, images, html));
const watch = gulp.series(build, watchFiles);

// Експорт
exports.clean = clean;
exports.styles = styles;
exports.scripts = scripts;
exports.images = images;
exports.html = html;
exports.watch = watch;
exports.default = build;
