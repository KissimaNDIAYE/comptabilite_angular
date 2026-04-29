import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TypeBudgetService } from '../service/type-budget.service';
import { Type_Budget } from '../model/type_budget.model';

@Component({
  selector: 'app-add-type-budget',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-type-budget.component.html',
  styleUrl: './add-type-budget.component.css'
})
export class AddTypeBudgetComponent {

  newType_budget: Type_Budget= new Type_Budget();
  
    message! : string;
  
    constructor(private type_budgetService: TypeBudgetService) {
    }
  
    addType_Budget(){ 
      this.type_budgetService.ajouterTypeBudget(this.newType_budget);
      this.message = "Type de budget "+ this.newType_budget.budgetTypeDesc +" ajouté avec succès !"
    }

}
