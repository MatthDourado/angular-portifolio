import { Component } from '@angular/core';

@Component({
  selector: 'menu-mobile',
  templateUrl: './menu.mobile.component.html',
  styleUrls: ['./menu.mobile.component.css'],
})
export class MenuMobileComponent {
  isMenuOpen:boolean = false;
  isButtonX: boolean = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    this.isButtonX = !this.isButtonX;
  }
}


