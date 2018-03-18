import { Injectable } from '@angular/core';

@Injectable()
export class MytodolistService {

  constructor() { }
  arr = this.localGet('mytodolistArr');
  arred = this.localGet('mytodolistArred');
  localGet(str){
      var arrTemp = JSON.parse(localStorage.getItem(str));
      if(!arrTemp){
        arrTemp = [];
      }
      return arrTemp;
  }

  localSet(str,val){
      localStorage.setItem(str,JSON.stringify(val));
  }

}
