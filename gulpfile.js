const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const jshint = require('gulp-jshint');
const pump = require('pump');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const plumber = require('gulp-plumber');
const gutil = require('gulp-util');
const reload = browserSync.reload;

let onError = function (err) {
    console.log('An error occurred:', gutil.colors.magenta(err.message));
    gutil.beep();
    this.emit('end');
};

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./dist"
        }
    });
});


// Compile SCSS files and minify CSS files
gulp.task('sass', function() {
    return gulp.src('src/scss/**/*.scss')
    .pipe(plumber({ errorHandler: onError }))
    .pipe(sass({outputStyle: 'expanded'}))
    .pipe(gulp.dest('src/css'))
    .pipe(cleanCSS()) 
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('dist/css'))
});

// Concat and uglify JavaScript files
gulp.task('concat', function() {
    return gulp.src('src/js/*.js')
    .pipe(plumber({ errorHandler: onError }))
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(concat('script.js'))
    .pipe(gulp.dest('dist/js'));
});

gulp.task('compress', function(cb) {
    pump([
        gulp.src('dist/js/script.js'),
        uglify(),
        rename({suffix: '.min'}),
        gulp.dest('dist/js')
    ], cb);
});

// Optimize images
gulp.task('images', function() {
    return gulp.src('src/img/**/*.{gif,jpg,png,svg}')
    .pipe(imagemin({optimizationLevel: 7, progressive: true}))
    .pipe(gulp.dest('dist/img'));
});


gulp.task("copy", function () {
  gulp.src(["src/**/*.{html,php}"])
      .pipe(gulp.dest("dist"));
});

 

// Watch task
gulp.task('watch', function() {
    gulp.watch('src/scss/**/*.scss', ['sass', reload]);
    gulp.watch('src/js/*.js', ['concat', reload]);
    gulp.watch('dist/js/*.js', ['compress']);
    gulp.watch('src/img/*', ['images']);
    gulp.watch('src/*.{html,php}', ['copy', reload]);
})
  

 


// Default task
gulp.task('default', ['sass', 'concat', 'compress', 'images', 'watch', 'copy', 'browser-sync']);
  
// Build tast (Netlify)
gulp.task('build', ['sass', 'concat', 'compress', 'images', 'copy']);
  