var layer1=cc.Layer.extend({
	context:$("#id"),
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
    onEnter:function(){
        this._super()
        var the
        this._child(function(){
            if(this===the){return false}
            this.getParent().context.append(this.context)
        })
    },
    onExist:function(){
        this._super()
        this.context.remove()
    }
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


