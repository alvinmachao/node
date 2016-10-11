/**
 * Created by Alvin on 2016/10/9.
 */
//var obj = {
//    add: function (a, b) {
//        return a + b
//    },
//    plus: function (a, b) {
//        return a - b
//    },
//};
var obj={
    "+":(a,b)=>{return a+b},
    "-":(a,b)=>{return a-b},
    //箭头函数没有this指向
};
module.exports=obj;
//exports.obj = obj;