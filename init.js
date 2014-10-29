/**
 * Created with JetBrains WebStorm.
 * User: liuzhao
 * Date: 13-10-30
 * Time: 下午5:33
 * To change this template use File | Settings | File Templates.
 */
var TSG = TSG || {},
    data = null,
//android回调对象
    androiddata = androiddata || {},
    kooappdata = kooappdata || window.location.search;

androiddata.tabHandle = androiddata.tabHandle || function(a){console && console.log(a);},

    TSG.appPath=seajs.data.base+'..'
    TSG.dataPath=TSG.appPath+'/kp/'
seajs.config({
    debug: 0,
    preload: ["cc.js","cc.extend.js","zepto.min.js","seajs-text.js","ejs.min.js"],
    // 文件编码
    charset: 'utf-8',

    // 静态文件路径配置
    paths: {
        'data': TSG.appPath+'/kp',
        'static':seajs.data.base+ '../assets'
    },

//    // 其他js文件别名配置
//    alias: {
//        'zepto': 'zepto.min.js'
//    },

    //清除缓存
    map: [
        [ /^(.*\.(?:[a-z]+))(?:.*)$/i, '$1?'+ Math.random() ]
    ]
});

seajs.use(seajs.data.base+'../assets/js/ypkt2/MyScene',function(exports){
    $(function(){
        var Scene=exports.Scene
        var scene=new Scene
        cc.Director.replaceScene(scene)
    })
});
