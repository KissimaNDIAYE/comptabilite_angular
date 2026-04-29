import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Categorie } from '../model/categorie.model';
import { CategorieService } from '../service/categorie.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-categorie',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-categorie.component.html',
  styleUrl: './add-categorie.component.css'
})
export class AddCategorieComponent  {

  newCategorie : Categorie = new Categorie();

  message! : string;

  constructor(private categorieService: CategorieService, private router :Router) {
  }

  // addCategorie(){ 
  //   this.categorieService.ajouterCategorie(this.newCategorie);
  //   this.message = "Catégorie "+ this.newCategorie.descriptionCat +" ajoutée avec succès !"
  // }

  addCategorie() {
    this.categorieService.ajouterCategorie(this.newCategorie)
      .subscribe(cat => {
        console.log(cat);
        this.router.navigate(['categories']);
      });
  }
}
