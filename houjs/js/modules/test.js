define(function(require,exports,modules){

    var modal = require('mods/modal');

    exports.say = function(){
        modal.alert("您当前调用了test.say(),这代表模块调用没问题，对于您自己的业务js代码请放到modules下。");
    };
});