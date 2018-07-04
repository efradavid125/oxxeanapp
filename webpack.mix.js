let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/assets/js/app.js', 'public/js')
   .sass('resources/assets/sass/app.scss', 'public/css');


mix.copy('resources/assets/bower_components/bootstrap/dist/css/bootstrap.min.css', 'public/css/bootstrap.min.css');
mix.copy('resources/assets/bower_components/font-awesome/css/font-awesome.min.css','public/css/font-awesome.min.css');


mix.copy('','');
mix.copy('','');
mix.copy('','');
mix.copy('','');
mix.copy('','');
mix.copy('','');
mix.copy('','');
mix.copy('','');
mix.copy('','');
mix.copy('','');
mix.copy('','');

/*
mix.styles([
    'public/css/vendor/normalize.css',
    'public/css/vendor/videojs.css'
], 'public/css/all.css');

*/

