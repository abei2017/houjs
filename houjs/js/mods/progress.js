define(function(require, exports) {

    /**
     * 初始化进度条
     * @param ele string 支持id或类
     * 如果传入一个ID则格式为id:ID名,如果是类则cls:类名
     */
    exports.init = function(ele){
        var arr = ele.split(":");
        if(arr[0] === 'id'){
            $('#'+arr[1]).progress();
        }else if(arr[0] === 'cls'){
            $('.'+arr[1]).each(function(key,val){
                $(this).progress();
            })
        }
    }
});