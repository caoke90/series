/**
 * Created with JetBrains WebStorm.
 * User: liuzhao
 * Date: 13-10-30
 * Time: 下午5:33
 * To change this template use File | Settings | File Templates.
 */
var data = null,
    kooappdata = kooappdata || window.location.search,
    //android回调对象
    androiddata = androiddata || {};

androiddata.tabHandle = androiddata.tabHandle || function(a){console && console.log(a);},
    seajs.config({
        debug: 0,
        preload: ["cc","zepto.min.js","seajs-text.js","ejs.min.js"],
        // 文件编码
        charset: 'utf-8',

        //清除缓存
        map: [
//            [ /^(.*\.(?:[a-z]+))(?:.*)$/i, '$1?'+ Math.random() ]
        ]
    });

seajs.use(define(function(require,exports,module){
    require.async("../assets/css/ypkt1.css")
    //数据总路径
//    cc.allDataPath=seajs.data.base+"../kp/"/*相对js路径*/
    cc.allDataPath=document.location.pathname.substr(0,document.location.pathname.lastIndexOf("/"))+"/kp/"/*相对html路径*/
//    cc.allDataPath="http://192.168.101.30:8080/app/ydktScene/kp/";/*绝对路劲*/

    //当前数据路径
    cc.theDataPath= cc.allDataPath+(require('queryString').strings(kooappdata).path)

    require.async(cc.theDataPath+"/data.js",function(){
        if(data){
            if(data.practice.trans){
                require.async("../assets/js/ypkt2/MyScene",function(back){
                    var Scene=back
                    var scene=new Scene
                    scene.init(data)
                    scene.onEnter()
                })
            }else{
                require.async("../assets/js/ypkt1/MyScene",function(back){
                    var Scene=back
                    var scene=new Scene
                    scene.init(data)
                    scene.onEnter()
                })
            }

        }else{
            $("body").html("<h2>不存在数据,url错误</h2>")
            cc.log("测试1：?path=test/222")
            cc.log("测试2：?path=test2/222")
        }
    })

}));
