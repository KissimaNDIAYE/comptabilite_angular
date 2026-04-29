import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Categorie } from '../model/categorie.model';
import { CategorieService } from '../service/categorie.service';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-categorie',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './categorie.component.html',
  styleUrl: './categorie.component.css'
})
export class CategorieComponent {

  categories! : Categorie[] ;

  constructor(private categorieService: CategorieService) {
    //this.categories = categorieService.listeCategories();
  }

  ngOnInit(): void { 
    this.chargerCategories(); 
  }

  chargerCategories(){ 
    this.categorieService.listeCategories().subscribe(categories => { 
      console.log(categories); 
      this.categories = categories; 
    });  
  }
  supprimerCategorie(p: Categorie) 
    { 
      let conf = confirm("Etes-vous sûr ?"); 
      if (conf) 
      this.categorieService.supprimerCategorie(p.idCategorie).subscribe(() => { 
        console.log("catégorie supprimée"); 
        this.chargerCategories(); 
           }); 
    } 

  
}
