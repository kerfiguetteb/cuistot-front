import { Component, OnInit } from '@angular/core';
import { UstensileService } from '../service/ustensile.service';
import Ustensile from '../models/ustensile.model';

@Component({
  selector: 'app-ustensile',
  templateUrl: './ustensile.component.html',
  styleUrls: ['./ustensile.component.scss']
})
export class UstensileComponent implements OnInit{

  constructor(private ustensileService: UstensileService) {}

  ustensiles!: Ustensile[]

  onRemove(ustensile: Ustensile){
    // filtrage des ingredients
    const ustensileFilter = this.ustensiles.filter((object => object.id !== ustensile.id))
    this.ustensiles = ustensileFilter
    this.ustensileService.deleteUstensile(ustensile.id).subscribe()
    
  }

  ngOnInit(): void {
    this.ustensileService.getUstensiles().subscribe((ustensiles) => {
      this.ustensiles = ustensiles;
    })
  }

}
