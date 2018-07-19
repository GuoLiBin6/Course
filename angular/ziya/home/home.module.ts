import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import { ItemDetailsPage } from '../item-details/item-details';
// import { ionicBootstrap } from 'ionic-angular'

@NgModule({
  declarations: [
    HomePage,
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
  ],
})
export class HomePageModule {
  tabRoot1 = ItemDetailsPage;
}
