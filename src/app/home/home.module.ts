import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import {MyHeaderComponent} from '../my-header/my-header.component';
import {MyPostComponent} from '../my-post/my-post.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
    exports: [
        MyHeaderComponent,
        MyPostComponent
    ],
  declarations: [HomePage, MyHeaderComponent, MyPostComponent]
})
export class HomePageModule {}
