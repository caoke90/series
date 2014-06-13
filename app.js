var layer1=cc.Layer.extend({
    init:function(){
        var sprite=new cc.Sprite
        sprite.name=2
        this.addChild(sprite,1)
        this.sprite=sprite
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
    }
})

var scene=new Scene1()
scene.updateTransform()


