/**
 * 配置requireJs
 */
define('jquery',function(){
    return jQuery;
});

requirejs.config({
    baseUrl: '/houjs/js/',
    paths: {
        'mods':'mods',
        'libs':'libs',
        'modules':'modules'
    }
});



