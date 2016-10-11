/**
 * Created by Alvin on 2016/10/10.
 */
/*
 for (var i = 0; i < 3; i++) {
 setTimeout(function () {
 console.log(i);
 }, 100)
 }*/

/*
 for (let i = 0; i < 3; i++) {
 console.log('out' + i);
 for (let i = 0; i < 2; i++) {
 console.log('in' + i);
 }
 }*/
/*console.log(a);
 let a = "a";*/
/*
 for (let i = 0; i < 2; i ++){
 console.log('inner',i);
 let i = 100;
 }*/
/*
 const MY_CONST=["test"];
 MY_CONST.push('1');
 console.log(MY_CONST);*/

//let [name,age]=['alvin',28];
/*//console.log(name+" "+age);
 let [,,z]=["1",[1,2],3];
 console.log(z)*/
/*
 var obj = {name:'alvin',age:8};
 //对象里的name属性的值会交给name这个变量，age的值会交给age这个变量
 var {name,age} = obj;
 //对象里的name属性的值会交给myname这个变量，age的值会交给myage这个变量
 let {name: myname, age: myage} = obj;
 console.log(name,age,myname,myage);

 */
//function add(let x=1,y=2){}
/*
 let [name='alvin',age]=[, 8];
 console.log(name, age);*/
/*function add(x = 1, y = 1) {
 console.log(x + y);
 };
 add(10);*/

/*
 function desc(strings, ...values) {
 console.log(strings);
 console.log(values);
 }
 var name = "alvin", age = 28;
 desc `${name} is ${age} old`;*/

/*
 function temp(x, y, ...z) {
 console.log(x);
 console.log(y);
 console.log(z);
 }
 temp(1,2,3,4,5,6);*/


/*var a = 'alvin';
 console.log(a.includes('v'));
 console.log(a.startsWith('a'));
 console.log(a.endsWith('n'));
 console.log(a.includes('n',2));
 console.log(a.endsWith('l',2));
 console.log(a.startsWith('v',2));*/
/*
 console.log('x'.repeat(5));
 var a='x'.repeat(0);
 console.log(a);
 console.log(typeof a);*/


/*
 let temp = function (x = 1, y = 2, z = 3) {
 console.log(x, y, z);
 };
 temp();
 temp(10,20,30);
 temp(...[100,200,300]);*/

/*var obj = {name: 'alvin', age: 28};
 var {name,age}=obj;
 console.log(name, age);*/

/*var a = function temp({name,age}) {
 console.log(name, age);
 }
 console.log(a.name);*/
//temp({name: 'alvin', age: 28});

//[10,20,30].forEach(val=>console.log(val));
/*var a = [1, 2, 3];
 var b = Array.from(a);
 var c = a;
 console.log(b);
 console.log(b == a);
 console.log(c === a);*/

/*var a=Array.of(1,2,3,4);
 console.log(a);*/
/*
 console.log(Array(3, 4), Array(3, 4).length,
 Array.of(3, 4), Array.of(3, 4).length);

 */
//console.log([1,2,3,4,5].copyWithin(0,1,2));
/*
 var arr = [1, 2, 3];
 //var temp=arr.findIndex(function (item,index,input) {
 //    return item>=5;
 //});
 //console.log(temp);
 console.log(arr.fill("a"));*/

//let name = 'alvin';
//let age = 28;
//function getName() {
//    console.log(this.name,this.age);
//}
//var person = {
//    name,
//    age,
//    getName
//};
/*
 //person.getName();
 console.log(0===-0);
 console.log(+0===-0);
 console.log(+0===-0);
 console.log(Object.is(+0,-0));
 console.log(Object.is(+0,0));
 console.log(Object.is(-0,0));
 console.log(Object.is(NaN,NaN));*/
/*
 var name={name:'alvin'};
 var age={age:28};
 var obj={};
 Object.assign(obj,name,age);
 console.log(obj);*/
/*
 function clone(obj){
 return Object.assign({},obj);
 }
 var obj={name:111};
 console.log(clone(obj));*/
/*
 var obj1 = {
 fn() {
 console.log('this is super')
 }
 };
 var obj = {
 __proto__: obj1,
 fn1() {
 super.fn();
 }
 };
 obj.fn1();
 /!*
 let person ={
 eat(){
 return 'milk';
 }
 }
 let student = {
 __proto__:person,
 eat(){
 return super.eat()+' bread'
 }
 }
 console.log(student.eat());*!/
 */
//var s=Symbol('alvin');
//console.log({}.toString.call(s,null));
//
//var sy=Symbol();
//var sy1=Symbol();
//var person={
// [sy]:100,
//};
//
//console.log(person[sy]);
/*
 var Operator = {
 add: Symbol()
 };

 function calculate(op, a, b) {
 switch (op) {
 case Operator.add:
 return a + b;
 break;
 case Operator.minus:
 return a - b;
 break;
 }
 }

 console.log(calculate(Operator.add, 10, 10));
 console.log(Operator.add);
 console.log(Operator.minus);
 console.log(calculate(Operator.minus, 10, 10));*/

/*

 function gene(arr) {
 var i = 0;
 return {
 next(){
 let done = i == arr.length;
 let value = !done ? arr[i++] : undefined;
 //i++;
 return {value: value, done: done};
 }
 }
 }
 var temp = gene([1, 2, 3]);
 var cur;
 do {
 cur = temp.next();
 if (!cur.done) {
 console.log(cur);
 }
 } while (!cur.done);


 function buy(books) {
 let i = 0;
 return {
 next(){
 let done = i == books.length;
 let value = !done ? books[i++] : undefined;
 return {
 value: value,
 done: done
 }
 }
 }
 }

 let iterators = buy(['js', 'html']);
 var curr;
 do {
 curr = iterators.next();
 console.log(curr);
 } while (!curr.done);*/

/*
 var temp = [1, 2].entries()
 var cur;
 do {
 cur = temp.next();
 console.log(cur);
 } while (!cur.done);*/
/*function* testGenerator() {
 yield 'hello';
 yield 'world';
 return "ending";
 }
 var temp=testGenerator();
 console.log(temp.next());
 console.log(temp.next());
 console.log(temp.next());
 console.log(temp.next());*/

/*
 /*
 console.log('Hello' + (yield));*!/
 var myIterable = {};
 myIterable[Symbol.iterator] = function* () {
 yield 1;
 yield 2;
 yield 3;
 };

 console.log(myIterable);*/
/*
 function *foo() {
 yield 1;
 yield 2;
 yield 3;
 yield 4;
 yield 5;
 return 6;
 }

 for (let v of foo()) {
 console.log(v);
 }
 */
/*
 function* fibonacci() {
 let [prev, curr] = [0, 1];
 for (;;) {
 [prev, curr] = [curr, prev + curr];
 yield curr;
 }
 }

 for (let n of fibonacci()) {
 if (n > 1000) break;
 console.log(n);
 }*/

/*
 class Person {
 constructor(name) {
 this.name = name;
 }

 getName() {
 console.log(this.name);
 }
 }
 var p=new Person('alvin');
 p.getName();*/


/*
 class Person {
 constructor() {
 this.hobbies = [];
 }

 set hobby(name) {
 this.hobbies.push(name);
 }

 get hobby() {
 return this.hobbies;
 }
 }

 var p = new Person();
 p.hobby = 'football';
 console.log(p.hobby);*/

/*class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    eat() {
        console.log('eating something')
    }
}
class Student extends Person {
    constructor(name, age) {
        super(name, age);
        this.name = name;
        this.age = age;
    }
}
var stu = new Student('alvin', 20);
stu.eat();
console.log(stu.name, stu.age);
var p = new Student('alvin',20);
p.eat();*/


import name from './demo1.js'
console.log(name);