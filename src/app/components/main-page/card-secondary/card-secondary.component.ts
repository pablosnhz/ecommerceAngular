import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-secondary',
  templateUrl: './card-secondary.component.html',
  styleUrls: ['./card-secondary.component.css']
})
export class CardSecondaryComponent implements OnInit {

  slider: any;
    defaultTransform: any;


    goNext() {
      this.defaultTransform = this.defaultTransform - 398;
      if (Math.abs(this.defaultTransform) >= this.slider.scrollWidth / 1.7) this.defaultTransform = 0;
      this.slider.style.transform = "translateX(" + this.defaultTransform + "px)";
    }

    goPrev() {

      if (Math.abs(this.defaultTransform) === 0) this.defaultTransform = 0;
      else this.defaultTransform = this.defaultTransform + 398;
      this.slider.style.transform = "translateX(" + this.defaultTransform + "px)";
    }

    constructor() { }

    ngOnInit(): void {
      this.slider = document.getElementById("slider");
      this.defaultTransform=0
    }

}
