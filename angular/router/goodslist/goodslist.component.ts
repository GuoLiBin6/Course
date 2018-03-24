import { Component, OnInit, Input } from '@angular/core';
import { MyserviceService } from '../../services/myservice.service';
import { Router ,ActivatedRoute} from '@angular/router';
import { Http, Jsonp, Headers} from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-goodslist',
  templateUrl: './goodslist.component.html',
  styleUrls: ['./goodslist.component.css']
})
export class GoodslistComponent implements OnInit {

  constructor(public router:Router,public http:Http,public jsonp:Jsonp) { 

  }
  @Input() list:Array<any>;
  goodList;
  cb(){console.log()};
  url = 'http://datainfo.duapp.com/shopdata/getGoods.php?callback=JSONP_CALLBACK';
  ngOnInit() {
    // this.get.get(3);
    // console.log(this.get.list);
    this.jsonp.get(this.url).map(res => res.json()).subscribe(data=>{
      // console.log(data);
      this.goodList = data.splice(0,9);
      // console.log(this.goodList[0].goodsListImg);
    },err=>{
      console.log(err);
    });
  }
  goGood(idx){
    //query传值
    this.router.navigate(['/home/good/'],{queryParams:{id:idx}});
    //传值
    // this.router.navigate(['/good'],idx);
  }
}
