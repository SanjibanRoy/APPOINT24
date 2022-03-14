import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctor-type',
  templateUrl: './doctor-type.page.html',
  styleUrls: ['./doctor-type.page.scss'],
})
export class DoctorTypePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  options = {
    centeredSlides: true,
    loop: true,
    spaceBetween: -100,
  };
}
