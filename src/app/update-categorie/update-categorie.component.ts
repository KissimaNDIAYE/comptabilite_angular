import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategorieService } from '../service/categorie.service';
import { Categorie } from '../model/categorie.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-update-categorie',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './update-categorie.component.html',
  styles: ``
})
export class UpdateCategorieComponent implements OnInit {

  currentCategorie  = new Categorie();

   message! : string;

  constructor(private activatedRoute: ActivatedRoute,private router: Router,private categorieService: CategorieService) { 

  }

  //Initialisation du composant : récupération de la catégorie à modifier à partir de l'id qui est passé en paramètre 
  ngOnInit() {
    //Cette ligne de code permet de récupérer l'id de la catégorie à modifier à partir de 
    // l'url et de consulter la catégorie correspondante dans la base de données pour 
    // l'afficher dans le formulaire de modification
    this.categorieService.consulterCategorie(this.activatedRoute.snapshot.params['id']). 
    subscribe( cat =>{ this.currentCategorie = cat; } ) ;
    
  }


  // updateCategorie(){
  //   this.categorieService.updateCategorie(this.currentCategorie);
  //   this.router.navigate(['categories']);
  //   this.message = "Catégorie "+ this.currentCategorie.descriptionCat +" modifiée avec succès !"
  // }

  updateCategorie() {
    this.categorieService.updateCategorie(this.currentCategorie).subscribe(cat => {
      this.router.navigate(['categories']);
    });
  }
}
