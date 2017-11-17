# 列表
## 列表控件
给ul或ol添加data-role='listview'属性，在每个li中添加链接，就可以点击

```
<ul data-role = "listview">
	 <li><a href="#pagetwo">跳转页面</a></li>
	 <li><a href="#">跳转页面</a></li>
	 <li><a href="#">跳转页面</a></li>
	 <li><a href="#">跳转页面</a></li>
</ul>
```
## 圆角样式
给ul或li添加data-inset='true'
```
<ul data-role = "listview" data-inset='true'>
	 <li><a href="#pagetwo">跳转页面</a></li>
	 <li><a href="#">跳转页面</a></li>
	 <li><a href="#">跳转页面</a></li>
	 <li><a href="#">跳转页面</a></li>
</ul>
```
## 列表分组
给li添加data-role='list-divider'

```
<ul data-role = "listview" data-inset='true'>
     <li data-role="list-divider" data-theme="b">分组一</li>
	 <li><a href="#pagetwo">跳转页面</a></li>
	 <li><a href="#">跳转页面</a></li>
	 <li data-role="list-divider" data-theme="b">分组二</li>
	 <li><a href="#">跳转页面</a></li>
	 <li><a href="#">跳转页面</a></li>
</ul>
```
## 字母顺序排列的列表
给ol或ul添加 data-autodividers='true'

```
<ul data-role = "listview" data-inset = "true" data-autodividers="true">	            	
	 <li><a href="#pagetwo">ANGL</a></li>
	 <li><a href="#">ALS</a></li>	            	
	 <li><a href="#">Caa</a></li>
	 <li><a href="#">BDD</a></li>
</ul>
```
## 列表搜索过滤
给ul或ol设置data-filter='true'属性，data-filter-placeholser='value'添加提示符
```
<ul data-role = "listview" data-inset = "true" data-autodividers="true" data-filter="true">	            	
	 <li><a href="#pagetwo">ANGL</a></li>
	 <li><a href="#">ALS</a></li>	            	
	 <li><a href="#">Caa</a></li>
	 <li><a href="#">BDD</a></li>
</ul>
```
## 列表缩略图
给li添加img元素

img大于16\*16px会自动变为80\*80大小

```
<li>
    <a href="#">
        <img src="img/foo_pic_add.png" />
	    <h1>缩略图列表</h1>
        <p>内容</p>
    </a>
</li>
```
## 列表图标
给img元素使用

```
<li><a href="#"><img src="img/foo_pic_add.png" class='ui-li-icon'/>跳转页面</a></li>
```
## 拆分按钮
在li中再添加一个a元素

```
<li>
    <a href="#">跳转页面</a>
    <a></a>
</li>
```
## 气泡数字
给a添加行内元素\<span class="ui-li-count">5\</span>

```
<li><a href="#">跳转页面<span class="ui-li-count">5</span></a></li>
```
# 表单
## form
设置method和action属性
```
<form method='post' action="value">

</form>
```
## label
每个表单元素有一个label，用class=’ui-hidden-addessible‘将其隐藏


```
<label for='fname' class='ui-hidden-accessible'>姓名：</label>
<input type='text' name='fname' id="fname" placeholder="姓名：">
```
## fieldcontain
将label和表单元素放在一起

```
            <form method='post' action='value'>
	            	<div data-role="fieldcontain">
	            		<label for="fname" class="ui-hidden-accessible">文本输入框</label>
	            		<input type="text" name="fname" id="fname" placeholder="姓名："/>
	            	</div>
	            	<div data-role="fieldcontain">
	            		<label for="textarea" class="ui-hidden-accessible">多行文本域</label>
	            		<input type="textarea" cols="40" rows="8" name="textarea" id="textarea"/>
	            	</div>
	            	<div data-role="fieldcontain">
	            		<label for="search" class="ui-hidden-accessible">搜索输入框</label>
	            		<input type="search" name="search" id="search"/>
	            	</div>
	            	<div data-role="fieldcontain">
	            		<label for="range" class="ui-hidden-accessible">滑竿</label>
	            		<input type="range" name="range" id="range" value="0" min="0" max="100"/>
	            	</div>
	            	<div data-role="fieldcontain">
	            		<label for="number" class="ui-hidden-accessible">数字</label>
	            		<input type="number" name="number" id="number"/>
	            	</div>
	            	<!--选择列表-->
	            	<div data-role="fieldcontain">
	            		<label for="select">选择列表</label>
	            		<select data-native-menu="false" id="select">
	            			<optgroup label="数字">
	            				<option>1</option>
	            				<option>2</option>
	            				<option>3</option>
	            			</optgroup>
	            			<optgroup label="字母">
	            				<option>a</option>
	            				<option>b</option>
	            				<option>c</option>
	            			</optgroup>
	            		</select>
	            			
	            	</div>
	            	<!--开关-->
	            	<div data-role="fieldcontain">
	            		<label for="slider">开关</label>
	            		<select data-native-menu="false" id="slider" data-role = "slider">
	            			<option value="off">开</option>
	            			<option value="on">关</option>
	            		</select>
	            			
	            	</div>
	            	<!--单选按钮-->
	            	<div data-role="fieldcontain">
	            		<fieldset data-role="controlgroup">
	            			<input type="radio" name="radio-choice-1" id="radio-choice-1" value="choice-1">
	            			<label for="radio-choice-1">蓝</label>
	            			
	            			<input type="radio" name="radio-choice-1" id="radio-choice-2" value="choice-1">
	            			<label for="radio-choice-2">蓝</label>
	            			
	            			<input type="radio" name="radio-choice-1" id="radio-choice-3" value="choice-1">
	            			<label for="radio-choice-3">蓝</label>
	            		</fieldset>
	            	</div>
	            	<!--多选按钮-->
	            	<div data-role="fieldcontain">
	            		<div data-role="controlgroup">
	            			<input type="checkbox" name="radio-choice-1" id="checkbox-choice-1" value="choice-1">
	            			<label for="checkbox-choice-1">蓝</label>
	            			
	            			<input type="checkbox" name="radio-choice-1" id="checkbox-choice-2" value="choice-1">
	            			<label for="checkbox-choice-2">蓝</label>
	            			
	            			<input type="checkbox" name="radio-choice-1" id="checkbox-choice-3" value="choice-1">
	            			<label for="checkbox-choice-3">蓝</label>
	            		</div>
	            	</div>
	            	
	            </form>
```








