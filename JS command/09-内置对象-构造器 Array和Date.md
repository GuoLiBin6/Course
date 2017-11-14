# Array数组

## 创建
字面量方法

```
var arr = [1,3,'aa'];
```
构造函数方法

```
var arr = new Array(5);//[undefined*5]
```
## 静态方法
Array.from()将一个类数组或可迭代对象转化为数组

```
const bar = ["a", "b", "c"];
Array.from(bar);// ["a", "b", "c"]
Array.from('foo');// ["f", "o", "o"]

```
Array.isArray()判断是不是数组

```
Array.isArray([2,3]);//true
```
Array.of()将参数转换为数组元素，不考虑参数类型和数量

```
Array.of(7);       // [7]
Array.of(1, 2, 3); // [1, 2, 3]
Array(7);          // [ , , , , , , ]
Array(1, 2, 3);    // [1, 2, 3]
```
## 原型方法（破坏性的）
shift()删除并返回数组第一个元素

pop()删除并返回最后一个元素

unshift() 将一个或多个元素添加到数组头，并返回新长度

push() 将元素添加到数组尾

splice() 通过删除或添加元素来改变数组内容

```
var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];

myFish.splice(2, 0, 'drum'); // 在索引为2的位置插入'drum'
// myFish 变为 ["angel", "clown", "drum", "mandarin", "sturgeon"]

myFish.splice(2, 1); // 从索引为2的位置删除一项（也就是'drum'这一项）
// myFish 变为 ["angel", "clown", "mandarin", "sturgeon"]
```
sort() 排序

reverse() 颠倒顺序

## 原型方法（非破坏性的）

concat(arr1,arr2...) 合并两个或多个数组

slice(begin,end) 切分

join("-") 将数组的元素以-为分隔符连接成字符串

indexOf() 查找值，返回在数组中第一个索引

lastIndexOf() 查找值，返回在数组中最后一个索引

forEach（cb）对每个元素执行一次提供的函数

every（cb）有不满足的立即返回false，不再后续迭代

some（cb）有满足的立即返回true

map（cb） 每个元素都执行函数后返回一个新数组（数组创建）

filter（cb） 创建新数组，包含同过函数测试的原数组元素

# Date日期
## 创建
构造函数创建

```
var date1 = new Date(2017,9,18,12,34,1);//注意：月0-11，日：1-31，时：0-23，分：0-59，秒：0-59，毫秒：0-999
console.log(date1);

var date2 = new Date(17,9,18,12,34,1);//若years为2位的话自动加1900
console.log(date2);

var date3 = new Date("2017-08-09");//注意日期的格式 此处的08代表8月还是9月，对比上一个创建形式
console.log(date3);

//var date4 = new Date(0);    //1970-01-01:00:00:00
var date4 = new Date(1000); //1970-01-01:00:00:01
console.log(date4);//逆运算是date4.getTime();

var date5 = new Date();//new Date(Date.now());
console.log(date5);

//补充：无效日期
var date6 = new Date(NaN);
console.log(date6);//Invalid Date
```
## 静态方法
Date.now() 当前时间

Date.parse() 基于1997-01-01，转换为毫秒

Date.UTC() 


```
console.log(Date.parse("1970-01-02"));

console.log(Date.UTC(2017,9,1));//将给定的日期转换成毫秒,解释为UTC 协调世界时间
```
## 原型方法

```
var d = new Date('1997-01-02');
d.getFullYear();
d.getMonth();
d.getDate();
d.getHours();
d.getMinutes();
d.getSeconds();
d.getDate();
//上述都可set

d.toLocalTimeString();
d.toLocalDateString();
d.toJSON();

```



























