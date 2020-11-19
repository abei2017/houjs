/**
 * 弹出框
 * 该接口是对bootstrap的模型进行进一步封装。
 *
 * @author abei<abei@nai8.me>
 * @link https://github.com/abei2017/houjs
 * @License MIT
 * @version 2.0.0
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
        iframeHeight:'300px',

        scene:'warning'
    };

    exports.msg = function(msg,options,func){
        var type = typeof options === 'object' ? options : {};
        type = $.extend({}, defaultOptions, type);

        var _id = "ID-MSG-" + (new Date() - 0); // Date.now()
        var html = "<div class='alert alert-"+type.scene+" fade show shadow rounded' id='" + _id + "' role='alert'>";
        html += msg;
        html += '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>';
        html += "</div>";

        exports.initModalContainer(type.inPage).append(html);

        var win = exports.getWindowsObj(type.inPage);
        win.$('#'+_id).alert();

        setTimeout(function(){
            win.$('#'+_id).alert('close');
            if(typeof(func) === "function"){
                func();
            }
        },2000);
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
        var html = "<div class='modal' tabindex='-1' role='dialog' id='" + _id + "'><div class='modal-dialog modal-dialog-centered'><div class='modal-content'>";
        html += exports.renderHeader("系统提示");
        html += exports.renderContent(msg,type);
        html += exports.renderOptions(type);
        html += "</div></div></div>";

        exports.initModalContainer(type.inPage).append(html);

        var win = exports.getWindowsObj(type.inPage);
        win.$('#'+_id).modal();
    };

    exports.renderHeader = function(title){
        if(title === false){
            return '';
        }
        return '<div class="modal-header"><h5 class="modal-title">' + title + '</h5><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>';
    };

    exports.renderContent = function(content,options,style){
        style = typeof style !== 'undefined' ?  style : '';
        return "<div class='modal-body' style='"+style+"'><p>" + content + "</p></div>";
    };

    exports.renderOptions = function(options){
        options = typeof options !== 'undefined' ?  options : false;
        if(options === false){
            return "";
        }

        return '<div class="modal-footer">\n' +
            (options.denyTxt ? '<button type="button" class="btn btn-secondary" data-dismiss="modal">\n'+options.denyTxt+'</button>' : '') +
            (options.okTxt ? '<button type="button" class="btn btn-primary">\n'+options.okTxt+'</button>' : '') +
            '  </div>';
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