import { Dette } from "./dette.model";
import { User } from "./user.model";

export interface Client {
    id: number;
    nom: string;
    prenom: string;
    telephone: string;
    adresse: string;
    genre: string;
    photo?: string;
    user?: User; 
    dettes: Dette[];
    createdAt: Date;
    updatedAt: Date;
  }
  