## 编写页面前的准备

+ ### 编写<meta />标签


```
<meta name = "viewport" content = "width = device-width,initial-scale = 1" />
<!--页面宽度和设备宽度一致，加载时放大倍数为1-->
```
+ ### 引入css样式文件，js脚本文件


```
<head>
    <link rel = "stylesheet" href = "css/jquery.mobile-1.4.5.min.css" />
    <script src = "js/jquery-2.2.2.js"></script>
    <script src = "js/jquery.mobile-1.4.5.min.js"></script>
</head>
```

## jQuery Mobile 页面结构

+ ## 单页面
给标签添 ==data-role=""== 属性构建结构


```
<body>
    <div data-role = "page">    <!--标明一页-->
        <div data-role = "header">
            <h1>Hello jQuery Mobile</h1>
        </div>
        <div data-role = "content">
            <p> page content</p>
        </div>
        <div data-role = "footer">
            <h4>&copy;开源社区</h4>
        </div>
    </div>
</body>
```
+ ### 多容器页面
给标明page的标签添加 ==id== 属性区分不同的页面。默认只显示第一个页面,通过a标签href值为id值，进行页面切换。

```
<body>
    <div data-role = "page" id = "pageone">    <!--标明第一页-->
        <div data-role = "header">
            <h1>Hello jQuery Mobile</h1>
        </div>
        <div data-role = "content">
            <p> page content</p>
            <a href = "#pagetwo">切换第二个页面</a>        </div>
        <div data-role = "footer">
            <h4>&copy;开源社区</h4>
        </div>
    </div>
    <div data-role = "page" id = "pagetwo">    <!--标明第二页-->
        <div data-role = "header">
            <h1>Hello jQuery Mobile</h1>
        </div>
        <div data-role = "content">
            <p> page content</p>
        </div>
        <div data-role = "footer">
            <h4>&copy;开源社区</h4>
        </div>
    </div>
</body>

```

上述方法只能在同一个html的不同页面间跳转，若链接外部页面，需增加属性 ==rel = “external”==
```
<a href = "a.html" rel = "external">Go to another html</a>
l```
## 页面切换效果

给要进行页面切换的链接或表单提交增加 ==data-transition = ""== 属性，实现不同的页面切换效果


```
<a href = "#pagetwo" data-transition = "flip">Go to pagetwo</a>
```

属性值  | 效果
---|---
fade | 默认。淡入
flip | 从后向前翻转
flow | 抛出当前页
pop  | 弹窗
slide| 从右向左滑动
slidefade |从右向左滑动并淡入
slideup | 从上向下滑动
slidedown | 从下向上滑动
turn | 翻页
none | 没有效果

所有切换效果支持后退，需添加 ==data-direction = "reverse"== 属性，如从后向前翻转会变成从前向后翻转。

```
<a href = "#pagetwo" data-transition = "flip" data-direction = "reverse">Go to pagetwo</a>
```
## 对话框

l在链接元素中添加 ==data-rel=“dialog”== 属性，打开的页面以对话框形式呈现。

打开的页面可以是外部页面也可以是一个page，页面切换效果可以改变。

```
<a href="#pagetwo" data-rel="dialog" data-transiton="pop">Go to dialog</a>
```
## 页面主题

给标明page的标签或div容器添加 ==data-theme=""== 属性来更换主题

+ 内置主题


属性值 | a | b |c | d | e
---|---|---|---|---|---

+ 支持自定义主题

1. 添加样式，用(f-z)对类命名

    工具条添加类：ui-bar-(a-z)

    文本内容添加类：ui-body-(a-z)

    页面添加类：ui-page-theme-(a-z)
    
```
<style>
.ui-bar-f{
    color:red;
    background-color:black;
}
</style>

```

```
<div data-role="header" data-theme="f">
    <h1>页面顶部</h1>
</div>
```
















