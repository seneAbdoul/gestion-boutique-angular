import { ArticleDette } from "./article-dette.model";
import { Categorie } from "./categorie.model";
import { Dette } from "./dette.model";

export interface Article {
  id?: number; // L'ID sera généré par la base de données
  libelle: string;
  prix: number;
  quantiteStock: number;
  prixDetail: number;
  promotion: string;
  categorieId: number;
  categorie?: Categorie; // Optionnel, car ce n'est pas nécessaire lors de l'ajout
  dettes?: Dette[]; // Optionnel
  ArticleDette?: ArticleDette[]; // Optionnel
  createdAt?: Date; // Optionnel, généré par la base de données
  updatedAt?: Date; // Optionnel, généré par la base de données
}