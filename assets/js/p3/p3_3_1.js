/**
 * Created with JetBrains WebStorm.
 * User: liuzhao
 * Date: 13-10-30
 * Time: 下午4:42
 * To change this template use File | Settings | File Templates.
 */
define(function(require, exports, module){
    var Layer1=(require("./baseLayer").Layer||cc.Layer).extend({
        tpl:require("./p3_3_1.tpl"),

        data:{
            "list": [{
                "title": "",
                "intro": "背景介绍",
                "content": {
                    "title": "",
                    "content": ""
                },
                "audio": "",
                "note": [{
                    "id": "和原文里打标签的释义id一致",
                    "content": ""
                }]
            },{
                "title": "",
                "intro": "背景介绍",
                "content": {
                    "title": "",
                    "content": ""
                },
                "audio": "",
                "note": [{
                    "id": "和原文里打标签的释义id一致",
                    "content": ""
                }]
            }]
        },

        init:function(data,tpl){
            this._super()
            this.context=$(ejs.render(tpl||this.tpl,data))

            var sprite=cc.Choice.create({
                "type": 1,
                "title": "这是单项选择。对还是错",
                "options": [{
                    "text": "对",
                    "isRight": 1
                }, {
                    "text": "错",
                    "isRight": 0
                }]
            })
            this.addChild(sprite,3)

            var sprite=cc.Choice.create({
                "type": 1,
                "title": "选择。对还是错",
                "options": [{
                    "text": "对",
                    "isRight": 1
                }, {
                    "text": "错",
                    "isRight": 0
                }]
            })
            this.addChild(sprite,1)


//            this.initMenu()

//            this.initAudio()
        },
        //点击交互事件
        initMenu:function(){
            var the=this
            var ctx=this.context

        },
        //音频
        initAudio:function(){
            var ctx=this.context

            var oVideo=$("#audio",ctx)[0]
            //当加载完//获取整个视频的长度
            oVideo.addEventListener("loadeddata",function(){
//               cc.log(this.duration)
                //开始播放
//                this.play()
            },false);
            //开始播放
            oVideo.addEventListener("play",function(){
                $(".audio_play",ctx).hide()
                $(".audio_pause",ctx).show()
            },false);
            oVideo.addEventListener("pause",function(){
                $(".audio_play",ctx).show()
                $(".audio_pause",ctx).hide()
            },false);
            //当视频播放的时候显示进度条的位置。
            var length=$("footer",ctx).width()-$(".left",ctx).width()
            oVideo.addEventListener("timeupdate",function(){
                //进度条变化
                cc.log((this.currentTime/this.duration)*length)
                $(".progress",ctx).width((this.currentTime/this.duration)*length)
                //时间变化
                var minu1=0|(this.currentTime/60)
                if(minu1<10){
                    minu1="0"+minu1
                }
                var sec1=0|this.currentTime%60
                if(sec1<10){
                    sec1="0"+sec1
                }
                var minu2=0|(this.duration/60)
                if(minu2<10){
                    minu2="0"+minu2
                }
                var sec2=0|this.duration%60
                if(sec2<10){
                    sec2="0"+sec2
                }
                $(".time",ctx).text(minu1+":"+sec1+"/"+minu2+":"+sec2)

            },false);
            //播放按钮
            $(".audio_play",ctx).click(function(){
                oVideo.play()
            })
            //暂停按钮
            $(".audio_pause",ctx).click(function(){
                oVideo.pause()
            })
        },
        afterHtml:function(){
            var ctx=this.context
            $(".container",ctx).css({
                "margin-top":$("header",ctx).height(),
                "margin-bottom":$("footer",ctx).height(),
                "height":$(ctx).height()-$("header",ctx).height()-$("footer",ctx).height()
            })
            //在网页端
            if (!navigator.userAgent.match(/mobile/i)) {
                this.getParent().context.css({
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
            this.afterHtml()
        },
        //结束
        onExit:function(){
            this._super()
            this.context.remove()
        }
    })
    //每个scene对应一个页面
    var Scene1=(require("./baseLayer").Scene||cc.Scene).extend({
		context:$("body"),
        ctor:function(){
            this._super()
            var layer=new Layer1()
            layer.init(data)
            this.addChild(layer)
        }
    })

    module.exports.Layer=Layer1
    module.exports.Scene=Scene1
});
