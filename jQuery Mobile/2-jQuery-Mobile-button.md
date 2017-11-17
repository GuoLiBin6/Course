# 按钮
## 创建方式
### 使用button元素

```
<button>按钮</button>
```

### 使用input元素

```
<input type = "button" value = "按钮"/>
```

### 使用a元素


```
<a href = "#" data-role = "button">访问其他页面</a>

```
## 内联按钮
默认情况，按钮占整个屏幕宽度，设置和内容一样宽，需设置data-inline="true"

```
<a href = "#" data-role = "button" data-inline="true">访问其他页面</a>
```
## 组合按钮
默认组合按钮垂直排列，data-type="horizontal|vertical"

```
//水平组合按钮
<div data-role='controlgroup' data-type='horizontal'>
    <a href = "#" data-role = "button">访问其他页面</a>
    <a href = "#" data-role = "button">访问其他页面</a>
    <a href = "#" data-role = "button">访问其他页面</a>
</div>

//垂直组合按钮
<div data-role='controlgroup' data-type='vertical'>
    <a href = "#" data-role = "button">访问其他页面</a>
    <a href = "#" data-role = "button">访问其他页面</a>
    <a href = "#" data-role = "button">访问其他页面</a>
</div>


```
## 后退按钮
data-rel="back"

```
<a href = "#" data-role = "button" data-rel="back">返回</a>
```

## 按钮其他属性

属性 | 值 |描述
---|---|---
data-corners | true\|false |是否圆角
data-mini | true\|false |是否更小
data-shadow | true\|false |是否阴影

# 按钮图标
data-icon='value'
## 常用值

```
<a href = "#" data-role = "button" data-icon="search">搜索</a>

```

属性值 | 描述
---|---
dat-icon="arrow-l" | 左箭头 
dat-icon="arrow-r" | 右箭头
dat-icon="delete" | 删除
dat-icon="info" | 信息
dat-icon="home" | 首页
dat-icon="back" | 后退
dat-icon="search" | 搜索
dat-icon="grid" | 网格

## 定位图标
可以规定图标在按钮的什么部位

 data-iconpos=“value”
 
 value=top | botton | left | right
 
```
<a href = "#" data-role = "button" data-icon="search" data-iconpos="top">搜索</a>
```
## 只显示图标
data-iconpos=“notext”

## 自定义按钮图标
图标尺寸为18*18px

+ 设置按钮图标样式

```
<style>
    .ui-icon-circle{
        background-image:url(img/circle.png);
    }
</style>
```
+ 引用按钮图标

```
data-icon='circle'
```












