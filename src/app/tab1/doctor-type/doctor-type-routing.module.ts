import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoctorTypePage } from './doctor-type.page';

const routes: Routes = [
  {
    path: '',
    component: DoctorTypePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoctorTypePageRoutingModule {}
