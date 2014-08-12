/**
 * Created with JetBrains WebStorm.
 * User: liuzhao
 * Date: 13-10-30
 * Time: 下午4:42
 * To change this template use File | Settings | File Templates.
 */
define(function(require, exports, module){
    //选择题
    cc.Choice=cc.Div.extend({
        tpl:require("./cc.choice.tpl"),
        data:null,
        init:function(data,tpl){
            this.data=data||{
                "title": "<p>对还是错</p>",
                "options": [{
                    "text": "对",
                    "isRight": 1
                }, {
                    "text": "错",
                    "isRight": 0
                }]
            }
            if(!this.data){cc.log("not data");return;}
            //解析数据 初始化题目
            this.context=$("<div>"+ejs.render(tpl||this.tpl,this.data)+"</div>")
            this.state={}
            this.initAnimate()
            //添加按钮
            this.initMenu()
        },
        initAnimate:function(){
            var ctx=this.context
            $(".answer",ctx).hide()
        },
        //定义按钮可选
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
        //设置标号
        setTitleNum:function(num){
            $(".choice .title",this.context).prepend(num+".")
        },
        //废除按钮
        disable:function(){
            $(".module li",this.context).each(function(i){
                $(this).off()
            })
        },
        //显示答案
        showAnswer:function(disable){
            disable&&this.disable()
//            this.state.select
            var the=this
            $(".answer",the.context).show()
            $(".answer li",the.context).eq(0).find("font").text(cc.Word[this.state.select])

            for(var i=0;i<this.data.options.length;i++){
                if(this.data.options[i].isRight){
                    $(".answer li",the.context).eq(1).text("正确答案："+cc.Word[i])
                    if(i==this.state.select){
                        $(".module li",the.context).eq(this.state.select).addClass("ok")
                        $(".answer li",the.context).eq(0).find("span").text("√")
                    }else{
                        $(".module li",the.context).eq(i).addClass("ok")
                        $(".module li",the.context).eq(this.state.select).addClass("error")
                        $(".answer li",the.context).eq(0).find("span").text("×")
                    }

                }
            }

        }

    })
    cc.Choice.create=function(data,tpl){
        var sprite=new cc.Choice
        sprite.init(data,tpl)
        return sprite
    }
});
