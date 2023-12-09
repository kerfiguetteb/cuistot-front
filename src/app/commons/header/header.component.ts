import { Component } from '@angular/core';
import { authGuard } from 'src/app/guards/auth.guard';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  get session(){
    return sessionStorage
  }

}
