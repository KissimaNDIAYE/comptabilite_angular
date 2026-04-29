import { Injectable } from '@angular/core';
import { Categorie } from '../model/categorie.model';
import { Observable } from 'rxjs'; 
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { Type_Budget } from '../model/type_budget.model';
const httpOptions = { 
headers: new HttpHeaders( {'Content-Type': 'application/json'} ) 
};

@Injectable({
  providedIn: 'root'
})
export class TypeBudgetService {

  apiURL: string = 'http://localhost:8080/comptabilite/api/allType_Budgets'; 
  type_budget! : Type_Budget;
  type_budgets! : Type_Budget[]; //un tableau de Type_Budget

  constructor(private http : HttpClient) { 
  
  }

  listeTypeBudgets(): Observable<Type_Budget[]>{ 
    return this.http.get<Type_Budget[]>(this.apiURL); 
  }

  supprimerType_Budget( type: Type_Budget){
       const index = this.type_budgets.indexOf(type, 0);
       if (index > -1) {
         this.type_budgets.splice(index, 1);
       }
  }

  ajouterTypeBudget( cat: Type_Budget){
      this.type_budgets.push(cat);
    }
}
