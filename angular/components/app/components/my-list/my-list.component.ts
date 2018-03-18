import { Component, OnInit ,Input ,EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-my-list',
  templateUrl: './my-list.component.html',
  styleUrls: ['./my-list.component.css']
})
export class MyListComponent implements OnInit {
  @Input() arrFromF:Array<any>;
  @Input() arrFromFed:Array<any>;
  @Output() moveFromArrING = new EventEmitter();
  @Output() pushtoArred = new EventEmitter(); 
  @Output() moveFromArred = new EventEmitter();
  @Output() rmFromArred = new EventEmitter();
  constructor() { }

  ngOnInit() {
    
  }
  rmING(idx){
    this.pushtoArred.emit(idx);
    // this.arrFromF.splice(idx,1);
  }
  moveING(idx){
    this.moveFromArrING.emit(idx);
    // this.arrFromF.splice(idx,1);
  }
  moveED(idx){
    this.moveFromArred.emit(idx);
    // this.arrFromFed.splice(idx,1);
  }
  rmED(idx){
    this.rmFromArred.emit(idx);
  }
}
