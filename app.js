var layer1=cc.Layer.extend({
    init:function(){
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
    updateTransform:function(){
        this._super()
        cc.log(this.sprite.name)
    }
})
var Scene1=cc.Scene.extend({
    onEnter:function(){
        this._super()
        var layer=new layer1()
        layer.init()
        this.addChild(layer)
    },
	_search:function(){
		var the=this
		the.index=0
		this._child(function(){
			++the.index
			if(this.name==22){
				cc.log(this.name)
				cc.log(the.index)
				return false
			}
			return true
		})
	}
})

var scene=new Scene1()

scene._search()


