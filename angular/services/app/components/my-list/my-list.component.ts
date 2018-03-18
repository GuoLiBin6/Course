import { Component, OnInit ,Input ,EventEmitter, Output} from '@angular/core';
import { MytodolistService } from '../../services/mytodolist.service';
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
  constructor(public localSt:MytodolistService) { }

  ngOnInit() {
    
  }
  mytodolistArr = this.localSt.arr;
  mytodolistArred = this.localSt.arred;
  rmING(idx){
    // this.pushtoArred.emit(idx);
    this.mytodolistArr.splice(idx,1);
    this.localSt.localSet('mytodolistArr',this.mytodolistArr);
  }
  moveING(idx){
    // this.moveFromArrING.emit(idx);
    this.mytodolistArred.push(this.mytodolistArr[idx]);
    this.localSt.localSet('mytodolistArred',this.mytodolistArred);
    this.mytodolistArr.splice(idx,1);
    this.localSt.localSet('mytodolistArr',this.mytodolistArr);
    // var arrTemp = this.localSt.localGet('mytodolistArr');
    // this.localSt.localSet('mytodolistArred',arrTemp[idx]);
    // this.localSt.localRm('mytodolistArr',idx);
  }
  moveED(idx){
    this.mytodolistArr.push(this.mytodolistArred[idx]);
    this.localSt.localSet('mytodolistArr',this.mytodolistArr);
    this.mytodolistArred.splice(idx,1);
    this.localSt.localSet('mytodolistArred',this.mytodolistArred);
    // var arrTemp = this.localSt.localGet('mytodolistArred');
    // this.localSt.localSet('mytodolistArr',arrTemp[idx]);
    // this.localSt.localRm('mytodolistArred',idx);
  

  }
  rmED(idx){
    // this.rmFromArred.emit(idx);
    this.mytodolistArred.splice(idx,1);
    this.localSt.localSet('mytodolistArred',this.mytodolistArred);
    // this.localSt.localRm('mytodolistArred',idx);
  }
}
