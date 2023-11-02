import { Component } from '@angular/core';

@Component({
  selector: 'app-add-ustensile',
  templateUrl: './add-ustensile.component.html',
  styleUrls: ['./add-ustensile.component.scss']
})
export class AddUstensileComponent {
  hidden: boolean = true
  
  toggle() {
    this.hidden = !this.hidden;
  }

}
