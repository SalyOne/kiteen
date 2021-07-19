// webpack.mix.js

let mix = require('laravel-mix');


mix.js('src/js/app.js', 'public/dist')
    .sass('src/scss/app.scss', 'public/dist')