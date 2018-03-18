import { Component, OnInit, NgModule, Input, EventEmitter, Output} from '@angular/core';
import { MytodolistService } from '../../services/mytodolist.service';
@Component({
  selector: 'app-my-input',
  templateUrl: './my-input.component.html',
  styleUrls: ['./my-input.component.css']
})
export class MyInputComponent implements OnInit {
  @Input() name:string;
  @Output() pushtoArr = new EventEmitter();
  constructor(public localSt:MytodolistService) { }

  ngOnInit() {
  }

  content = '';

  clickFun(){
    if(this.content == '')
      return;
    //对服务的arr操作，并存到本地
    this.localSt.arr.push(this.content);
    this.localSt.localSet('mytodolistArr',this.localSt.arr);
    this.content = '';
    var a = document.querySelector('input');
    a.value = '';
    a.focus();
  }

}
