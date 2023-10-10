import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Recette from 'src/app/models/recette.model';
import { RecetteService } from 'src/app/service/recette.service';

@Component({
  selector: 'app-show-recette',
  templateUrl: './show-recette.component.html',
  styleUrls: ['./show-recette.component.scss']
})
export class ShowRecetteComponent implements OnInit {

  recette!: Recette

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private recetteService: RecetteService
  ) { }

  private subscribeRecette(id: number): void {
    this.recetteService.getRecette(id).subscribe((recette) => {
      this.recette = recette
    })
  }

  private setSubscribe(type: string | null, id: string | null): void {
    if (id && type === 'recettes') {
      this.subscribeRecette(+id)
    }else if (!id || !type) {
      this.router.navigate(['/recettes'])
    }
  }
  
  ngOnInit(): void {
    const type = this.route.snapshot.paramMap.get('type');
    const id = this.route.snapshot.paramMap.get('id');
    this.setSubscribe(type, id)
  }

}
