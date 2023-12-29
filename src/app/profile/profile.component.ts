import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user!: User

  constructor(private router: Router, private userService: UserService) { }

  logOut() {
    sessionStorage.clear();
    this.router.navigate(['auth']);
  }


   /**
   * 
   * @param id 
   */
    private getUserOfProfile(id: number): void {
      this.userService.getUser(id).subscribe((user) => {
        this.user = user 
      })
    }
  
  ngOnInit(): void {
    this.getUserOfProfile(+sessionStorage['id'])
    
  }


}
