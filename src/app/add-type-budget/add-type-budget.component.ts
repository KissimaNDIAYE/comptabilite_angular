import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Type_Budget } from '../model/type_budget.model';
import { TypeBudgetService } from '../service/type-budget.service';
import { CategorieService } from '../service/categorie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-type-budget',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add-type-budget.component.html',
  styleUrl: './add-type-budget.component.css'
})
export class AddTypeBudgetComponent {

  message!: string;

  // Description du type d'impôt (liée à un input HTML)
  newType_Budget: Type_Budget = new Type_Budget();

  // Injection du service et du router
  constructor(
    private typeImpotService: TypeBudgetService, private router: Router) {

  }

  // Méthode appelée à l'initialisation du composant
  ngOnInit(): void {
        
  }

  // Méthode pour ajouter un type d'impôt
  addType_Budget(){  

    // Création d'un nouvel objet Type_Budget
    const typeImpot = new Type_Budget();

    // Affectation de la description depuis le formulaire
    typeImpot.budgetTypeDesc = this.newType_Budget.budgetTypeDesc;

    // Appel du service pour envoyer les données au backend
    this.typeImpotService.ajouterType_Budget(typeImpot)
      .subscribe({
        // En cas de succès
        next: res => {
          console.log("Type de budget ajouté :", res);
          this.message = "Type de budget ajouté avec succès !";
          // Redirection vers une autre page après ajout
          this.router.navigate(['type_budgets']);
        },
        // En cas d'erreur
        error: err => {
          console.error("Erreur lors de l'ajout :", err);
          this.message = "Erreur lors de l'ajout du type de budget.";
        }
      });
  }
}
