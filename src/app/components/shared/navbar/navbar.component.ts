import { Component, Input } from '@angular/core';
import 'alpinejs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  @Input() itemCount: number = 0;

  open: boolean = false;

  toggleMenu() {
    this.open = !this.open;
  }



}

