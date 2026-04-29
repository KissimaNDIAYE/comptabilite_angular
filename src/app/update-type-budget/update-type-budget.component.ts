import { Component } from '@angular/core';
import { Type_Budget } from '../model/type_budget.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { TypeBudgetService } from '../service/type-budget.service';

@Component({
  selector: 'app-update-type-budget',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './update-type-budget.component.html',
  styleUrl: './update-type-budget.component.css'
})
export class UpdateTypeBudgetComponent {

  type_budgets! : Type_Budget[]; 
  type_budget! : Type_Budget; 
  //variable pour stocker le type d'impôt en cours de modification
  currentType_Budget  = new Type_Budget();
  //message de confirmation de modification
  message! : string;

  //injecter le service TypeBudgetService et le routeur dans le constructeur du composant
  constructor(private activatedRoute: ActivatedRoute,
    private router: Router, private type_budgetService: TypeBudgetService) { 
  }

  ngOnInit(): void {
    this.type_budgetService.consulterType_Budget(this.activatedRoute.snapshot.params['id']).
      subscribe(type_budget => {
        this.currentType_Budget = type_budget;
      });
  }

  updateType_Budget() { 
      this.type_budgetService.updateType_Budget(this.currentType_Budget).subscribe(type_budget => { 
      this.router.navigate(['type_budgets']); } 
      ); 
  } 

}
