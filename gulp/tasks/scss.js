import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import rename from 'gulp-rename';

import cleanCss from 'gulp-clean-css';
import autoprefixer from 'gulp-autoprefixer';
import groupMediaQueries from 'gulp-group-css-media-queries';

const sass = gulpSass(dartSass);

export const scss = () => {
    return app.gulp.src(app.path.src.scss, {sourcemaps: app.isDev})
         .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
              title: "SCSS",
              message: "Error: <%= error.message %> "
         })))
         .pipe(app.plugins.replace(/@img\//g, '..img/'))
         .pipe(sass({
            outputStyle: 'expanded'
         }))
         .pipe(
            app.plugins.if(
               app.isBuild,
               groupMediaQueries()
            )
         )
         .pipe(
            app.plugins.if(
               app.isBuild,
               autoprefixer({
                  grid: true,
                  overideBrowserslist: ["last 5 versions"],
                  cascade: true,
               })
            )
         )
         //РАСКОМЕНТИРОВАТЬ ЕСЛИ НУЖЕН НЕ СЖАТЫЙ ДУБЛЬ ФАЙЛА СТИЛЕЙ
         .pipe(app.gulp.dest(app.path.build.css))
         .pipe(cleanCss())
         .pipe(rename({
            extname: ".min.css"
         }))
         .pipe(app.gulp.dest(app.path.build.css))
         .pipe(app.plugins.browsersync.stream());
}