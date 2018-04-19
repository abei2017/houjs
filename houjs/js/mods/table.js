/**
 * @licence MIT
 */
define(function(require,exports,modules){

    var version = 1.0;

    /**
     * 表格排序功能
     * @param cls
     */
    exports.sortData = function(cls) {
        $('.'+cls).tablesort();
    };
});