import { Categorie } from "./categorie.model";

// Déclaration de la classe Type_Impot (modèle côté frontend)
export class Type_Impot {

  // Identifiant du type d'impôt (optionnel car généré par la base de données)
  idType_Impot?: number;

  // Description du type d'impôt (libellé)
  typeImpotDesc?: string;

  // Objet catégorie associé (relation ManyToOne côté backend)
  categorie! : Categorie;
}