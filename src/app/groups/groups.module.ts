import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GroupsPageRoutingModule } from './groups-routing.module';

import { GroupsPage } from './groups.page';
import {HomePageModule} from '../home/home.module';
import {MyPostComponent} from '../my-post/my-post.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        GroupsPageRoutingModule,
        HomePageModule
    ],
    declarations: [GroupsPage, MyPostComponent]
})
export class GroupsPageModule {}
