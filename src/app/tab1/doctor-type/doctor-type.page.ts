import { Component, OnInit } from '@angular/core';
import { ToastController, NavController } from '@ionic/angular';
@Component({
  selector: 'app-doctor-type',
  templateUrl: './doctor-type.page.html',
  styleUrls: ['./doctor-type.page.scss'],
})
export class DoctorTypePage implements OnInit {

  constructor(  private nav: NavController,) { }

  ngOnInit() {
  }
  options = {
    centeredSlides: true,
    loop: true,
    spaceBetween: -100,
  };
  goto(){
    this.nav.navigateForward('tabs/tab1/doctor');
  }
}
