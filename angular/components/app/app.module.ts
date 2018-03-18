import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms'; 

import { AppComponent } from './app.component';
import { TodolistComponent } from './components/todolist/todolist.component';
import { GoodslistComponent } from './components/goodslist/goodslist.component';
import { VoterComponent } from './components/voter/voter.component';
import { ComponentsComponent } from './components/components/components.component';
import { MyInputComponent } from './components/my-input/my-input.component';
import { MyListComponent } from './components/my-list/my-list.component';
import { MyserviceService } from './services/myservice.service';


@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    GoodslistComponent,
    VoterComponent,
    ComponentsComponent,
    MyInputComponent,
    MyListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [MyserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
