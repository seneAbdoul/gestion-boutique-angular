import { Article } from "./article.model";

export interface Categorie {
    id: number;
    libelle: string;
    articles: Article[]; 
  }