import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';
import { Jsonp, Http } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs';

import { AlertController } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController,public http:Http, public navParams: NavParams,public AlertCtrl:AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  tabs = TabsPage;
  name:null;
  pwd:null;
  changePage(){
    // this.http.post('http://datainfo.duapp.com/shopdata/userinfo.php',{status:'login',name:this.name,password:this.pwd}).map(res => res.json()).subscribe(data=>{
    //   if(data==0){
    //     let alert = this.AlertCtrl.create({
    //       title: '登录提示',
    //       subTitle: '用户名不存在',
    //       buttons: ['好的']
    //     });
    //     alert.present();
    //   }else if(data==1){
    //     let alert = this.AlertCtrl.create({
    //       title: '登录提示',
    //       subTitle: '密码错误',
    //       buttons: ['好的']
    //     });
    //     alert.present();
    //   }else{
    //      this.navCtrl.push(this.tabs);       
    //   }
      
    // },err=>{
    //   console.log(err);
    // });
    let alert = this.AlertCtrl.create({
      title: '登录提示',
      subTitle: '密码错误',
      buttons: ['好的']
    });
    alert.present();
  }

}
