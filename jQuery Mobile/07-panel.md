# 面板
data-role='panel',panel标记必须位于头部、内容、底部组成的页面之前或之后

```
<div data-role='panel' id='mypanel'>
    滑动面板
</div>
```
在想要打开面板的地方添加链接

```
<a href='#mypanel' class='ui-btn ui-btn-inline'>打开面板</a>
```
## 设置面板位置
给面板标记添加data-position="right"属性
## 设置面板展示效果
给面板标记添加data-display=""属性

属性 | 效果
---|---
overlay | 面板在内容上显示
push | 面板和内容同时推动
revelay | 面板在内容下显示



