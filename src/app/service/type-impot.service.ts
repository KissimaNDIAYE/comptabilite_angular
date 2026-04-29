import { Injectable } from '@angular/core';
import { Type_Impot } from '../model/type_impot.model';
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
export class TypeImpotService {
  // URL de l'API backend pour récupérer la liste des types d'impôt
  apiURL: string = 'http://localhost:8080/comptabilite/api/type_impot/allType_Impots';
  baseApiURL: string = 'http://localhost:8080/comptabilite/api/type_impot'; 

  //un objet de Type_Impot
  type_impot! : Type_Impot;
  //un tableau de Type_Impot
  type_impots! : Type_Impot[]; 

  // Injection du HttpClient pour faire des requêtes HTTP
  constructor(private http: HttpClient) {}

  //retourner la liste des type_impots
  listeType_Impot(): Observable<Type_Impot[]>{ 
    //retourne la liste des type_impots disponible dans la base de données
    return this.http.get<Type_Impot[]>(this.apiURL); 
  }

  // Méthode pour ajouter un Type_Impot dans la base de données
  ajouterType_Impot(typeImpot: Type_Impot): Observable<Type_Impot> {
    // Envoie une requête POST vers le backend avec l'objet typeImpot
    // Retourne un Observable contenant la réponse du serveur
    return this.http.post<Type_Impot>(this.baseApiURL, typeImpot, httpOptions);
  }

  // Méthode pour supprimer un Type_Impot dans la base de données
  supprimerType_Impot(id: number) {
    const url = `${this.baseApiURL}/${id}`;
    return this.http.delete(url, httpOptions);
  }

  // Méthode pour consulter un Type_Impot dans la base de données
  consulterType_Impot(id: number): Observable<Type_Impot> { 
    const url = `${this.baseApiURL}/${id}`; 
    return this.http.get<Type_Impot>(url); 
  } 

  // Méthode pour modifier un Type_Impot dans la base de données
  updateType_Impot(c: Type_Impot): Observable<Type_Impot> {
    return this.http.put<Type_Impot>(`${this.baseApiURL}/${c.idType_Impot}`, c, httpOptions);
  }

}
