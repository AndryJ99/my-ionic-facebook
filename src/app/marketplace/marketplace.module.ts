import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MarketplacePageRoutingModule } from './marketplace-routing.module';

import { MarketplacePage } from './marketplace.page';
import {HomePageModule} from '../home/home.module';
import {MyProductsMPLSComponent} from '../my-products-mpls/my-products-mpls.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        MarketplacePageRoutingModule,
        HomePageModule
    ],
  declarations: [MarketplacePage, MyProductsMPLSComponent]
})
export class MarketplacePageModule {}
