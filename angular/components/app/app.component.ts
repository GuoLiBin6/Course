import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {


  // 插值表达式
  title = 'hello world';
  imgUrl = 'assets/imgs/m1.png';
  // 绑定属性
  id = 'box';
  // 循环
  arr = [1,2,3,4];

  //双向数据绑定
  str:string;

// changeStr(e){
//   str = e.target.value;
//   }
  fn(){
    console.log(123);
  }
  // ngSwitch
  fruit:any;
  changeFruit(v){
    console.log(v);
    this.fruit = v;
  }

  // 双向数据绑定
  txt = '新年快乐';

  //myTodolist
  myData:string;
  dataArr = [];
  dataArr2 = [];
  add(){
    this.dataArr.push(this.myData);
    this.myData = '';
  }
  del(e){
    this.dataArr.splice(e,1);
  }
  changeArr(e){
    this.dataArr2.push(this.dataArr[e]);
    this.dataArr.splice(e,1);
  }
  changeArr2(e){
    this.dataArr.push(this.dataArr2[e]);
    this.dataArr2.splice(e,1);
  }
  del2(e){
    this.dataArr2.splice(e,1);
  }

  // todolist
  tolist = [];
  comlist = [];
  content = '';
  addData(){
    this.tolist.push(this.content);
    this.content = '';
  }
  keyData(e){
    if(e.keyCode==13){
      this.tolist.push(this.content);
      this.content = '';
    }
  }
  delData(i){
  	this.tolist.splice(i,1);
  }
  change(i){
    this.comlist.push(this.tolist[i])
    this.tolist.splice(i,1);
  }
  delData2(i){
  	this.comlist.splice(i,1);
  }
  change2(i){
    this.tolist.push(this.comlist[i])
    this.comlist.splice(i,1);
  }
  // 组件交互
  arr1 = [1,2,3,4];
  goodslist = ['a','b','c','d','e','f'];

  agreed = 0;
  disagreed = 0;
  voters = ['张三', '李四', '王五'];
 
  onVoted(agreed: boolean) {
    agreed ? this.agreed++ : this.disagreed++;
  }
  world = 'world';
//mytodollist
  mytodolistArr = this.localGet('mytodolistArr');
  mytodolistArred = this.localGet('mytodolistArred');
  //input到进行队列
  pushArr(val){
    this.mytodolistArr.push(val);
    this.localSet('mytodolistArr',this.mytodolistArr);
  }
  //进行队列删除
  pushArred(val){
    this.mytodolistArr.splice(val,1);
    this.localSet('mytodolistArr',this.mytodolistArr);
  }
  //已完成队列删除
  rmArred(val){
    this.mytodolistArred.splice(val,1);
    this.localSet('mytodolistArred',this.mytodolistArred);
  }
  //已完成队列到进行队列
  moveArred(val){
    this.mytodolistArr.push(this.mytodolistArred[val]);
    this.localSet('mytodolistArr',this.mytodolistArr);
    this.mytodolistArred.splice(val,1);
    this.localSet('mytodolistArred',this.mytodolistArred);
  }
  //进行队列到已完成队列
  moveArrING(val){
    this.mytodolistArred.push(this.mytodolistArr[val]);
    this.localSet('mytodolistArred',this.mytodolistArred);
    this.mytodolistArr.splice(val,1);
    this.localSet('mytodolistArr',this.mytodolistArr);
  }
  localSet(str,arr){
    localStorage.setItem(str,JSON.stringify(arr));
  }
  localGet(arr){
    return JSON.parse(localStorage.getItem(arr));
  }
}
