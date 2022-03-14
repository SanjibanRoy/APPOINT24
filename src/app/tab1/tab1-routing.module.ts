import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
  },
  {
    path: 'doctor',
    loadChildren: () => import('./doctor/doctor.module').then( m => m.DoctorPageModule)
  },
  {
    path: 'doctor-type',
    loadChildren: () => import('./doctor-type/doctor-type.module').then( m => m.DoctorTypePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
