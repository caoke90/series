var cc = cc || {};
cc.Middle=function(){
    var next=function(func1,func2){
        return function(){
            var arg=Array.prototype.slice.call(arguments)
            var arr=[].concat(arg)
            arg.push(function(){
                func2.apply(this,arr)
            })
            return func1.apply(this,arg);
        }
    }
    var arg=Array.prototype.slice.call(arguments)
    var func=arg[arg.length-1]
    for(var i=arg.length-2;i>=0;i--){
        func=next(arg[i],func)
    }
    return func
}
cc.Div=cc.Node.extend({
    onEnter:function(){
        this._super()
        var the=this
        if(the.getParent()&&the.getParent().context){
            $("[emit]",the.context).each(function(){
                $(this).attr("emit_"+the._id,$(this).attr("emit"))
                $(this).removeAttr("emit")
            })
            $("[recive]",the.getParent().context).each(function(){
                $(this).attr("recive_"+the.getParent()._id,$(this).attr("recive"))
                $(this).removeAttr("recive")
            })
            $("[emit_"+the._id+"]",the.context).each(function(){
                $("[recive_"+the.getParent()._id+"="+$(this).attr("emit_"+the._id)+"]",the.getParent().context).append($(this))
            })
            the.context= $("[emit_"+the._id+"]",the.getParent().context)
        }else{
            $("[emit]",the.context).each(function(){
                $(this).attr("emit_"+the._id,$(this).attr("emit"))
                $(this).appendTo($(this).attr("emit"))
                $(this).removeAttr("emit")
            })
            the.context= $("[emit_"+the._id+"]","body")
        }


    },
    //结束
    onExit:function(){
        this._super()
        this.context.remove()
    }
})
