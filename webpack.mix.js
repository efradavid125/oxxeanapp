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

//exports css
mix.copy('resources/assets/bower_components/bootstrap/dist/css/bootstrap.min.css', 'public/css/bootstrap.min.css');
mix.copy('resources/assets/bower_components/font-awesome/css/font-awesome.min.css','public/css/font-awesome.min.css');
mix.copy('resources/assets/bower_components/Ionicons/css/ionicons.min.css','public/css/ionicons.min.css');
mix.copy('resources/assets/dist/css/AdminLTE.min.css','public/css/AdminLTE.min.css');
mix.copy('resources/assets/dist/css/bootstrap-material-design.min.css','public/css/bootstrap-material-design.min.css');
mix.copy('resources/assets/dist/css/ripples.min.css','public/css/ripples.min.css');
mix.copy('resources/assets/dist/css/MaterialAdminLTE.min.css','public/css/MaterialAdminLTE.min.css');
mix.copy('resources/assets/dist/css/skins/all-md-skins.min.css','public/css/skins/all-md-skins.min.css');
mix.copy('resources/assets/plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.min.css','public/plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.min.css');
//-------------------

//exports js
mix.copy('resources/assets/bower_components/jquery/dist/jquery.min.js','public/js/bower_components/jquery/dist/jquery.min.js');
mix.copy('resources/assets/bower_components/jquery-ui/jquery-ui.min.js','public/js/bower_components/jquery-ui/jquery-ui.min.js');
mix.copy('resources/assets/bower_components/bootstrap/dist/js/bootstrap.min.js','public/js/bower_components/bootstrap/dist/js/bootstrap.min.js');
mix.copy('resources/assets/dist/js/material.min.js','public/js/dist/js/material.min.js');
mix.copy('resources/assets/dist/js/ripples.min.js','public/js/dist/js/ripples.min.js');
mix.copy('resources/assets/plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.all.min.js','public/js/plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.all.min.js');
mix.copy('resources/assets/bower_components/jquery-slimscroll/jquery.slimscroll.min.js','public/js/bower_components/jquery-slimscroll/jquery.slimscroll.min.js');
mix.copy('resources/assets/bower_components/fastclick/lib/fastclick.js','public/js/bower_components/fastclick/lib/fastclick.js');
mix.copy('resources/assets/dist/js/adminlte.min.js','public/js/dist/js/adminlte.min.js');
mix.copy('resources/assets/dist/js/pages/dashboard.js','public/js/dist/js/pages/dashboard.js');
mix.copy('resources/assets/dist/js/demo.js','public/js/dist/js/demo.js');
mix.copy('resources/assets/bower_components/moment/min/moment.min.js','public/js/bower_components/bower_components/moment/min/moment.min.js');

//-------------------------
/*
mix.styles([
    'public/css/vendor/normalize.css',
    'public/css/vendor/videojs.css'
], 'public/css/all.css');

*/

