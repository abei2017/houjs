define(function(require,exports,modules){

    /**
     * 刷新iframe
     */
    exports.reloadIFrame = function(){
        $('._reload_iframe').click(function(){
            var iframe = $('#IFrame');
            iframe.prop('src',iframe.prop('src'));
        });
    };

    exports.optionSide = function(){
        $('._option_side').click(function(){
            var side = $('#hou-side');
            if(side.css('display') === 'block'){
                side.hide();
                $('.hou-body').css('left',0);
                $('.hou-page-nav').css('left',0);
                $('.hou-logo').css('color','#333');
            }else{
                side.show();
                $('.hou-body').css('left',220);
                $('.hou-page-nav').css('left',220);
                $('.hou-logo').css('color','rgba(255, 255, 255, .8)');
            }

        });
    }
});