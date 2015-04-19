# series
chang your tasks anywhere
//js同步流程变换
var series=function(arr,i){
    function async(i){
        arr[i](function(ci){
            if(Object.prototype.toString.call(ci)=="[object Number]"){
                ci=ci
            }else{
                ci=i+1
            }
            if(ci<arr.length){
                async(ci)
            }
        },i)
    }
    async(i||0)
}
//demo
var task1=function(callback,i){
    console.log(i)//=>当前位置
    setTimeout(function(){
        console.log("21")
        callback(i+2) //直接跳转到task3 牛B吧
    },500)
}
var task2=function(callback,i){
    console.log(i)//=>当前位置
    setTimeout(function(){
        console.log("22")
        callback()
    },500)
}
var task3=function(callback,i){
    console.log(i)//=>当前位置
    setTimeout(function(){
        console.log("23")
        callback()
    },500)
}
var arrTasks=[task1,task2,task3]
series(arrTasks)
