import { ArticleDette } from "./article-dette.model";
import { Article } from "./article.model";
import { Client } from "./client.model";
import { Paiement } from "./paiement.model";

export interface Dette {
    id: number;
    clientId: number;
    date: Date;
    montantDue: number;
    montantVerser: number;
    statut: string;
    etat: boolean;
    client: Client; 
    articles: Article[];
    ArticleDette: ArticleDette[];
    Paiement: Paiement[];
    createdAt: Date;
    updatedAt: Date;
  }
  