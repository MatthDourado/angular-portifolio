import { 
  Component} from '@angular/core';
 

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent  {
  isMenuOpen = false;
  isButtonX = false;

  toggleMenu() {
    
    this.isMenuOpen = !this.isMenuOpen;
    this.isButtonX = !this.isButtonX;

  }

  }
