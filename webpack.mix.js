const mix = require('laravel-mix');

let postCssPlugins = [
    require('postcss-import'),
    require('tailwindcss'),
    require('postcss-color-function'),
    require('postcss-nested'),
    require('autoprefixer')
];

if (mix.inProduction()) {
    mix.version();
}

mix.setPublicPath('./')
    .copyDirectory('./assets/src/fonts', './assets/dist/fonts')
    .js('./assets/src/js/app.js', './assets/dist/js')
    .postCss('./assets/src/css/style.css', './assets/dist/css', postCssPlugins)
    .postCss('./assets/src/css/vendor/icofont.css', './assets/dist/css/vendor', postCssPlugins)
    .options({
        processCssUrls: false
    })
    .browserSync({
        proxy: '/', //replace with your url
        files: [
            './layouts/**/*.htm',
            './pages/**/*.htm',
            './partials/**/*.htm',
            './assets/dist/js/app.js',
            './assets/dist/css/style.css'
        ]
    })
    .options({
        terser: {
          extractComments: false,
        }
    });