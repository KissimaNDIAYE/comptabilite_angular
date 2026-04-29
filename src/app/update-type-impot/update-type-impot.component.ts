import { Component } from '@angular/core';
import { Type_Impot } from '../model/type_impot.model';
import { ActivatedRoute, Router } from '@angular/router';
import { TypeImpotService } from '../service/type-impot.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Categorie } from '../model/categorie.model';

@Component({
  selector: 'app-update-type-impot',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './update-type-impot.component.html',
  styleUrl: './update-type-impot.component.css'
})
export class UpdateTypeImpotComponent {

    type_impots! : Type_Impot[]; 
    type_impot! : Type_Impot; 
    categories! : Categorie[]; 
    categorie! : Categorie; 
    updatedCatId? : number;

    //variable pour stocker le type d'impôt en cours de modification
    currentType_Impot  = new Type_Impot();
    //message de confirmation de modification
    message! : string;
  
    //injecter le service TypeImpotService et le routeur dans le constructeur du composant
    constructor(private activatedRoute: ActivatedRoute,
      private router: Router, private type_impotService: TypeImpotService) { 
    }
  
  ngOnInit(): void {
    this.type_impotService.listeCategories().
      subscribe(cats => {
        this.categories = cats;
        console.log(cats);
      });
    this.type_impotService.consulterType_Impot(this.activatedRoute.snapshot.params['id']).
      subscribe(type_impot => {
        this.currentType_Impot = type_impot; this.updatedCatId = this.currentType_Impot.categorie?.idCategorie;
      });
  }

  updateType_Impot() { 
      this.currentType_Impot.categorie = this.categories.find(cat => cat.idCategorie == this.updatedCatId)!; 
      this.type_impotService.updateType_Impot(this.currentType_Impot).subscribe(type_impot => { 
      this.router.navigate(['type_impots']); } 
      ); 
  } 
}
  
  
  
