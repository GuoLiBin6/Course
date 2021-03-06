

/* _.each(list, iteratee, [context]) 迭代列表的每个元素,依次运行iteratee函数 */
$('.each').click(function(){ 
    //对象
    _.each({one:1,two:2,three:3},alert);
    //数组
    _.each([1,2,3],alert);
 });

 /*  _.map(list, iteratee, [context]) 通过转换函数iteratee映射列表中的每个值,生成一个新的值数组 */ 
$('.map').click(function(){
     //对象
    let map_Object = _.map({one:1,two:2,three:3},function(num){return num*3});
    alert(map_Object);//[3,6,9];
     //数组
     let map_Array = _.map([1,2,3],function(num){return num*3});
     alert(map_Array);//[3,6,9];
});

/* _.reduce(list, iteratee, [memo], [context]) 将列表按iteratee函数归结为单个值,传递memo参数则memo会和列表元素一起参与iteratee函数运算 */
$('.reduce').click(function(){
    //对象
    let sum1 = _.reduce({one:1,two:2,three:3},function(memo,num){return memo + num;});
    alert(sum1);
    //数组
    let sum2 = _.reduce([1,2,3],function(memo,num){return memo + num;});
    alert(sum2);
    //传递memo
    let sum3 = _.reduce([1,2,3],function(memo,num){return memo + num;},2);
    alert(sum3);
});

/* reduceRight _.reduceRight(list, iteratee, [memo], [context]) 与reduce相反方向归结 */
$('.reduceRight').click(function(){
    //对象
    let sum1 = _.reduceRight({one:1,two:2,three:3},function(memo,num){return memo + num;});
    alert(sum1);
    //数组
    let sum2 = _.reduceRight([1,2,3],function(memo,num){return memo + num;});
    alert(sum2);
    //传递memo
    let sum3 = _.reduceRight([1,2,3],function(memo,num){return memo + num;},2);
    alert(sum3);
});

/* _.find(list, predicate, [context]) 找到符合predicate函数测试的第一个值,没有则返回undefined */ 
$('.find').click(function(){
    //对象
    let even = _.find({one:1,two:2,three:3},function(num){return num%2 == 0});
    alert(even);
    //数组 略
});

/* _.filter(list, predicate, [context]) 返回一个数组,包含通过predicate测试的所有值 */
$('.filter').click(function(){
    //对象
    let evens = _.filter({one:1,two:2,three:3,four:4},function(num){return num%2 == 0});
    alert(evens);
    //数组

});

/* _.findWhere(list, properties) 返回列表中与properties中所有键值对匹配的第一个值 */
$('.findWhere').click(function(){
    //对象
    let place1 = _.findWhere({obj1:{newsroom:'new',name:'lili'},obj2:{newsroom:'new home',name:'lili'}}, {newsroom: "new"});
    alert(place1)
    //数组
    let place2 = _.findWhere([{newsroom:'new',name:'lili'},{newsroom:'new',name:'lala'},{newsroom:'old',name:'benben'}], {newsroom: "new"});
    console.log(place2)
});

/* _.where(list, properties) 返回列表中与properties中所有键值对匹配的所有值 */
$('.where').click(function(){
     //对象
     let place1 = _.where({obj1:{newsroom:'new',name:'lili'},obj2:{newsroom:'new home',name:'lili'}}, {newsroom: "new"});
     alert(place1)
     //数组
     let place2 = _.where([{newsroom:'new',name:'lili'},{newsroom:'new',name:'lala'},{newsroom:'old',name:'benben'}], {newsroom: "new"});
     alert(place2)

});

/* _.reject(list, predicate, [context])  返回列表中没有通过predicate测试的值 */
$('.reject').click(function(){
    //对象
    let reject_object = _.reject({one:1,two:2,three:3},function(num){return num%2 == 0});
    alert(reject_object);
    //数组
    let reject_array = _.reject([1,2,3],function(num){return num%2 == 0});
    alert(reject_array)
});

/* _.every(list, [predicate], [context]) 如果列表中每个值都通过predicate测试,返回真,否则返回假 */
$('.every').click(function(){
    //对象
    let every_object = _.every({one:1,two:2,three:3},function(num){return num%2 == 0});
    alert(every_object);
    //数组
    let every_array = _.every([1,5,3],function(num){return num%2 == 1});
    alert(every_array);
});

/*_.some(list, [predicate], [context]) 如果列表中有一个值通过predicate测试,返回真,否则返回假 */
$('.some').click(function(){
    //对象
    let some_object = _.some({one:1,two:2,three:3},function(num){return num%2 == 0});
    alert(some_object);
    //数组
    let some_array = _.some([1,5,3],function(num){return num%2 == 0});
    alert(some_array);
});


/* _.contains(list, value, [fromIndex]) 如果列表中存在value值,返回真,否则返回假 */
$('.contains').click(function(){
    //对象
    let object = _.contains({one:1,two:2,three:3},3);
    alert(object);
    //数组
    let array = _.contains([1,5,3],2);
    alert(array);
});

/* _.invoke(list, methodName, *arguments) list列表的每个值调用methodName方法 */
$('.invoke').click(function(){
    //对象
    let object = _.invoke({one:[2,1],two:[3,4,1]},'sort');
    alert(object);
    //数组 略  
});

/* _.pluck(list, propertyName) 提取某个属性的所有属性值 */
$('.pluck').click(function(){
    //对象
    let object = _.pluck({one:{name:'1'},two:{name:'2'}},'name');
    alert(object);
    //数组
    let array = _.pluck([{name:'1'},{name:'2'}],'name');
    alert(array);
});

/* _.max(list, [iteratee], [context])  返回列表最大值,若有iteratee,则返回iteratee函数选中值的最大值 */
$('.max').click(function(){
    //对象
    let object = _.max({one:1,two:2});
    alert(object);
    //数组
    let array = _.max([1,2]);
    alert(array);
});


/* _.min(list, [iteratee], [context])   返回列表最小值,若有iteratee,则返回iteratee函数选中值的最小值 */
$('.min').click(function(){
    //对象
    let object = _.min({one:{name:'11',value:1},two:{name:'22',value:2}},function(obj){return obj.value});
    alert(object);
    //数组
    let array = _.min([1,2]);
    alert(array);
});

/* _.sortBy(list, iteratee, [context]) list每个值按iteratee函数运行后再升序排列 */
$('.sortBy').click(function(){
    //对象
    let object = _.sortBy({one:{name:'11',value:2},two:{name:'22',value:1}},'value');
    alert(object);
    console.log(object)
    //数组
    let array = _.sortBy([1,2,8,6,4]);
    alert(array);
});

/* _.groupBy(list, iteratee, [context])  按照通过iteratee的每个值的结果分组*/
$('.groupBy').click(function(){
    //对象 略
   
    //数组
    let array = _.groupBy([1.2,3.1,1.3],function(num){return Math.floor(num)});
    console.log(array);
});

/* _.indexBy(list, iteratee, [context])  给定一个列表,以及一个为列表中的每个元素（或属性名称）返回一个键的iteratee函数,返回一个带有每个项目索引的对象。就像groupBy一样,但是当你知道你的密钥是唯一的时候。*/
$('.indexBy').click(function(){
    //对象 略
   
    //数组
    let array = _.groupBy([{name:'moe',age:40},{name:'larry',age:50},{name:'curly',age:60}],'age');
    console.log(array);
});

/* _.countBy(list, iteratee, [context])  按照通过iteratee的每个值的结果分组,返回每个组中元素个数*/
$('.countBy').click(function(){
    //对象 略
   
    //数组
    let array = _.countBy([1.2,3.1,1.3],function(num){return num>2?'大于2':'小于2';});
    console.log(array);
});

/* _.shuffle(list) 返回列表的混洗副本,就是将列表的元素顺序打乱*/
$('.shuffle').click(function(){
    //对象 略
   
    //数组
    let array = _.shuffle([1.2,3.1,1.3]);
    console.log(array);
});

/* _.sample(list, [n])  随机抽取n个列表元素返回*/
$('.sample').click(function(){
    //对象 略
   
    //数组
    let array = _.sample([1.2,3.1,1.3],2);
    console.log(array);
});

/* _.toArray(list)  将可迭代的列表创建为一个数组，用于转换参数对象*/
$('.toArray').click(function(){
    //对象 略
   
    //数组
    let array = _.toArray('wahaha');
    console.log(array);
});

/* _.size(list)  返回列表中值的个数*/
$('.size').click(function(){
    //对象 略
   
    //数组
    let array = _.size('wahaha');
    console.log(array);
});

/* _.partition(list, predicate)  通过predicate函数将列表拆为符合条件和不符合条件的两个数组*/
$('.partition').click(function(){
    //对象 略
   
    //数组
    let array = _.partition('wahaha',function(str){return str == 'h'});
    console.log(array);
});

/* _.compact(list) 删除列表中所有为假的值，将剩余列表返回 false，null,0,'',undefined,NaN都为假*/
$('.compact').click(function(){
    //对象 略
   
    //数组
    let array = _.compact([1,0,NaN,'aaa'],function(str){return str == 'h'});
    console.log(array);
});
