# JSON
方法


```
//stringify(data,replacer?)将数据转换为JSON格式的数据
//对象
var o1 = {
    a:[1,2],
    b:true,
    c:[3,4,"x",{y:34,z:56}],
    d:5,
    e:{name:"Jack"},
    f:function(){console.log(12);}, 
    h:0x12
};
var jsonStr1 = JSON.stringify(o1);
console.log(jsonStr1);
//{"a":[1,2],"b":true,"c":[3,4,"x",{"y":34,"z":56}],"d":5,"e":{"name":"Jack"},"h":18}
console.log(o1);

//数组
var a1 = [1,"x",true,{y:2,z:3}];
var jsonStrArr1 = JSON.stringify(a1);
console.log(jsonStrArr1);//[1,"x",true,{"y":2,"z":3}]
console.log(a1);

//replacer 节点转换函数，在值被转为字符串之前转换树节点的值
var jsonStr2 = JSON.stringify(o2,function (key,value) {
    if(value === true){
        value = false;
    }
    if((value instanceof Array)&&value.length == 4){
        value[0] = "Hi";
    }
    if(key === "a"){
        console.log("find key a");
        value = 12345;
    }
    if(key === "z"){
        console.log("find key z");
        value = "zzz";
    }
    return value;
});
console.log(jsonStr2);
console.log(o2);


```

```
parse（data，reviver？）解析JSON格式的数据

//reviver参数是可选的，是一个节点访问函数，可用来转换解析后的数据
var o5 = JSON.parse(jsonStr5,function (key,value) {
    if(typeof value === "boolean"){
        value = "ChangeToString";
    }
    if(key == "c"){//迭代的遍历某个希望寻找的数据属性，可用于数据信息的查找
        console.log("c:",value);
    }
    return value;
});
console.log(o3);
console.log(o4);
console.log(o5);
```


