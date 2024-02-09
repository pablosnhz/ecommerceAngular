import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-card-main',
  templateUrl: './card-main.component.html',
  styleUrls: ['./card-main.component.css']
})
export class CardMainComponent implements OnInit {
    sliderUno: any;
    defaultTransform: any;


    next() {
      this.defaultTransform = this.defaultTransform - 398;
      const maxTransform = this.sliderUno.scrollWidth - this.sliderUno.clientWidth;
      if (Math.abs(this.defaultTransform) >= maxTransform) {
        this.defaultTransform = -maxTransform;
      }
      this.sliderUno.style.transform = "translateX(" + this.defaultTransform + "px)";
    }

    prev() {
      this.defaultTransform = this.defaultTransform + 398;
      if (this.defaultTransform > 0) {
        this.defaultTransform = 0;
      }
      this.sliderUno.style.transform = "translateX(" + this.defaultTransform + "px)";
    }

    constructor() { }

    ngOnInit(): void {
      this.sliderUno = document.getElementById("sliderUno");
      this.defaultTransform=0
    }
  }







