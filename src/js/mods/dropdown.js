define(function(require,exports,modules){

    exports.init = function(cls){
        $('.'+cls).dropdown({
            on: 'hover'
        });
    }
});