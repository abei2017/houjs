/**
 * @licence MIT
 */
define(function(require, exports) {

    /**
     * 初始化checkbox功能
     * @param cls checkbox组件类
     */
    exports.checkbox = function (cls) {
        $('.' + cls).checkbox();
    }
});