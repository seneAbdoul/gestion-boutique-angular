import { Client } from "./client.model";
import { Role } from "./role.model";

export interface User {
    id: number;
    mail: string;
    password: string;
    clientId: number;
    client: Client; 
    role: Role; 
    createdAt: Date;
    updatedAt: Date;
  }
  