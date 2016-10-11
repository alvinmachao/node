#ES6 ECMAScript6

## 1. 作用域变量

### 1.1 var的问题

- var没有块级作用域，定义后在当前闭包中都可以访问，如果变量名重复，就会覆盖前面定义的变量，并且也有可能被其他人更改。
- var在for循环标记变量共享，一般在循环中使用的i会被共享，其本质上也是由于没有块级作用域造成的

### 1.2 块级作用域

    在用var定义变量的时候，变量是通过闭包进行隔离的，现在用了let，不仅仅可以通过闭包隔离，还增加了一些块级作用域隔离。 块级作用用一组大括号定义一个块,使用 let 定义的变量在大括号的外面是访问不到的
    
#### 1.2.1 实现块级作用域
#### 1.2.2 不会污染全局变量
#### 1.2.3 嵌套的for循环中依然可以使用相同的i
```
//嵌套循环不会互相影响
for (let i = 0; i < 3; i++) {
    console.log('out' + i);
    for (let i = 0; i < 2; i++) {
        console.log('in' + i);
    }
}
//out0 in0 in1 out1 in0 in1 out2 in0 in1
```
#### 1.2.4 重复定义会报错
#### 1.2.5 不存在变量的欲解释
```
console.log(a);
let a = "a";
//这样使用会报错
```
#### 1.2.6 闭包的新写法
```
//之前
;(function(){

})();

//现在
{

}
```
## 2 常量

使用const去声明一个常量（大写），且一旦被赋值就不能在更改。

### 2.1 常量不能被重新赋值
```
const MY_CONST="test";
MY_CONST="test2";

//TypeError: Assignment to constant variable.
```
### 2.2 变量值可以改变

```
//注：常量的限制是不能被重新赋值，但是变量本身是可以改变的
const MY_CONST=["test"];
MY_CONST.push('test2');
console.log(MY_CONST);
//输出：['test' 'test2']
```
### 常量不在不同的作用域块中可以多次定义
```
const A = "0";
{
    const A = "A";
    console.log(A)
}
{
    const A = "B";
    console.log(A)
}
console.log(A)

//A B 0
```
## 3. 解构

- 解构就是分解结构，可以用一种类似数组的方式去定义n个变量，然后可以用数组的值按着一定的规则赋值过去

### 3.1 解析数组

```
let [name,age]=['alvin',28];
console.log(name+" "+age);
```

### 3.2 嵌套赋值
```
let [x,y,z]=["1",[1,2],3];
console.log(x,y,z)
```

### 3.3 省略赋值

```
let [,,z]=["1",[1,2],3];
console.log(z)
```

### 3.4 结构对象

```
var obj = {name:'alvin',age:28};
//对象里的name属性的值会交给name这个变量，age的值会交给age这个变量
var {name,age} = obj;
//对象里的name属性的值会交给myname这个变量，age的值会交给myage这个变量
let {name: myname, age: myage} = obj;
console.log(name,age,myname,myage);
```
### 3.5 默认值

- 在赋值和传参的时候是可以使用默认值的

```
let [name='alvin',age]=[, 8];
console.log(name, age);//这时候name并没有赋值而是拿到的是默认值

function add(x = 1, y = 1) {
    console.log(x + y);
};//形参也可以赋一个默认值
add(10); 
```

## 4. 字符串

- 模板字符串用反引号（数字1左边的那个键），其中的变量用${}括起来

### 4.1 模板字符串
```
var name = "alvin", age = 28;
var tempStr=`my name is ${name}
and age is ${age}`;
console.log(tempStr);
//所有模板中的空格都是会被保留的
```

### 4.2 带标签的模板字符串   

- 可以在模板字符串前面添加一个标签，这个标签可以去处理模板字符串 标签其实就是一个函数，函数可以接受两个参数，一个是strings,就是模板字符串中的每部分的字符，还有一个参数可以使用rest的形式的values,这个参数是模板字符串里面的值
- rest rest parameter (表示剩余参数,必须加... ,并且说后面不可以再有参数)

```
function temp(x, y, ...z) {
    console.log(x);
    console.log(y);
    console.log(z);
}
temp(1,2,3,4,5,6);
//1
//2
//[ 3, 4, 5, 6 ]
```

```
function desc(strings, ...values) {
    console.log(strings);//strings 模板字符串每个部分的字符
    console.log(values); //values 模板字符串里的值   切这个参数必须是rest形式 （表示剩余参数）
}
var name = "alvin", age = 28;
desc `${name} is ${age} old`;    
```
### 4.3 字符串新方法

- includes()返回布尔值 表示是否找到了参数字符串
- startsWith()返回布尔值 表示以参数是否在源字符串的开头
- endsWith()返回布尔值 表示以参数字符串是否在源字符串结尾

以上方法均有两个参数 第二个参数开始搜索的位置

```
var a = 'alvin';
console.log(a.includes('v'));
console.log(a.startsWith('a'));
console.log(a.endsWith('n'));
console.log(a.includes('n',2));
console.log(a.endsWith('l',2));
console.log(a.startsWith('v',2));
//endsWith()方法比较特殊，他的第二参数是表示前n个字符，其他两个方法则表示从n索引位置起到结尾位置
```

### 4.4 repeat

- 此方法表示将原来字符串重复n次，返回一个新的字符串

```
console.log('x'.repeat(5)); //xxxxx
var a='x'.repeat(0); //a是一个空字符串
console.log(a);
console.log(typeof a);
```

## 5.函数

### 5.1 默认参数

- 可以在定义函数时候，为接收的参数设置默认值 ，函数执行时候若没有赋值则使用默认值

```
let temp = function (x = 1, y = 2, z = 3) {
    console.log(x, y, z);
};
temp();
temp(10,20,30);
```

### 5.2 展开操作符

- 把... 放在数组前面可以展开数组，可以把一个数组直接传入函数，而不需要使用apply

```
let temp = function (x = 1, y = 2, z = 3) {
    console.log(x, y, z);
};
temp(...[100,200,300]);
//100 200 300
// 可以替代apply
var m1 = Math.max.apply(null, [8, 9, 4, 1]);
var m2 = Math.max(...[8, 9, 4, 1]);

// 可以替代concat
var arr1 = [1, 3];
var arr2 = [3, 5];
var arr3 = arr1.concat(arr2);
var arr4 = [...arr1, ...arr2];
console.log(arr3,arr4);

//类数组的转数组
function max(a,b,c) {
    console.log(Math.max(...arguments));
}
max(1, 3, 4);
```
### 5.3 剩余操作符
剩余操作符可以把其余的参数的值都放到一个叫b的数组里面

```
let rest = function(a,...b){
    console.log(a,b);
}
rest(1,2,3);
```

### 5.4 解构参数

```
function temp({name,age}){
 console.log(name, age);
}
temp({name:'alvin',age:28});
```

### 5.5 函数名字

es6 新为函数提供一个属性name,表示函数的名字

```
var a = function temp({name,age}) {
    console.log(name, age);
}
console.log(a.name);
```

### 5.6 箭头函数
箭头函数简化了函数的定义方式，一般=>左边为函数输入部分，右边则是进行的操作和返回的值inputs=>outputs
```
[10,20,30].forEach(val=>console.log(val));
```
注：1. 这是一个简单的箭头函数，若是参数多余一个则需要用（）将其括起来，若是后面执行的语句有多条则需要{}将其括起来
注：2. 箭头函数没有自己的this,所以他内部的this就是外层代码块的this，当然也正式因为他没有this，所以也就避免的this的问题
```
var person = {
    name:'zfpx',
    getName:function(){
-        setTimeout(function(){console.log(this);},1000); //在浏览器执行的话this指向window
+        setTimeout(() => console.log(this),1000);//在浏览器执行的话this指向person
    }
    //若是在node环境中执行的话，指向setTimeout
}
person.getName();
```

### 5.7 数组新方法

#### 5.7.1 Array.from
将一个数组或者类数组转化成数组，会复制一份
```
var a = [1, 2, 3];
var b = Array.from(a);
```

#### 5.7.2 Array.of

of 是为了将一组数值转换成数组
```
console.log(Array(3, 4), Array(3, 4).length,
Array.of(3, 4), Array.of(3, 4).length);
```

#### 5.7.3 Array.prototype.copyWithin

copyWithin()方法语法如下：
arr.copyWithin(target, start, end = this.length)
最后一个参数为可选参数，省略则为数组长度。该方法在数组内复制从start(包含start)位置到end(不包含end)位置的一组元素覆盖到以target为开始位置的地方。例：
```
[1, 2, 3, 4].copyWithin(0, 1) // [2, 3, 4, 4]
[1, 2, 3, 4].copyWithin(0, 1, 2) // [2, 2, 3, 4]
```

如果start、end参数是负数，则用数组长度加上该参数来确定相应的位置：
```
[1, 2, 3, 4].copyWithin(0, -2, -1) // [3, 2, 3, 4]
```
注意：需要注意copyWithin()改变的是数组本身，并返回改变后的数组，而不是返回原数组的副本。

### 5.7.4 find  findIndex
查找对应元素和索引
find方法会查找符合条件的第一个元素，若没有则返回undefined 
findIndex 同样也是查找符合条件的第一个，返回索引若没有则返回-1；
```
arr.find(function(item,index,input){
           return item>=2;
},null);
arr.findIndex(function(item,index,input){
           return item>=2;
},null);
```

### 5.7.5 fill

fill就是填充的意思，用一个值填充给定开始和结束位置之间的所有值，和copyWithin一样有有三个参数 Array.prototype.fill(value, start, end = this.length);第三个参数不给的话默认是数组的长度，
参数start、end是填充区间，包含start位置，但不包含end位置。如果省略，则start默认值为0，end默认值为数组长度。如果两个可选参数中有一个是负数，则用数组长度加上该数来确定相应的位置。例：

```
[1, 2, 3].fill(4) // [4, 4, 4]
[1, 2, 3].fill(4, 1, 2) // [1, 4, 3]
[1, 2, 3].fill(4, -3, -2) // [4, 2, 3] 
```

### 5.7.6 Array.prototype.entries()、Array.prototype.keys与Array.prototype.values()
entries()、keys与values都返回一个数组迭代器对象。例：

```
var entries = [1, 2, 3].entries();
console.log(entries.next().value); // [0, 1]
console.log(entries.next().value); // [1, 2]
console.log(entries.next().value); // [2, 3]

var keys = [1, 2, 3].keys();
console.log(keys.next().value); // 0
console.log(keys.next().value); // 1
console.log(keys.next().value); // 2

var valuess = [1, 2, 3].values();
console.log(values.next().value); // 1
console.log(values.next().value); // 2
console.log(values.next().value); // 3
```

迭代器的next()方法返回的是一个包含value属性与done属性的对象，而value属性是当前遍历位置的值，done属性是一个布尔值，表示遍历是否结束。

我们也可以用for...of来遍历迭代器：

```
for (let i of entries) {
  console.log(i)
} // [0, 1]、[1, 2]、[2, 3]

for (let [index, value] of entries) {
  console.log(index, value)
} // 0 1、1 2、2 3

for (let key of keys) {
  console.log(key)
} // 0, 1, 2
for (let value of values) {
  console.log(value)
} // 1, 2, 3
```

##  6. 对象

### 6.1 对象字面量

如果你想在对象里添加跟变量名一样的属性，并且属性的值就是变量表示的值就可以直接在对象里加上这些属性
```
let name = 'alvin';
let age = 28;
function getName() {
    console.log(this.name,this.age);
}
var person = {
    name,
    age,
    getName
};
person.getName();
```

### 6.2 Object.is

在这之前我们比较值使用两等号 “==” 或 三等号“===”， 三等号更加严格，只要比较两方类型不同立即返回false。
另外，有且只有一个值不和自己相等，它是NaN
```
NaN==NaN  //false
```
Object.is 多数时候等同于===
```
1 === 1 // true
Object.is(1, 1) // true
 
'a' === 'a' // true
Object.is('a', 'a') // true
 
true === true // true
Object.is(true, true) // true
 
null === null // true
Object.is(null, null) // true
 
undefined === undefined // true
Object.is(undefined, undefined) // true
```
但对于NaN、0、+0、 -0，则和 “===” 不同
```
console.log(0===-0);//true
console.log(+0===-0);//true
console.log(+0===-0);//true
console.log(Object.is(+0,-0));//false
console.log(Object.is(+0,0));//true
console.log(Object.is(-0,0));//false
console.log(Object.is(NaN,NaN));//true
```

### 6.3 Object.assign

把多个对象的属性复制到一个对象中,第一个参数是复制的对象,从第二个参数开始往后,都是复制的源对象
```
var name={name:'alvin'};
var age={age:28};
var obj={};
Object.assign(obj,name,age);
console.log(obj);

//克隆一个对象出来
function clone(obj){
 return Object.assign({},obj);
}
```

### 6.4 Object.setPrototypeOf

将一个指定的对象的原型设置为另一个对象或者null
```
var obj1={name:'1'};
var obj2={name:'2'};
var obj={};
Object.setPrototypeOf(obj,obj1);
console.log(obj.__proto__); //{name:'1'}
console.log(Object.getPrototypeOf(obj)); //{name:'1'}
console.log(obj.name); //1
```

### 6.5 proto
直接在对象表达式中设置prototype
```
var obj1  = {name:'alvin'};
var obj3 = {
    __proto__:obj1
}
console.log(obj3.name);
console.log(Object.getPrototypeOf(obj3));
```

### 6.6 super
通过super可以调用prototype上的属性或方法
```
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
console.log(student.eat());
```

## 7. Symbol
ES6引入了一种新的原始数据类型Symbol，表示独一无二的值 它是JavaScript语言的第七种数据类型

### 7.1 生成Symbol
Symbol值通过Symbol函数生成
```
let s = Symbol('alvin');
console.log(s);
console.log(typeof s); //Symbol
```

### 7.2 作为属性名
由于每一个Symbol值都是不相等的，这意味着Symbol值可以作为标识符，用于对象的属性名，就能保证不会出现同名的属性
```
var sy=Symbol();
var sy1=Symbol();
var person={};
person[sy]=9;
person[sy1]=90;
console.log(person[sy]);  //9
console.log(person[sy1]); //90

......................................................
//若是在对象内部用Symbol值定义属性时候,Symbol 必须放在[]中
var sy=Symbol();
var person={
 [sy]:100,
};
console.log(person[sy]);//100
```

### 7.3 消除魔术变量  ????????????
```
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

console.log(calculate(Operator.add, 10, 10));//20
console.log(Operator.add);//Symbol()
console.log(Operator.minus);//undefined
console.log(calculate(Operator.minus, 10, 10));//0
```

## 8.生成器(Generator)与迭代器(Iterator)
Generator是一个特殊的函数，执行它会返回一个Iterator对象。 通过遍历迭代器， Generator函数运行后会返回一个遍历器对象，而不是普通函数的返回值。
### 8.1 Iterators
迭代器有一个next方法，每次执行的时候会返回一个对象 对象里面有两个属性，一个是value表示返回的值，还有就是布尔值done,表示是否迭代完成
```
function gene(arr) {
    var i = 0;
    return {
        next(){
            let done = i == arr.length;
            let value = !done ? arr[i++] : undefined;
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
//{ value: 1, done: false }
//{ value: 2, done: false }
//{ value: 3, done: false }
```

### 8.2 Generator

生成器用于创建迭代器
Generator函数有多种理解角度。从语法上，首先可以把它理解成，Generator函数是一个状态机，封装了多个内部状态。

执行Generator函数会返回一个遍历器对象，也就是说，Generator函数除了状态机，还是一个遍历器对象生成函数。返回的遍历器对象，可以依次遍历Generator函数内部的每一个状态。

形式上，Generator函数是一个普通函数，但是有两个特征。一是，function关键字与函数名之间有一个星号；二是，函数体内部使用yield语句，定义不同的内部状态（yield语句在英语里的意思就是“产出”）。
```
function* testGenerator() {
    yield 'hello';
    yield 'world';
    return "ending";
}
var temp=testGenerator();
console.log(temp.next());
console.log(temp.next());
console.log(temp.next());
console.log(temp.next());
//{ value: 'hello', done: false }
//{ value: 'world', done: false }
//{ value: 'ending', done: true }
//{ value: undefined, done: true }
```
上面代码定义了一个Generator函数helloWorldGenerator，它内部有两个yield语句“hello”和“world”，即该函数有三个状态：hello，world和return语句（结束执行）。

然后，Generator函数的调用方法与普通函数一样，也是在函数名后面加上一对圆括号。不同的是，调用Generator函数后，该函数并不执行，返回的也不是函数运行结果，而是一个指向内部状态的指针对象，也就是上一章介绍的遍历器对象（Iterator Object）。

下一步，必须调用遍历器对象的next方法，使得指针移向下一个状态。也就是说，每次调用next方法，内部指针就从函数头部或上一次停下来的地方开始执行，直到遇到下一个yield语句（或return语句）为止。换言之，Generator函数是分段执行的，yield语句是暂停执行的标记，而next方法可以恢复执行。

第四次调用，此时Generator函数已经运行完毕，next方法返回对象的value属性为undefined，done属性为true。以后再调用next方法，返回的都是这个值。

- 总结一下，调用Generator函数，返回一个遍历器对象，代表Generator函数的内部指针。以后，每次调用遍历器对象的next方法，就会返回一个有着value和done两个属性的对象。value属性表示当前的内部状态的值，是yield语句后面那个表达式的值；done属性是一个布尔值，表示是否遍历结束。

#### 8.2.1 yield语句

由于Generator函数返回的遍历器对象，只有调用next方法才会遍历下一个内部状态，所以其实提供了一种可以暂停执行的函数。yield语句就是暂停标志。

遍历器对象的next方法运行逻辑如下：

    （1）遇到yield语句，就暂停执行后面的操作，并将紧跟在yield后面的那个表达式的值，作为返回的对象的value属性值。
    
    （2）下一次调用next方法时，再继续往下执行，直到遇到下一个yield语句。
    
    （3）如果没有再遇到新的yield语句，就一直运行到函数结束，直到return语句为止，并将return语句后面的表达式的值，作为返回的对象的value属性值。
    
    （4）如果该函数没有return语句，则返回的对象的value属性值为undefined。
    
  需要注意的是，yield语句后面的表达式，只有当调用next方法、内部指针指向该语句时才会执行，因此等于为JavaScript提供了手动的“惰性求值”（Lazy Evaluation）的语法功能。
    
```
function* gen(){
   yield 12+13;//此时代码在函数执行时候不会立即执行，而是在条用next方法的指针移到这句时候才会执行
}
```
yield语句与return语句既有相似之处，也有区别。相似之处在于，都能返回紧跟在语句后面的那个表达式的值。区别在于每次遇到yield，函数暂停执行，下一次再从该位置继续向后执行，而return语句不具备位置记忆的功能。一个函数里面，只能执行一次（或者说一个）return语句，但是可以执行多次（或者说多个）yield语句。正常函数只能返回一个值，因为只能执行一次return；Generator函数可以返回一系列的值，因为可以有任意多个yield。从另一个角度看，也可以说Generator生成了一系列的值，这也就是它的名称的来历（在英语中，generator这个词是“生成器”的意思）。

并且值得注意的是yield是不可以用在普通函数中的，不然会报错 例如：
```
(function (){
  yield 10;
})()   //这样就会报错
```

下一个例子：
```
var arr = [1, [[2, 3], 4], [5, 6]];

var flat = function* (a) {
  a.forEach(function (item) {
    if (typeof item !== 'number') {
      yield* flat(item);
    } else {
      yield item;
    }
  }
};

for (var f of flat(arr)){
  console.log(f);
}
```
这时候把yield 放在了forEach这个函数中了，所以就会报错，可以使用for循环替代
```
var arr = [1, [[2, 3], 4], [5, 6]];

var flat = function* (a) {
  var length = a.length;
  for (var i = 0; i < length; i++) {
    var item = a[i];
    if (typeof item !== 'number') {
      yield* flat(item);
    } else {
      yield item;
    }
  }
};

for (var f of flat(arr)) {
  console.log(f);
}
// 1, 2, 3, 4, 5, 6
```

另外，yield语句如果用在一个表达式之中，必须放在圆括号里面。
```
console.log('Hello' + yield); // SyntaxError
console.log('Hello' + yield 123); // SyntaxError
console.log('Hello' + (yield)); // OK
console.log('Hello' + (yield 123)); // OK
```
yield语句用作函数参数或赋值表达式的右边，可以不加括号。
```
foo(yield 'a', yield 'b'); // OK
let input = yield; // OK
```

#### 8.2.2 与iterator接口的关系
任意一个对象的Symbol.iterator方法，等于该对象的遍历器生成函数，调用该函数会返回该对象的一个遍历器对象。

由于Generator函数就是遍历器生成函数，因此可以把Generator赋值给对象的Symbol.iterator属性，从而使得该对象具有Iterator接口。
```
var myIterable = {};
myIterable[Symbol.iterator] = function* () {
  yield 1;
  yield 2;
  yield 3;
};

[...myIterable] // [1, 2, 3]
```
上面代码中，Generator函数赋值给Symbol.iterator属性，从而使得myIterable对象具有了Iterator接口，可以被...运算符遍历了。

Generator函数执行后，返回一个遍历器对象。该对象本身也具有Symbol.iterator属性，执行后返回自身。
```
function* gen(){
  // some code
}

var g = gen();

g[Symbol.iterator]() === g
// true
```
上面代码中，gen是一个Generator函数，调用它会生成一个遍历器对象g。它的Symbol.iterator属性，也是一个遍历器对象生成函数，执行后返回它自己。

#### 8.2.3 for... of 方法
for...of循环可以自动遍历Generator函数时生成的Iterator对象，且此时不再需要调用next方法

```
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
// 1 2 3 4 5 
```
上面代码使用for...of循环，依次显示5个yield语句的值。这里需要注意，一旦next方法的返回对象的done属性为true，for...of循环就会中止，且不包含该返回对象，所以上面代码的return语句返回的6，不包括在for...of循环之中。


## 9. 类 
### 9.1 class

使用class这个关键词定义一个类,基于这个类创建实例以后会自动执行constructor方法,此方法可以用来初始化
```
class Person {
    constructor(name) {
        this.name = name;
    }

    getName() {
        console.log(this.name);
    }
}
var p=new Person('alvin');
p.getName();
```

### 9.2 get 和 set

get 使用来获取属性的的，set是用来设置属性的
```
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
console.log(p.hobby);

class Person {
    constructor(name,age) {
        this.name=name;
        this.age=age;
    }
   /* set Name(name) {
        this.name = name;
    }

    get Name() {
        return this.name;
    }

    set Age(age) {
        this.age = age;
    }

    get Age() {
        return this.age;
    }*/
}
var p = new Person('alvin',20);
//p.name = 'alvin';
//p.age = '20';
console.log(p.name);
console.log(p.age);
```

### 9.3 静态方法 static
在类里面添加静态的方法可以使用static这个关键词，静态方法就是不需要实例化类就能使用的方法
```
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    static add(x, y) {
        return x + y;
    }

}
console.log(Person.add(10,20));//30
```

### 9.4 继承extends

在一个类中去继承其他类的东西
```
class Person {
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
stu.eat();//eating something
```

## 10.集合

### 10.1 Set
一个Set是一堆东西的集合,Set有点像数组,不过跟数组不一样的是，Set里面不能有重复的内容
```
var books = new Set();
books.add('js');
books.add('js');//添加重复元素集合的元素个数不会改变
books.add('html');
books.forEach(function(book){//循环集合
    console.log(book);
})
console.log(books.size);//集合中元数的个数
console.log(books.has('js'));//判断集合中是否有此元素
books.delete('js');//从集合中删除此元素
console.log(books.size);
console.log(books.has('js'));
books.clear();//清空 set
console.log(books.size);
```
### 10.2 Map
可以使用 Map 来组织这种名值对的数据
```
var books = new Map();
books.set('js',{name:'js'});//向map中添加元素
books.set('html',{name:'html'});
console.log(books.size);//查看集合中的元素
console.log(books.get('js'));//通过key获取值
books.delete('js');//执照key删除元素
console.log(books.has('js'));//判断map中有没有key
books.forEach((value, key) => { //forEach可以迭代map
    console.log( key + ' = ' + value);
});
books.clear();//清空map
```

## 11.模块 ?????????????????????
可以根据应用的需求把代码分成不同的模块 每个模块里可以导出它需要让其它模块使用的东西 在其它模块里面可以导入这些模块导出的东西
### 11.1 模块

在浏览器中使用模块需要借助 ’导出‘ ’导入‘
导出
```
export var name = 'alvin';
export var age = 8;
```
导入
```
//import {name,age} from './school.js';
import * as school from './school.js';
console.log(school.name,school.age);
```
在页面中引用
```
<script src="https://google.github.io/traceur-compiler/bin/traceur.js"></script>
<script src="https://google.github.io/traceur-compiler/bin/BrowserSystem.js"></script>
<script src="https://google.github.io/traceur-compiler/src/bootstrap.js"></script>
<script type="module" src="index.js"></script>
```

### 11.2 重命名
导出重命名
```
function say(){
    console.log('say');
}
export {say as say2};
```
导入重命名
```
import {say2 as say3} from './school.js';
```

### 11.3 默认导出
每个模块都可以有一个默认要导出的东西
导出
```
export default function say(){
    console.log('say');
}
```
导入
```
import say from './school.js';
```