import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'tab1/doctor',
        loadChildren: () => import('../tab1/doctor/doctor-routing.module').then(m => m.DoctorPageRoutingModule)
      },
      {
        path: 'tab1/doctorType',
        loadChildren: () => import('../tab1/doctor-type/doctor-type-routing.module').then(m => m.DoctorTypePageRoutingModule)
      },
      {
        path: 'tab1/prebooking',
        loadChildren: () => import('../tab1/prebooking/prebooking-routing.module').then(m => m.PrebookingPageRoutingModule)
      },
      {
        path: 'tab1/booking',
        loadChildren: () => import('../tab1/booking/booking-routing.module').then(m => m.BookingPageRoutingModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
