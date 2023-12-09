import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar-visiteur',
  templateUrl: './navbar-visiteur.component.html',
  styleUrls: ['./navbar-visiteur.component.scss']
})
export class NavbarVisiteurComponent {

  hidden: boolean = true

  
  toggle() {
    this.hidden = !this.hidden;
  }
}
