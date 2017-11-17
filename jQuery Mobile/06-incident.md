# 事件

## 触控事件


事件名 | 含义
---|---
tap | 点击屏幕发生
taphold | 长按屏幕
swipe   |   页面被垂直或水平拖动
swiperleft| 页面被拖动到左边
swiperright | 页面被拖动到右边


```
$(document).ready(function(){
   $('#listview').on('click','li',function(){
        $(this).hide();
    });
});
```
## 滚动

```
$(document).on('scrollstart',function(){
    alert('开始滚动');
});
```
## 方向

```
$(window).on('orientationchange',function(e){
    alert('屏幕方向改变');
});
```
## 页面事件

pagebeforeshow | 页面显示前
---|---
pagebeforehide|页面被隐藏前
pageshow|页面显示
pagehide|页面隐藏
pagebeforecreate|页面创建前
pagecreate|页面创建
pageinit|初始化页面
pagebeforechange|页面改变之前
pagechange|页面改变
pagebeforeload|预加载
pageload|页面加载
pageloadfailed|加载失败







