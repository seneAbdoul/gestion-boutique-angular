import { Dette } from "./dette.model";

export interface Paiement {
    id: number;
    detteId: number;
    montant: number;
    date: Date;
    createdAt: Date;
    updatedAt: Date;
    dette: Dette; 
  }
  