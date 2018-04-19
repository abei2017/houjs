define(function(require, exports) {

    exports.init = function(cls){
        $('.'+cls+" .item").tab();
    }
});