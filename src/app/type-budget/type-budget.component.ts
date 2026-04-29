import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Type_Budget } from '../model/type_budget.model';
import { TypeBudgetService } from '../service/type-budget.service';

@Component({
  selector: 'app-type-budget',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './type-budget.component.html',
  styleUrl: './type-budget.component.css'
})
export class TypeBudgetComponent {

  type_budgets! : Type_Budget[] ;


  chargerType_Budget(){
      this.type_budgetService.listeType_Budget().subscribe(type_budgets => {
        console.log(type_budgets);
        this.type_budgets = type_budgets;
      }); 
  }

  constructor(private type_budgetService: TypeBudgetService) {
    this.chargerType_Budget();
  }

  supprimerType_Budget(p: Type_Budget)
    {
      let conf = confirm("Etes-vous sûr ?");
      if (conf)
      this.type_budgetService.supprimerType_Budget(p.idType_Budget!).subscribe(() => {
        console.log("type d'impôt supprimé");
        this.chargerType_Budget();
      });
    }
}
