import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrebookingPageRoutingModule } from './prebooking-routing.module';

import { PrebookingPage } from './prebooking.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrebookingPageRoutingModule
  ],
  declarations: [PrebookingPage]
})
export class PrebookingPageModule {}
