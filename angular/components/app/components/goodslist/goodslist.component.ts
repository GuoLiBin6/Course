import { Component, OnInit, Input } from '@angular/core';
import { MyserviceService } from '../../services/myservice.service';
@Component({
  selector: 'app-goodslist',
  templateUrl: './goodslist.component.html',
  styleUrls: ['./goodslist.component.css']
})
export class GoodslistComponent implements OnInit {

  constructor(public get:MyserviceService) { 

  }
  @Input() list:Array<any>;
  ngOnInit() {
    this.get.get(3);
    console.log(this.get.list);
  }
}
