import { Component } from '@angular/core';
import { ToastController, NavController } from '@ionic/angular';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  options = {
    centeredSlides: true,
    slidesPerView: 1,
    spaceBetween: -60,
  };

  categories = {
    slidesPerView: 2.5,
  };
  constructor(    private nav: NavController,) {}
  goto(){
    this.nav.navigateForward('tabs/tab1/doctorType');
  }
}
