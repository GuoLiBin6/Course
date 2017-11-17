# 可折叠块
允许隐藏或显示内容，用于存储信息


```
            <!--可折叠块-->
	            <div data-role="collapsible">
	            	<h1>可折叠块</h1>
	            	<p>可折叠内容</p>
	            </div>
	            <!--可折叠块集-->
	            <div data-role="collapsible-set">
	            	<div data-role="collapsible">
	            		<h1>可折叠块</h1>
	            		<p>可折叠内容</p>
	            	</div>
	            	<div data-role="collapsible">
	            		<h1>可折叠块</h1>
	            		<p>可折叠内容</p>
	            	</div>
	            	<div data-role="collapsible">
	            		<h1>可折叠块</h1>
	            		<p>可折叠内容</p>
	            	</div>
	            </div>
	            <!--给可折叠块更换图标-->
	            <div data-role="collapsible" data-collapsed-icon="arrow-d" data-expanded-icon="arrow-u">
	            	<h1>可折叠块</h1>
	            	<p>可折叠内容</p>
	            </div>
```
# 网格

```
<div class="ui-grid-b">
    <div class="ui-block-a">aa</div>
    <div class="ui-block-b">bb</div>
    <div class="ui-block-c">cc</div>
</div>
```
通过css自定义添加样式

```
<style>
    .ui-block-a,.ui-block-b,.ui-block-c{
        background-color:#fff;
        text-alaign:center
    }
</style>
```



