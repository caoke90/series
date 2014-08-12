/**
 * Created with JetBrains WebStorm.
 * User: liuzhao
 * Date: 13-10-30
 * Time: 下午4:42
 * To change this template use File | Settings | File Templates.
 */
define(function(require, exports, module){
    cc.Word=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
    require("../cc.Read")
    require("./cc.Choice")


    var Layer2=cc.Div.extend({
        tpl:require("./layer2.tpl"),
        //这里不能赋值对象或者数组
        state:null,
        data:null,
        pageArr:null,
        index:0,
        init:function(data,tpl){
            var the = this;
            this._super()
            //数据
            this.data=data||{
                "content": "<p>单词练习和翻译题只能选一个 对还是错</p>",
                "topics": [{
                    "title": "<p>对还是错</p>",
                    "options": [{
                        "text": "对",
                        "isRight": 1
                    }, {
                        "text": "错",
                        "isRight": 0
                    }]
                }]
            }
            this.context=$("<div>"+ejs.render(tpl||this.tpl,this.data)+"</div>")
            //添加页面元素
            for(var i=0;i<this.data.topics.length;i++){
                var sprite=cc.Choice.create(this.data.topics[i])
                this.addChild(sprite)
                sprite.setTitleNum(i+1)
            }
            this.pageArr=this.getChildren()
            //状态
            this.state={replaying:true}

            //初始化
            this.initMenu();

            this.jumpto(this.index)

        },
        initMenu:function(){
            var the=this;
            $(".choice_content .plus",the.context).on("click",function(){
                $(".choice_content .show",the.context).show()
                $(".choice_content .hide",the.context).hide()
            })
            $(".choice_content .jq",the.context).on("click",function(){
                $(".choice_content .show",the.context).hide()
                $(".choice_content .hide",the.context).show()
            }).click()

            $(".page .prev",the.context).on("click",function(){
                //如果第一页
                if(the.index==0)return;
                the.jumpto(the.index-1)
            })
            $(".page .next",the.context).on("click",function(){
                //如果最后一页
                if(the.index==the._children.length-1)return;
                the.jumpto(the.index+1)
            })
            $(".ckda",the.context).on("click",function(){
                the.showAnswer(true)
                the.jumpto(0)
            }).hide()
            $(".cxdt",the.context).on("click",function(){
                the.replay()
            }).hide()
        },
        onEnter:function(){
            this._super()
            this.initPage()
        },
        //页面初始化
        initPage:function(){
            for(var i=0;i<this._children.length;i++){
                this._children[i].context.hide()
            }
            this._children[this.index].context.show()
        },
        //重新开始
        replay:function(){
            var parent=this.getParent()
            this.removeFromParent()

            var layer= Layer2.create(this.data)
            parent.addChild(layer)
        },
        //显示答案
        showAnswer:function(disable){
            var the=this
            the.state.replaying=false
            $(this.pageArr).each(function(k,v){
                v.showAnswer(disable)
            })
        },
        //跳到页面
        jumpto:function(index){
            this.pageArr[this.index].context.hide()
            this.index=index;
            if (this.index < 0){
                this.index += this.pageArr.length;
            }else{
                this.index = this.index % this.pageArr.length;
            }
            this.pageArr[this.index].context.show()
            $(".page .text",this.context).text((this.index+1)+"/"+this.pageArr.length)
            this.last();
        },
        //判断是否最后一页
        last:function(){
            var the=this
            if(the.index==the.pageArr.length-1){
                if(this.state.replaying){/*回答中*/
                    $(".ckda",the.context).show()
                    $(".cxdt",the.context).hide()
                }else{
                    $(".ckda",the.context).hide()
                    $(".cxdt",the.context).show()
                }
            }else{
                $(".ckda",the.context).hide()
                $(".cxdt",the.context).hide()
            }
        },
        //上一页
        prev:function(){
            this.jumpto(this.index-1)
        },
        //下一页
        next:function(refresh){
            this.jumpto(this.index+1)
        }
    })
    Layer2.create=function(data,tpl){
        var sprite=new Layer2
        sprite.init(data,tpl)
        return sprite
    }

    //每个scene对应一个页面
    var Scene=cc.Div.extend({
        tpl:require("./MyScene.tpl"),
        //这里不能赋值对象或者数组
        state:null,
        data:null,
        index:0,
        init:function(data,tpl){
            this._super()
            this.data=data
            this.textSelect=[]
            if(this.data.lecture){
                var sprite=cc.Read.create(this.data.lecture)
                this.addChild(sprite)
                this.textSelect.push("讲义")
            }
            if(this.data.practice){
                var sprite=Layer2.create(this.data.practice.trans[0])
                this.addChild(sprite)
                this.textSelect.push("习题")
            }
            this.context=$("<div>"+ejs.render(tpl||this.tpl,this)+"</div>")
            this.initMenu()
        },
        initMenu:function(){
            var the=this
            $(".nav .title li",the.context).eq(the.index).addClass("on")
            $(".nav .title li",the.context).each(function(i){
                $(this).on("click",function(){
                    if(i>=the._children.length){cc.log("无页面");return;}
                    $(".nav .title li",the.context).eq(the.index).removeClass("on")
                    $(".nav .title li",the.context).eq(i).addClass("on")
                    the.jumpto(i);
                    the._children[0].pauseVideo();//切换的时候，关闭未播放完的声音
                })
            })
        },
        jumpto:function(index){
            this._children[this.index].context.hide()
            this.index=index;
            this._children[this.index].context.show()
        },
        onEnter:function(){
            this._super()
            this.initPage()
            this.afterHtml()
        },
        //页面初始化
        initPage:function(){
            for(var i=0;i<this._children.length;i++){
                this._children[i].context.hide()
            }
            this._children[this.index].context.show()
        },
        afterHtml:function(){
            var ctx=this.context
            $(".container",ctx).css({
                "margin-top":$("header",ctx).height()
//                "height":$(ctx).height()-$("header",ctx).height()-$("footer",ctx).height()
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
        }
    })
    Scene.create=function(data,tpl){
        var sprite=new Scene
        sprite.init(data,tpl)
        return sprite
    }
    module.exports=Scene
});
