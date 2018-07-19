import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ItemDetailsPage } from '../item-details/item-details';
import { HelloIonicPage } from '../hello-ionic/hello-ionic';
// import { ionicBootstrap } from 'ionic-angular';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items = [];
  tabRoot1=ItemDetailsPage;
  tabRoot2=HelloIonicPage;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // this.tab1=ItemDetailsPage;
    // this.tab2=HelloIonicPage;
    for(let i=0;i<8;i++){
      var obj = {
        'title':"资产包转让",
        'imgURL':'../../assets/imgs/apt.png',
        'place':'地区:',
        'placeVal':'北京',
        'source':'来源',
        'sourceVal':'银行',
        'type':'类型',
        'typeVal':'抵押',
        'amount':'金额',
        'amountVal':i+'万',
        'proportion':'佣金比例',
        'proVal':'30%-50%'

      }
      this.items.push(obj);
    }
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad HomePage');
  // }
  icons="search-info";
  
  fun(){
    console.log(this.icons);
  }
  doInfinite(infiniteScroll){
    setTimeout(()=>{
      for(let i=0;i<8;i++){
        this.items.push({
          'title':"资产包转让",
          'imgURL':'../../assets/imgs/apt.png',
          'place':'地区:',
          'placeVal':'北京',
          'source':'来源',
          'sourceVal':'银行',
          'type':'类型',
          'typeVal':'抵押',
          'amount':'金额',
          'amountVal':i+'万',
          'proportion':'佣金比例',
          'proVal':'30%-50%'
  
        });
      }
      infiniteScroll.complete();
    },1000);
    
  }

}
