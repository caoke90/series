/**
 * Created with JetBrains WebStorm.
 * User: liuzhao
 * Date: 13-11-5
 * Time: 上午11:16
 * To change this template use File | Settings | File Templates.
 */
define(function(require, exports, module) {

    exports.strings = function(str) {
        var params = str || document.location.search,
            reg = /(?:^\?|&)(.*?)=(.*?)(?=&|$)/g,
            temp, args = {};
        while((temp = reg.exec(params)) != null) args[temp[1]] = decodeURIComponent(temp[2]);
        return args;
    };

    exports.string = function(key) {
        return (document.location.search.match(new RegExp("(?:^\\?|&)"+key+"=(.*?)(?=&|$)"))||['',null])[1];
    };
});
