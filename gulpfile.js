var elixir = require('laravel-elixir');
 elixir = require('laravel-elixir');   
var connectPHP = require('gulp-connect-php');
var BrowserSync = require('laravel-elixir-browsersync2');
/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir.config.sourcemaps = false;
BrowserSync.init();  
elixir(function(mix) {
    connectPHP.server({
        base: './public',
        hostname: '0.0.0.0',
        port: 8000
    });
    mix.sass('app.scss')
    mix.BrowserSync(
    {
        proxy: 'localhost:8000',
        logPrefix       : "Laravel Eixir Iniciando BrowserSync",
        logConnections  : false,
        reloadOnRestart : false,
        notify          : true
    });
});