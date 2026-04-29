import { Injectable } from '@angular/core';
import { Categorie } from '../model/categorie.model';
import { Observable } from 'rxjs'; 
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
const httpOptions = { 
headers: new HttpHeaders( {'Content-Type': 'application/json'} ) 
};

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  apiURL: string = 'http://localhost:8080/comptabilite/api/allCategories'; 
  apiURL1: string = 'http://localhost:8080/comptabilite/api/'; 

  categorie! : Categorie;
  categories! : Categorie[]; //un tableau de Categorie
  constructor(private http : HttpClient) { 
    // this.categories = [
    //   {idCategorie: 1, descriptionCat: "IMPÔT DIRECT SERVICE", valeurFixeFL: false},
    //   {idCategorie: 2, descriptionCat: "IMPÔT INDIRECT", valeurFixeFL: false},
    //   {idCategorie: 3, descriptionCat: "ENREGISTREMENT", valeurFixeFL: false},
    //   {idCategorie: 4, descriptionCat: "AUTRES", valeurFixeFL: false}
    // ];
   }

    // listeCategories():Categorie[] {
    //   return this.categories;
    // }

    //retourner la liste des categories
    listeCategories(): Observable<Categorie[]>{ 
    //retourne la liste des categories disponible dans la base de données
    return this.http.get<Categorie[]>(this.apiURL); 
  }

    ajouterCategorie( cat: Categorie):Observable<Categorie>{ 
      //ajouter la categorie cat dans la base de données 
      return this.http.post<Categorie>(this.apiURL1, cat,  httpOptions); 
    } 

    supprimerCategorie(id : number) { 
      //creer l'url de suppression en concatenant l'url de base et l'id de la categorie à supprimer
      const url = `${this.apiURL1}/${id}`; 
      return this.http.delete(url, httpOptions); 
    }

  consulterCategorie(id: number): Observable<Categorie> { 
    const url = `${this.apiURL1}/${id}`; 
    return this.http.get<Categorie>(url); 
  } 

  updateCategorie(c: Categorie): Observable<Categorie> {

  // Appel HTTP PUT vers l'API backend
  // On ajoute l'ID dans l'URL pour identifier la catégorie à modifier
  return this.http.put<Categorie>(
    `${this.apiURL1}/${c.idCategorie}`, // URL correcte avec ID
    c, // objet envoyé
    httpOptions // headers JSON
  );
}

  
}
