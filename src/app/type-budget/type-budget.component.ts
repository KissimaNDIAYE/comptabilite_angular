import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Type_Budget } from '../model/type_budget.model';
import { TypeBudgetService } from '../service/type-budget.service';

@Component({
  selector: 'app-type-budget',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './type-budget.component.html',
  styleUrl: './type-budget.component.css'
})
export class TypeBudgetComponent {

  type_budgets! : Type_Budget[] ;
  
    constructor(private type_budgetService: TypeBudgetService) {
    }

    ngOnInit(): void {
    this.type_budgetService.listeTypeBudgets().subscribe(type_budgets => { 
        console.log(type_budgets); 
        this.type_budgets = type_budgets; 
      });  
  }

  supprimerType_Budget(c: Type_Budget)
     {
      let conf = confirm("Etes-vous sûr ?");
       if (conf)
         this.type_budgetService.supprimerType_Budget(c);
     }
}
