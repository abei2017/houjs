define(function(require, exports) {

    exports.init = function(ele,options){
        var arr = ele.split(":");
        if(arr[0] === 'id'){
            $('#'+arr[1]).popup(options);
        }else if(arr[0] === 'cls'){
            $('.'+arr[1]).popup(options);
        }
    }
});