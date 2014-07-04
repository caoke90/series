/**
 * Created with JetBrains WebStorm.
 * User: liuzhao
 * Date: 13-10-30
 * Time: 下午4:42
 * To change this template use File | Settings | File Templates.
 */
define(function(require, exports, module){

    var controlPage=new cc.controlPage
    controlPage.index=0
    controlPage.pageArr=[
        require("./p1").Scene
//        require("./p2").Scene,
//        require("./p3_1").Scene,
//        require("./p3_2").Scene,
//        require("./p3_3_1").Scene,
//        require("./p3_3_2").Scene,
//        require("./p3_3_1").Scene,
//        require("./p3_3_2").Scene
//        require("./p3_4").Scene
    ]
    $(document).keydown(function(e){
        if(e.keyCode==37){
            if(controlPage.index==0){
                return
            }
            controlPage.prev()
        }
        if(e.keyCode==39){
            if(controlPage.index==controlPage.pageArr.length-1){
                return
            }
            controlPage.next()
        }
    })
    var MyScene = cc.Scene.extend({
        onEnter:function () {
            this._super();
            var path = require('queryString').strings(kooappdata).path||"111/222"
            require.async("data/"+path+"/data.js",function(){
                controlPage.replay()
            })
        }
    });
    module.exports.Scene=MyScene


});
