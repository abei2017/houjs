/**
 * 弹出框
 * 该接口是对semantic ui的模型进行进一步封装。
 *
 * @author abei<abei@nai8.me>
 * @link https://github.com/abei2017/hou-admin
 * @License MIT
 */
define(function(require,exports,modules){

    /**
     * modal的默认配置参数
     * @type {{inPage: boolean}}
     */
    var defaultOptions = {
        inPage:true,
        title:'',
        okTxt:'确定',
        denyTxt:'取消',
        size:'mini',
        scrolling:false,
        url:false,
        closeIcon:false,
        closable:true,
        opacity:0.45,
        msgStyle:"text-align:center;color:#eeeeee;background:#222222;"
    };

    /**
     * 弹出一个提示信息
     * 该方法没有任何回调函数，仅仅作为警告使用。
     * @param msg
     * @param options
     */
    exports.alert = function(msg,options){
        var type = typeof options === 'object' ? options : {};
        type = $.extend({}, defaultOptions, type);

        var _id = "ID-ALERT-" + (new Date() - 0); // Date.now()
        var html = "<div class='ui " + type.size + " modal' id='" + _id + "'>";
        html += '<i class="close icon"></i>';
        html += exports.renderHeader((type.title ? type.title : '小提示'));
        html += exports.renderContent(msg,type);
        html += exports.renderOptions(false);
        html += "</div>";

        exports.initModalContainer(type.inPage).append(html);
        var win = exports.getWindowsObj(type.inPage);

        win.$('#'+_id).modal({
            closable:type.closable,
            dimmerSettings:{
                opacity:type.opacity
            },
            onHidden:function(){
                win.$('#'+_id).remove();
            }
        }).modal('show');
    };

    /**
     * 弹出一个tip
     * 该函数有一个回调参数，当然你也可以不写。
     * @param msg
     * @param options
     * @param func
     */
    exports.msg = function(msg,options,func){
        var type = typeof options === 'object' ? options : {};
        defaultOptions.opacity = 0;
        type = $.extend({}, defaultOptions, type);

        var _id = "ID-MSG-" + (new Date() - 0); // Date.now()
        var html = "<div class='ui " + type.size + " modal' id='" + _id + "'>";
        html += exports.renderContent(msg,type,type.msgStyle);
        html += "</div>";

        exports.initModalContainer(type.inPage).append(html);
        var win = exports.getWindowsObj(type.inPage);

        win.$('#'+_id).modal({
            closable:false,
            dimmerSettings:{
                opacity:type.opacity
            },
            onHidden:function(){
                win.$('#'+_id).remove();
            }
        }).modal('show');

        setTimeout(function(){
            win.$('#'+_id).modal('hide');

            if(typeof(func) === "function"){
                func();
            }
        },2500);
    };

    /**
     * confirm对话框
     * @param msg 对话框信息
     * @param options 参数配置
     * @param ok 点击确定按钮后的回调
     * @param deny 点击取消按钮后的回调
     */
    exports.confirm = function(msg,options,ok,deny){
        var type = typeof options === 'object' ? options : {};
        type = $.extend({}, defaultOptions, type);

        var _id = "ID-CONFIRM-" + (new Date() - 0); // Date.now()
        var html = "<div class='ui " + type.size + " modal' id='" + _id + "'>";
        html += exports.renderHeader("系统提示");
        html += exports.renderContent(msg,type);
        html += exports.renderOptions(type);
        html += "</div>";

        exports.initModalContainer(type.inPage).append(html);

        var win = exports.getWindowsObj(type.inPage);
        win.$('#'+_id).modal({
            closable:false,
            dimmerSettings:{
                opacity:type.opacity
            },
            onHidden:function(){
                win.$('#'+_id).remove();
            },
            onApprove:function(ele){
                if(typeof(ok) === "function"){
                    return ok(ele,this);
                }

                return true;
            },
            onDeny:function(ele){
                if(typeof(deny) === "function"){
                    return deny(ele,this);
                }

                return true;
            }
        }).modal('show');
    };

    /**
     * 创建一个带有iframe的dialog
     */
    exports.iframe = function(url,options,ok,deny){
        var type = typeof options === 'object' ? options : {};
        type = $.extend({}, defaultOptions, type);

        var _id = "ID-IFRAME-" + (new Date() - 0); // Date.now()
        var html = "<div class='ui " + type.size + " modal' id='" + _id + "'>";

        if(type.closeIcon === true){
            html += '<i class="close icon"></i>';
        }

        if(type.title){
            html += exports.renderHeader(type.title);
        }

        html += exports.renderUrl(url,type);
        html += "</div>";

        exports.initModalContainer(type.inPage).append(html);

        var win = exports.getWindowsObj(type.inPage);
        win.$('#'+_id).modal({
            closable:false,
            dimmerSettings:{
                opacity:type.opacity
            },
            onHidden:function(){
                win.$('#'+_id).remove();
            },
            onApprove:function(ele){
                if(typeof(ok) === "function"){
                    return ok(ele,this);
                }

                return true;
            },
            onDeny:function(ele){
                if(typeof(deny) === "function"){
                    return deny(ele,this);
                }

                return true;
            }
        }).modal('show');
    };

    /**
     * 将modal代码插入到body内
     */
    exports.append = function(){

    };

    /**
     * 渲染头部
     * @param title
     * @return {string}
     */
    exports.renderHeader = function(title){
        if(title === false){
            return '';
        }
        return '<div class="header">' + title + '</div>';
    };

    exports.renderContent = function(content,options,style){
        style = typeof style !== 'undefined' ?  style : '';
        return "<div class='" + (options.scrolling === true ? 'scrolling ' : '') + "content' style='"+style+"'>" + content + "</div>";
    };

    /**
     * 渲染操作区域
     */
    exports.renderOptions = function(options){
        options = typeof options !== 'undefined' ?  options : false;
        if(options === false){
            return "";
        }

        return '<div class="actions">\n' +
            (options.denyTxt ? '<div class="ui gray deny basic tiny button">\n'+options.denyTxt+'</div>' : '') +
            (options.okTxt ? '<div class="ui green ok basic tiny button">\n'+options.okTxt+'</div>' : '') +
            '  </div>';
    };

    exports.renderUrl = function(url,options){
        return "<div class='content'>" +
            "<iframe scrolling='auto' width='100%' height='100%' allowtransparency='true' frameborder='0' src='" +url+ "' ></iframe>" +
            "</div>";
    };

    /**
     * 初始化modal所在容器
     *
     * @param inPage
     * @return {*|jQuery|HTMLElement}
     */
    exports.initModalContainer = function(inPage){
        var modals;

        if(inPage === true){
            if($('#hou-modals').length === 0){
                $('body').append("<div id='hou-modals'></div>");
            }
            modals = $('#hou-modals');
        }else{
            if($('#hou-modals',parent.document).length === 0){
                $('body',parent.document).append("<div id='hou-modals'></div>");
            }
            modals = $('#hou-modals',parent.document);
        }

        return modals;
    };

    exports.getWindowsObj = function(inPage){
        return inPage === true ? window : window.parent;
    };
});