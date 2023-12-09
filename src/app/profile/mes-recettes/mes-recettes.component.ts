import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-mes-recettes',
  templateUrl: './mes-recettes.component.html',
  styleUrls: ['./mes-recettes.component.scss']
})
export class MesRecettesComponent implements OnInit {

  user!:User

  constructor(private userService: UserService){}

  
  ngOnInit(): void {
    this.userService.getUser(+sessionStorage['id'])
  }

}
