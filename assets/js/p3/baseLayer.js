/**
 * Created with JetBrains WebStorm.
 * User: liuzhao
 * Date: 13-10-30
 * Time: 下午4:42
 * To change this template use File | Settings | File Templates.
 */
define(function(require, exports, module){
    var Layer=cc.Layer.extend({
        test:function(){
            var ctx=this.context
            $(".container",ctx).css({
                "margin-top":$("header",ctx).height(),
                "margin-bottom":$("footer",ctx).height(),
                "height":$(ctx).height()-$("header",ctx).height()-$("footer",ctx).height()
            })
            //在网页端
            if (!navigator.userAgent.match(/mobile/i)) {
                $("body").css({
                    "overflow":"scroll"
                })
                $(".container",ctx).css({
                    "margin-bottom":$("footer",ctx).height()+100
                })
            }
        },
        onEnter:function(){
            this._super()
            this.getParent().context.append(this.context)
            this.test()
        },
        //结束
        onExit:function(){
            this._super()
            this.context.remove()
        }

    })
    var Scene=cc.Scene.extend({
        context:$("body")
    })
    module.exports.Layer=Layer
    module.exports.Scene=Scene
});
