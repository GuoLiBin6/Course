import { Injectable } from '@angular/core';

@Injectable()//装饰器
export class MyserviceService {

  constructor() { }
  list = [];
  index:number;
  getIndex(i){
    this.index = i;
  }
  get(val){
    console.log('printf myservice');
    this.list.push(val+1);
  }
}
