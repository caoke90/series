/**
 * Created with JetBrains WebStorm.
 * User: liuzhao
 * Date: 13-10-30
 * Time: 下午4:42
 * To change this template use File | Settings | File Templates.
 */
define(function(require, exports, module){
    cc.Word=["A","B","C","D","E","F","G","H"]
    cc.Topic=cc.Node.extend({
        state:{},
        onEnter:function(){
            this._super()
            var ctx=this.context
            $("header",ctx).children().appendTo(
                $("header",this.getParent().context)
            ).attr("_id",this._id)
            $(".container",ctx).children().appendTo(
                $(".container",this.getParent().context)
            ).attr("_id",this._id)
            $("footer",ctx).children().appendTo(
                $("footer",this.getParent().context)
            ).attr("_id",this._id)

            this.context=$("[_id='"+this._id+"']",this.getParent().context)
        },
        onExit:function(){
            this._super()
            this.context.remove()
        }
    })
    cc.Choice=cc.Topic.extend({
        tpl:require("./choice.tpl"),
        data:{
            "type": 1,
            "title": "这是单项选择。对还是错",
            "options": [{
                "text": "对",
                "isRight": 1
            }, {
                "text": "错",
                "isRight": 0
            }]
        },
        init:function(data,tpl){
            if(!data){cc.log("not data");return;}
            this.data=data||this.data
            //解析数据 初始化题目
            this.context=$(ejs.render(tpl||this.tpl,this.data))

            this.initAnimate()
            //添加按钮
            this.initMenu()
        },
        initAnimate:function(){
            var ctx=this.context
            $(".answer",ctx).hide()
        },
        initMenu:function(){
            var ctx=this.context
            var prev=null
            var the=this
            $(".module li",ctx).each(function(i){
                $(this).on("click",function(){
                    prev&&prev.removeClass("on")
                    prev=$(this).addClass("on")
                    the.state.select=i
                })
            })
//            $(".module li",ctx).eq(1).click()
        },
        showAnswer:function(){
//            this.state.select
            var ctx=this.context
            $(".answer",ctx).show()
            $(".answer li",ctx).eq(0).find("font").text(cc.Word[this.state.select])
            for(var i=0;i<this.data.options.length;i++){
                if(this.data.options[i].isRight){
                    $(".answer li",ctx).eq(1).text("正确答案："+cc.Word[i])
                    if(i==this.state.select){
                        $(".answer li",ctx).eq(0).find("span").removeClass().addClass("ok")
                    }else{
                        $(".answer li",ctx).eq(0).find("span").removeClass().addClass("error")
                    }
                }
            }
            var the=this
            setTimeout(function(){
                the.removeFromParent()
            },3000)

        }

    })
    cc.Choice.create=function(data,tpl){
        var sprite=new cc.Choice
        sprite.init(data,tpl)
        return sprite
    }

});
