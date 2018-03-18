import { Component, OnInit, NgModule, Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-my-input',
  templateUrl: './my-input.component.html',
  styleUrls: ['./my-input.component.css']
})
export class MyInputComponent implements OnInit {
  @Input() name:string;
  @Output() pushtoArr = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  content = '';

  clickFun(){
    if(this.content == '')
      return;
    this.pushtoArr.emit(this.content);
    this.content = '';
    var a = document.querySelector('input');
    a.value = '';
    a.focus();
  }

}
