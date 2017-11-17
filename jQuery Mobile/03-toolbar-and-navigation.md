# 工具栏
## 头部栏
data-role='header'，一般包含logo和按扭

两个a标签和一个h1标签，默认a标签占左右两边

```
<div data-role='header'>
    <a data-role='button'>首页</a>
    <h1>我的主页</h1>
    <a data-role='button'>搜索</a>
</div>

```
一个a标签和一个h1标签，默认a标签占左边，若想定位在右边，给按钮添加class="ui-btn-right"属性
```
<div data-role='header'>
    <a data-role='button' class='ui-btn-right'>首页</a>
    <h1>我的主页</h1>
    <a data-role='button'>搜索</a>
</div>

```
## 尾部栏
data-role='footer'

```

<div data-role='footer'>
    <a data-role='button'>社区</a>
    <a data-role='button'>搜索</a>
    <a data-role='button'>帮助</a>
</div>
```
## 首部栏和尾部栏的定位
默认：inline 首部栏和尾部栏会随着屏幕滚动移出屏幕

固定定位：fixed首部固定在顶部，尾部定位在底部，不随内容滚动，添加data-fullscreen='true'到元素，点击屏幕，首部和尾部会滚出屏幕，全屏显示


```
<div data-role='footer' data-position='fixed'>
    <a data-role='button'>社区</a>
    <a data-role='button'>搜索</a>
    <a data-role='button'>帮助</a>
</div>
```
# 导航栏
data-role='navbar'，包含在头部或尾部中，其中添加a标签，自动换为按钮形式

```
<div data-role='footer' data-position='fixed'>
    <div data-role='navbar'>
        <a data-role='button'>社区</a>
        <a data-role='button'>搜索</a>
        <a data-role='button'>帮助</a>
    </div>
</div>
```
上面代码添加的导航条，默认水平排列，按钮宽度为文字宽度

使用无序列表，按钮宽度会平分屏幕宽度

```
<div data-role = "navbar">
	<ul>
		<li><a href="#">首页</a></li>
		<li><a href="#">首页</a></li>
		<li><a href="#">首页</a></li>
	</ul>
</div>
```
## 激活按钮
按钮被选中会有背景色变化，想激活当前页面的按钮 需添加class='ui-state-persist ui-btn-active'

```
<li><a href="#" class='ui-state-persist ui-btn-active'>次页</a></li>
```




