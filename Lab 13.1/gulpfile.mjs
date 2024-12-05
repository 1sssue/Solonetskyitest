// Імпорт модулів
import gulp from 'gulp';
import sass from 'gulp-sass';
import dartSass from 'sass'; // Використовуємо dart-sass
import cssnano from 'gulp-cssnano';
import rename from 'gulp-rename';
import { deleteAsync as del } from 'del';
import browserSync from 'browser-sync';

// Ініціалізація browserSync
const bs = browserSync.create();

// Шляхи до файлів
const paths = {
    styles: {
        src: 'src/scss/**/*.scss',
        dest: 'dist/css/',
    },
    images: {
        src: 'src/images/**/*',  // Шлях до зображень
    },
    html: {
        src: 'src/**/*.html',
        dest: 'dist/',
    },
};

// Очищення папки dist
export const clean = () => del(['dist']);

// Компіляція SCSS
const sassCompiler = sass(dartSass);

export const styles = () =>
    gulp
        .src(paths.styles.src)
        .pipe(sassCompiler().on('error', sassCompiler.logError))
        .pipe(cssnano())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest(paths.styles.dest))
        .pipe(bs.stream());

// Копіювання HTML
export const html = () =>
    gulp.src(paths.html.src).pipe(gulp.dest(paths.html.dest)).pipe(bs.stream());

// Автоматичне оновлення браузера
export const watch = () => {
    bs.init({
        server: {
            baseDir: 'dist',  // Основна директорія для сервера
            routes: {         // Додаємо маршрути для віддачі зображень
                '/images': 'src/images'  // Шлях до зображень з папки src
            }
        },
    });
    gulp.watch(paths.styles.src, styles);
    gulp.watch(paths.html.src, html).on('change', bs.reload);
};

// Основні таски
export const build = gulp.series(clean, gulp.parallel(styles, html));
export const dev = gulp.series(build, watch);

// Дефолтний таск
export default dev;
