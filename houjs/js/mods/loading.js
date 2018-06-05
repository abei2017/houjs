/**
 * 加载显示
 * 该模块主要用于ajax请求的时候
 * @author abei<abei@nai8.me>
 * @link https://nai8.me/lang-6.html
 */
define(function(require,exports,modules){

    var defaultOptions = {
        inPage:true,// true-当前页面 false-父框架
        title:''// 默认不显示，如果有值则显示。
    };

    /**
     * 展示加载
     * @param options object 默认为 defaultOptions
     */
    exports.show = function(options){
        var type = typeof options === 'object' ? options : {};
        type = $.extend({}, defaultOptions, type);
        type.active = true;
        exports.renderLoading(type);
    };

    /**
     * 隐藏加载
     */
    exports.hide = function(){
        var type = typeof options === 'object' ? options : {};
        type = $.extend({}, defaultOptions, type);
        exports.deleteLoading(type);
    };

    /**
     * 渲染加载
     * @param options
     */
    exports.renderLoading = function(options){
        var html = '<div id="hou-loading" class="ui text '+ (options.active === true ? 'active' : '') + ' loader">'+ (options.title ? options.title : '') +'</div>';
        if(options.inPage === true){
            if($('#hou-loading').length === 0){
                $('body').append(html);
            }
        }else{
            if($('#hou-loading',parent.document).length === 0){
                $('body',parent.document).append(html);
            }
        }
    };

    /**
     * 删除加载
     * @param options
     */
    exports.deleteLoading = function(options){
        var type = typeof options === 'object' ? options : {};
        type = $.extend({}, defaultOptions, type);

        if(type.inPage === true){
            $('#hou-loading').remove();
        }else{
            $('#hou-loading',parent.document).remove();
        }
    }
});