import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController, NavController } from '@ionic/angular';
@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.page.html',
  styleUrls: ['./doctor.page.scss'],
})
export class DoctorPage implements OnInit {

  constructor(public alertController: AlertController, private nav: NavController,) { }

  ngOnInit() {
  }
  options = {
    centeredSlides: true,
    loop: true,
    spaceBetween: -100,
  };
  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Choose a Date',
      inputs: [
        
        {
          name: 'PLease Select a Date',
          type: 'date',
          min: '2022-03-16',
          max: '2022-03-18'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: () => {
            this.nav.navigateForward('tabs/tab1/prebooking');
          }
        }
      ]
    });

    await alert.present();
  }
  // async presentAlertConfirm() {
  //   const alert = await this.alertController.create({
  //     cssClass: 'my-custom-class',
  //     header: 'Confirm!',
  //     message: 'Are your sure ',
  //     buttons: [
  //       {
  //         text: 'Cancel',
  //         role: 'cancel',
  //         cssClass: 'secondary',
  //         id: 'cancel-button',
  //         handler: (blah) => {
  //           console.log('Confirm Cancel: blah');
  //         }
  //       }, {
  //         text: 'Okay',
  //         id: 'confirm-button',
  //         handler: () => {
  //           console.log('Confirm Okay');
  //         }
  //       }
  //     ]
  //   });

  //   await alert.present();
  // }
}
