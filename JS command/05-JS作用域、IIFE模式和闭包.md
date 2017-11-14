## 作用域
作用域，变量和函数的可访问范围，即在何处可以被访问到，控制着变量和函数的可见性和生命周期

```
//全局作用域
var a = 10,
    b = 20;
function fn() {
    //fn局部作用域
    var a = 100,
        c = 200;
    //可访问abc
    function bar() {
        //bar局部作用域
        var a = 500,
            d = 600;
        //可访问abcd
    }
    bar();
}
fn();
//可访问 a b
```
静态词法作用域

```
//与调用形式无关
var name = "Jack";
function echo() {
    console.log(name);
}
function foo() {
    var name = "Bill";
    echo();
}
foo();//Jack
```
通过new Function创建的函数对象不一定遵从静态词法作用域

```
var scope = 'global';
function a(){
    var scope = 'local';
    return function(){
        return scope;
    };
}
console.log(a()());//local

var scope = 'global';
function a(){
    var scope = 'local';
    return new Function('return scope');
}
console.log(a()());//global
```

### 执行上下文和调用栈

JS运行时会产生多个执行上下文，处于活动状态的执行上下文环境只有一个

以栈的方式来处理和追踪函数调用，栈底对应全局上下文环境，栈顶对应当前上下文环境
### IIFE 模式


```
//通过立即执行表达式来限制变量的作用域
(function(){
    var a;
}());
``` 
### 闭包
此法作用域中函数和其相关变量的包裹体

```
//闭包作为函数返回值返回
function foo() {//bar（）和变量i形成包裹体
    var i = 0;
    function bar() {
        console.log(++i);
    }
    return bar;
}
var a = foo();
var b = foo();
a();//1
a();//2
b();//1
//闭包作为对象方法返回
function counter() {
    var n = 0;
    return {
        count:function () {return ++n;},
        reset:function () {n = 0;return n;}
    }
}
var c = counter();
var d = counter();
console.log(c.count());

//作为参数
var max = 10;
var fn = function (x) {
    if(x > max){
        console.log(x);
    }
};
(function (f) {
    var max = 100;
    f(15);
})(fn);
```


