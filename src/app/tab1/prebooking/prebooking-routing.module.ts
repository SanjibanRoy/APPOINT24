import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrebookingPage } from './prebooking.page';

const routes: Routes = [
  {
    path: '',
    component: PrebookingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrebookingPageRoutingModule {}
