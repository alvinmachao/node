## node 的配置
- 因为node 和npm 在环境变量中配置过，所以可以在全局用
- 使用npm -g的虽然没有配置在环境变量下，但是也可以使用在全局

## 安装node PPT

```
npm install -g nodeppt
```

## 同步异步
 
## 阻塞和非阻塞
 
## 线程（单线程和多线程）
 
## 事件循环 

## node 全局变量是global 
- 但是在文件中this指的是当前文件，node 会把文件看成一个模块，自执行函数中的this指的是global,在文件中的this===exports
- 在当前文件中的变量不会自动挂载到全局global中，但是没有var 的话就会自动挂在到全局了 

## global
- global 可以自己调用自己
- process:进程
    1.pid 进程id
    2.stdout  console.log()底层默认调用的就是这个
    3.stdin  
        process.stdin.on('data',function(data){
            process.stdout.write(data);
        })
    4 nextTick() 下一队列      异步的
- Buffer: 十六进制的  缓存区 ，表示当前使用的内存区
- setImmediate    异步的
    和setTimeout 基本功能是一样的 但是不能限定时间
- clearInterval
       
- clearTimeout
- setTimeout
- setInterval 
    setInterval(a,2000,参数)；  setInterval 可以给函数传参数，但是不兼容ie 6789
- console
    1 .log()
    2 .info()
    3 .error()
    4 .warn()
    5 .time('start') 计算时间用的
    6 .timeEnd(‘start’) 和 time 配合的用 ,参数相同的时候会自动配对
    执行的顺序是不确定的
  
- process.nextTick >setImmediate> setTimeout(当然是要时间)

## 什么可以直接使用

- 全局变量
- 形参

在文件运行时会被默认包裹一个函数

function (exports,require,module,__dirname,__filename){
   this=exports;
   ...
   module.exports=exports={};
   return module.exports;  
}

    __dirname 当前目录的绝对路径
    __filename 当前文件的绝对路径  并且不能更改
- process.cwd()  current working directory  
- process.chdir() change directory 
  
## seajs（cmd）/requirejs(amd)

## commonjs规范

- 定义模块
  新建一个文件
- 需要一个模块
  require()
- 导出一个模块
  exports  / module.exports
  
## 模块化的好处
 
- 分工协作
- 高内聚 低耦合
- 方便重构  

## ES6 https://zhufengnodejs.github.io/doc/html/JAVASCRIPT/ES6.html

## exports and require
- exports 增加属性，可以导致module.exports 的变化 ，但是若是只给exports指向新的指针，并不会影响module.exports，所以导出时候并没有什么变化，默认导出的是 module.exports

- 多次引用只会加载一次且require是同步的，加载之后会被缓存到require.cache
  require.cache   存储模块的缓存
  require.resolve  解析出绝对路径

## npm 和包

- 创建管理依赖文件package.json
```
npm init
```

```
npm install   安装所有依赖
```
  1.开发依赖（只在开发时使用）gulp
  ```
  npm install gulp --save-dev
  npm uninstall gulp --save-dev   卸载
  ```
  2.依赖（上线和开发时都需要）jquery angular
  ```
  npm install jquery --save
  npm uninstall jquery --save     卸载
  ```
  
## 全局安装

```
npm install -g gulp
npm uninstall gulp -g
```
    
- 因为npm 在全局中，-g之后就是在npm做了一个映射，映射到真实的文件中，这样我们的这个新安装的文件就可以全局使用了

## 发布包

- 创建账号

```
npm adduser
```

- 发布


```
npm publish
```

- 再次发布
```
npm publish   先修改版本号
```

- 应用

```
npm install xxxx
```

- 取消发布

```
npm unpublish --f xxx   
```

## 安装切换源

```
npm install -g nrm
nrm ls  查看所有源
nrm test  测试网速
nrm use xxx  一般使用taobao /npm
```
发布包时候必须在npm源上面

## 模块分类

- 核心模块 （node 自带的http fs url ）
- ./文件模块
- 没有./的是 第三方模块
    require("")  1.先找到package.json 中的main所指向的文件
                 2.若没有的话，就继续找index.js ，
                 3.若还是没有 通过module.paths 继续往上一级进行查找

