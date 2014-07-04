/**
 * Created with JetBrains WebStorm.
 * User: liuzhao
 * Date: 13-10-30
 * Time: 下午4:42
 * To change this template use File | Settings | File Templates.
 */
define(function(require, exports, module){
    var touch=false
    var Layer1=(require("./baseLayer").Layer||cc.Layer).extend({
        context:null,
        data:null,
        path:null,
        init:function(){
            this._super()

            this.initContext()

            this.initMenu()
            this.initRead()
            this.initAudio()

        },
        initContext:function(){
            this.path = require('queryString').strings(kooappdata).path||"111/222"
            //获取模板
            var tpl=require("./p1.tpl")
            this.data=$.extend(data,{
                dataPath:TSG.dataPath+this.path+"/"
            })
            var html=ejs.render(tpl, this.data)
            this.context=$(html)
        },
        //点击交互事件
        initMenu:function(){
            var the=this
            var ctx=this.context

            if(!touch){
                $(".img",ctx).show()
                $(".info",ctx).hide()
                $(".img",ctx).click(function(){
                    touch=true
                    var oVideo=$("#audio",ctx)[0]
                    oVideo.play()
                    $(".img",ctx).hide()
                    $(".info",ctx).show()
                })
            }else{
                $(".img",ctx).hide()
                $(".info",ctx).show()
            }
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
            var length=$("body").width()-$(".left",ctx).width()
            var the=this
            oVideo.addEventListener("timeupdate",function(){
                the.updateRead()
                //进度条变化
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
        initRead:function(){
            var ctx=this.context
            var the=this
            var oVideo=$("#audio",ctx)[0]
            $(".color-change",ctx).each(function(){
                $(this).click(function(){
                    oVideo.currentTime=$(this).attr("data-start")
                    oVideo.play()
                    the.updateRead()
                })
            })
        },
        updateRead:function(){
            var oVideo=$("#audio",ctx)[0]
            var ctx=this.context
            var the=this
            $(".color-change",ctx).each(function(){
                var cur=$(this)
                if(oVideo.currentTime>cur.attr("data-start")&&oVideo.currentTime<cur.attr("data-end")){
                    the.curele&&the.curele.css({
                        "color":""
                    })
                    the.curele=cur
                    cur.css({
                        "color": cur.attr("data-color")
                    })
                }
            })

        },
        test:function(){
            var ctx=this.context
            $(".tishi",ctx).animate({
                    opacity: 0
                }, 2000,
                'ease-out')
        }
    })
    //每个scene对应一个页面
    var Scene1=(require("./baseLayer").Scene||cc.Scene).extend({
        ctor:function(){
            this._super()
            var layer=new Layer1()
            layer.init()
            this.addChild(layer)
        }
    })

    module.exports.Layer=Layer1
    module.exports.Scene=Scene1
});
