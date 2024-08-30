const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();

// Déclaration de la tâche 'style'
function style() {
    return gulp.src('scss/**/*.scss') // Chemin vers les fichiers SCSS
        .pipe(sass().on('error', sass.logError)) // Compilation en CSS
        .pipe(gulp.dest('./styles')) // Destination des fichiers CSS
        .pipe(browserSync.stream()); // Injection CSS dans le navigateur
}

// Déclaration de la tâche 'watch'
function watch() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
    gulp.watch('./scss/**/*.scss', style); // Surveille les changements dans les fichiers SCSS
    gulp.watch('./index.html').on('change', browserSync.reload); // Recharge le navigateur sur les changements HTML
    gulp.watch('./main.js').on('change', browserSync.reload); // Recharge le navigateur sur les changements JS
}

// Exportation des tâches
exports.style = style;
exports.watch = watch;