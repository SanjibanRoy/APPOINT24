import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.page.html',
  styleUrls: ['./doctor.page.scss'],
})
export class DoctorPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  options = {
    centeredSlides: true,
    loop: true,
    spaceBetween: -100,
  };
}
