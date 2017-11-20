# 正则表达式
## 创建方法

```
//同过字面量直接创建
var reg = /[bcf]at/gi;

//正则构造函数实例化对象
var reg2 = new RegExp(/[bcf]at/,"gi");
var reg3 = new RegExp("[bcf]at","gi");
```

## 匹配方法

```
//字符串方法
var str = 'a2b3c4d';
var reg = /[2-3]/;
str.replace(reg,'X');//aXb3c4d

//正则对象方法
var reg2 = /a/gi;
reg2.test(str);//true
```
## 相关字符
转义字符 \t  \v  \n \r  \0  \f  \cX

特殊字符

\d  一个数字，相当于[0-9]； \D一个非数字，相当于[^0-9]

\w 一个单字字符，相当于[A-Za-z0-9_] \W取非

\s 一个空白字符，/\s\w/匹配'foo bar'中的b

\S 非空白字符，/\S\w/匹配'foo bar’中的f

\b 边界

### 字符相关

[]字符类 [abc]代表abc中任意一个字符

[^]字符类取反

.代表除了回车和换行之外所有字符

### 边界相关

^左边界

$右边界

\b 边界

\B非边界

### 量词
？ 出现最多一次

\+ 至少一次

\* 任意次

{n} n次

{n,m} n-m次

{n,}至少n次

```
//字符类 []
console.log("absxsdfe123Ab".replace(/[abd]/,"X"));
console.log("absxsdfe123Ab".replace(/[abd]/g,"X"));
console.log("absxsdfe123Ab".replace(/[abd]/gi,"X"));

// 字符类 的取反 [^]
console.log("absxsdfe123Ab".replace(/[^abd]/,"X"));
console.log("absxsdfe123Ab".replace(/[^abd]/g,"X"));
console.log("absxsdfe123Ab".replace(/[^abd]/gi,"X"));

//范围类
console.log("12345667".replace(/[3-9]/gi,"X"));
console.log("absxsdfe123Ab".replace(/[a-f1-9]/gi,"X"));
console.log("absxsdfe123Ab".replace(/[a-f][1-9]/gi,"X"));//如果单独替换，则需要分组，见后续
console.log("absxsdfe1Q2e3Ab".replace(/[a-f][1-9][A-Z]/gi,"X"));

//思考：如何匹配 -
console.log("2017-10-23".replace(/[0-9]/g,"X"));
console.log("2017-10-23".replace(/[0-9-]/g,"X"));

// \d、\D、\w、\W、\s、\S 用[]如何表示
// [0-9]
// [^0-9]
// [a-zA-Z_0-9]
// [^a-zA-Z_0-9]
// [\t\n\x0B\f\r]
// [^\t\n\x0B\f\r]

//关于 . 除了回车和换行符之外的所有字符
/ab[0-9][^\r\n]/ //等效于/[ab\d.]/
console.log("@abc@123@".replace(/@./g,"Q"));
console.log("@abc@123@".replace(/.@/g,"Q"));

// Part 2222222222222222
//关于边界 ^ $ \b \B
console.log("This is a Boy is".replace(/is/g,0));
console.log("This is a Boy is".replace(/^is/g,0));
console.log("This is a Boy is".replace(/is$/g,0));
console.log("This is a Boy is".replace(/is\b/g,0));
console.log("This is a Boy is".replace(/is\B/g,0));
console.log("This is a Boy is".replace(/\bis/g,0));
console.log("This is a Boy is".replace(/\Bis/g,0));

// Part 33333333333333333333
//思考如何匹配 12345789abcdef34534789ede
//"12345789abcdef34534789ede".replace(/\d\d\d\d\d\d\d\d/g,"X");//不用量词的写法，非常不好
//"12345789abcdef34534789ede".replace(/\d{8}/g,"X");

//量词 注意*在这里是量词，不是充当通配符，充当通配符的是 .
//? 出现0次或1次（最多出现1次）
console.log("AaBbAb_AaaBbbAba".replace(/Aa?/g,0));

//+ 出现1次或多次（至少出现1次）
console.log("AaBbAb_AaaBbbAba".replace(/Aa+/g,0));

//* 出现0次或多次（任意次）
console.log("AaBbAb_AaaBbbAba".replace(/Aa*/g,0));

//{n} 出现n次
console.log("AaBbAb_AaaBbbAba".replace(/Aa{1}/g,0));
console.log("AaBbAb_AaaBbbAba".replace(/Aa{2}/g,0));

//{n,m} 出现n到m次
console.log("AaBbAb_AaaBbbAba".replace(/Aa{1,2}/g,0));

//{n,} 出现至少n次
console.log("AaBbAb_AaaBbbAbaAaaaaaaAaaAaaa".replace(/Aa{2,4}/g,0));

//注意：0到n次的写法{0,n}而不是{,n}
```


### 贪婪模式和分组

```
"12345678".replace(/\d{3,6}/,'X');//默认为贪婪模式  X78

"12345678".replace(/\d{3,6}?/,'X');//设置为非贪婪模式 在量词后加？X45678

"12345678".replace(/\d{3,6}?/g,'X');//返回什么？

//正则表达式的分组
console.log("NameNameName_11111".replace(/Name{3}/,"X"));
console.log("NameNameName_11111".replace(/(Name){3}/,"X"));

console.log("a1b2c3d4e5".replace(/[a-z]\d{3}/,"X"));
console.log("a1b2c3d4e5".replace(/([a-z]\d){3}/,"X"));
console.log("a1b2c3d4e5".replace(/([a-z]\d){3,4}/,"X"));
console.log("a1b2c3d4e5".replace(/([a-z]\d){3,4}?/,"X"));

// 与分组相关的 或
"abcdefghijk".replace(/abcde|fghijk/g,"X");
"abcdefghijk_abcdehijk_abcfghijk".replace(/abc(de|fg)hijk/g,"X");
```
### 分组的反向引用

```
"2017-10-23".replace(/(\d{4})-(\d{2})-(\d{2})/,"$2/$3/$1");//10-23-2017

```
## 正则和string相关方法
### RegExp原型方法test和exec
reg.test(str) 返回true或false
reg.exec(str) 返回一些具体数据
### string原型方法 search和match
str.search(reg); 返回index （-1代表没找到）
str.match(reg); 返回一些具体信息
str.replace(reg,'str');
str.split(',');
### 常用正则表达式

```
/\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+/ （邮箱）
/^[A-Za-z0-9_-]+$/ （密码）
/((?:(?:25[0-5]|2[0-4]\d|[01]?\d?\d)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d?\d))/ （IP地址）
/(.*)\.(rar|zip|7zip|tgz)$/ （压缩格式）
/(.*)\.(jpg|bmp|gif|ico|pcx|jpeg|tif|png|raw|tga)$/ （图片判断
/^#[a-fA-F0-9]{6}$/ （颜色值）
/^[A-Za-z0-9_\-\u4e00-\u9fa5]+$/ （用户名）
/0?(13|14|15|18)[0-9]{9}/ （手机号）
/^[A-Za-z0-9_()（）\-\u4e00-\u9fa5]+$/ （公司名称）

```
# Error

```
try{
    throw 'err';
}
catch(e){
    console.log('异常',e);//无论是否捕获到异常，finally都会执行
}
finally{
    console.log('完成');
}

```












