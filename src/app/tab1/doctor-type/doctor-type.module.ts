import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DoctorTypePageRoutingModule } from './doctor-type-routing.module';

import { DoctorTypePage } from './doctor-type.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DoctorTypePageRoutingModule
  ],
  declarations: [DoctorTypePage]
})
export class DoctorTypePageModule {}
