import { Injectable } from '@angular/core';
import { Type_Impot } from '../model/type_impot.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { Categorie } from '../model/categorie.model';
// Définition des options HTTP (headers)
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json' // Indique que les données envoyées sont en JSON
  })
};

// Décorateur Injectable pour rendre le service disponible dans toute l'application
@Injectable({
  providedIn: 'root' // Service accessible globalement
})

export class TypeImpotService {
  // URL de l'API backend pour récupérer la liste des types d'impôt
  apiURL: string = 'http://localhost:8080/comptabilite/api/type_impot/allType_Impots';
  apiURLCats: string = 'http://localhost:8080/comptabilite/api/allCategories'; 

  // URL de l'API backend (à adapter selon ton backend Spring Boot) 
  apiURL1: string = 'http://localhost:8080/comptabilite/api/type_impot'; 
    //un objet de Type_Impot
    type_impot! : Type_Impot;
    //Un objet de type Type_Impot 
    // type_impot! : Type_Impot;
    //un tableau de Type_Impot
    type_impots! : Type_Impot[]; 
    //un tableau de Type_Impot
    //type_impots: Type_Impot[]; 
    
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
      return this.http.post<Type_Impot>(this.apiURL1, typeImpot, httpOptions);
    }
     
         supprimerType_Impot(id: number) {
          const url = `${this.apiURL1}/${id}`;
          return this.http.delete(url, httpOptions);
        }
     
     
       consulterType_Impot(id: number): Observable<Type_Impot> { 
         const url = `${this.apiURL1}/${id}`; 
         return this.http.get<Type_Impot>(url); 
       } 
     
       updateType_Impot(c: Type_Impot): Observable<Type_Impot> {
         return this.http.put<Type_Impot>(this.apiURL1, c, httpOptions);
       }

      //retourner la liste des categories
    listeCategories(): Observable<Categorie[]>{ 
    //retourne la liste des categories disponible dans la base de données
    return this.http.get<Categorie[]>(this.apiURLCats); 
  }

}
