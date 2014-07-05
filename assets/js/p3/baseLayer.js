/**
 * Created with JetBrains WebStorm.
 * User: liuzhao
 * Date: 13-10-30
 * Time: 下午4:42
 * To change this template use File | Settings | File Templates.
 */
define(function(require, exports, module){
    var Layer=cc.Layer.extend({
      

    })
    var Scene=cc.Scene.extend({
        context:$("body")
    })
    module.exports.Layer=Layer
    module.exports.Scene=Scene
});
