import { Component } from '@angular/core';
import { TypeImpotService } from '../service/type-impot.service';
import { Type_Impot } from '../model/type_impot.model';
import { FormsModule } from '@angular/forms';
import { Categorie } from '../model/categorie.model';
import { Router } from '@angular/router';
import { CategorieService } from '../service/categorie.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-add-type-impot',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add-type-impot.component.html',
  styleUrls: ['./add-type-impot.component.css']
})
export class AddTypeImpotComponent {
  message!: string;
  // Liste des catégories (remplie depuis le backend)
  categories: Categorie[] = [];

  // ID de la catégorie sélectionnée dans le formulaire
  newIdCat!: number;

  // Description du type d'impôt (liée à un input HTML)
  newType_Impot: Type_Impot = new Type_Impot();

  // Injection du service et du router
  constructor(
    private typeImpotService: TypeImpotService, private categorieService: CategorieService,
    private router: Router
  ) {}

  // Méthode appelée à l'initialisation du composant
  ngOnInit(): void {
        // Appel au service pour récupérer les catégories depuis le backend
        this.categorieService.listeCategories().subscribe({
          // Quand les données arrivent
          next: cats => {
            this.categories = cats; // On remplit la liste
            console.log("Catégories chargées :", cats);
          },
          // En cas d'erreur
          error: err => {
            console.error("Erreur chargement catégories :", err);
          }
        });
  }

  // Méthode pour ajouter un type d'impôt
  addType_Impot(){  

    // Recherche de la catégorie sélectionnée dans la liste
    const categorieSelectionnee = this.categories.find(
      cat => cat.idCategorie == this.newIdCat
    );

    // Vérification si la catégorie existe
    if (!categorieSelectionnee) {
      console.error("Catégorie non trouvée !");
      return; // Stop l'exécution si erreur
    }

    // Création d'un nouvel objet Type_Impot
    const typeImpot = new Type_Impot();

    // Affectation de la description depuis le formulaire
    typeImpot.typeImpotDesc = this.newType_Impot.typeImpotDesc;

    // Affectation de la catégorie sélectionnée
    // typeImpot.categorie = categorieSelectionnee;

    // Appel du service pour envoyer les données au backend
    this.typeImpotService.ajouterType_Impot(typeImpot)
      .subscribe({

        // En cas de succès
        next: res => {
          console.log("Type d'impôt ajouté :", res);
          this.message = "Type d'impôt ajouté avec succès !";
          // Redirection vers une autre page après ajout
          this.router.navigate(['add-type_impots']);
        },

        // En cas d'erreur
        error: err => {
          console.error("Erreur lors de l'ajout :", err);
          this.message = "Erreur lors de l'ajout du type d'impôt.";
        }
      });
  }
}
