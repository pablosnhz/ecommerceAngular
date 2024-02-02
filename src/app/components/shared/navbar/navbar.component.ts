import { Component, ElementRef } from '@angular/core';
import 'alpinejs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  open: boolean = false;

  toggleMenu() {
    this.open = !this.open;
  }
}

