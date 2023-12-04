import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  constructor(private router: Router) { }

  logOut() {
    sessionStorage.clear();
    this.router.navigate(['auth']);
  }

get session(){  
    return sessionStorage
    
}

}
