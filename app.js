var layer1=cc.Layer.extend({
	context:$("#id"),
	name:true,
    init:function(){
      
    },
	initAnimate:function(){
		var sprite=new cc.Sprite
        sprite.name=22
        this.addChild(sprite,2)
          var sprite=new cc.Sprite
        sprite.name=32
        this.addChild(sprite,1)
		   var sprite=new cc.Sprite
        sprite.name=42
        this.addChild(sprite,1)
		   var sprite=new cc.Sprite
     
        this.addChild(sprite,1)
	},
	//点击交互事件
    initMenu:function(){

    },
})
var Scene1=cc.Scene.extend({

    init:function(){
        this._super()
        var layer=new layer1()
        layer.init()
        this.addChild(layer)
    }
})

var scene=new Scene1()
scene.init()
//显示页面
scene.onEnter()


