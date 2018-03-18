import { Component, OnInit, Input } from '@angular/core';
import { MyserviceService } from '../../services/myservice.service';
@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.css']
})
export class ComponentsComponent implements OnInit {
  //依赖注入
  constructor(public getData:MyserviceService) { }

  @Input() title ;

  //服务
  // getData = new MyserviceService();
  ngOnInit() {
    console.log('ngOnInit');
    this.getData.get(2);
    console.log(this.getData.list);
    this.getData.getIndex(0);
    console.log(this.getData.index);
  }
  ngOnChanges(){
    console.log('ngOnChange');
  }
  ngDoCheck(){
    console.log('ngDoCheck');
  }
  data = [1];
  clickFun(d){
    console.log(d[0]);
    d[0] = 2;
    console.log(d[0]);
  }
  //使用服务

}
