import { Injectable } from '@angular/core';
import { Type_Budget } from '../model/type_budget.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
// Définition des options HTTP (headers)
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json' // Indique que les données envoyées sont en JSON
  })
};
@Injectable({
  providedIn: 'root'
})
export class TypeBudgetService {
  // URL de l'API backend pour récupérer la liste des types d'impôt
  apiURL: string = 'http://localhost:8080/comptabilite/api/type_budget/allType_Budgets';
  baseApiURL: string = 'http://localhost:8080/comptabilite/api/type_budget'; 

  //un objet de Type_Budget
  type_budget! : Type_Budget;
  //un tableau de Type_Budget
  type_budgets! : Type_Budget[]; 

  // Injection du HttpClient pour faire des requêtes HTTP
  constructor(private http: HttpClient) {}

  //retourner la liste des type_budgets
  listeType_Budget(): Observable<Type_Budget[]>{ 
    //retourne la liste des type_budgets disponible dans la base de données
    return this.http.get<Type_Budget[]>(this.apiURL); 
  }

  // Méthode pour ajouter un Type_Budget dans la base de données
  ajouterType_Budget(typeImpot: Type_Budget): Observable<Type_Budget> {
    // Envoie une requête POST vers le backend avec l'objet typeImpot
    // Retourne un Observable contenant la réponse du serveur
    return this.http.post<Type_Budget>(this.baseApiURL, typeImpot, httpOptions);
  }

  // Méthode pour supprimer un Type_Budget dans la base de données
  supprimerType_Budget(id: number) {
    const url = `${this.baseApiURL}/${id}`;
    return this.http.delete(url, httpOptions);
  }

  // Méthode pour consulter un Type_Budget dans la base de données
  consulterType_Budget(id: number): Observable<Type_Budget> { 
    const url = `${this.baseApiURL}/${id}`; 
    return this.http.get<Type_Budget>(url); 
  } 

  // Méthode pour modifier un Type_Budget dans la base de données
  updateType_Budget(c: Type_Budget): Observable<Type_Budget> {
    return this.http.put<Type_Budget>(`${this.baseApiURL}/${c.idType_Budget}`, c, httpOptions);
  }

}
