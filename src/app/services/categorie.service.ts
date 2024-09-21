import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environnement';
import { Categorie } from '../models/categorie.model'; 

@Injectable({
  providedIn: 'root',
})
export class CategorieService {
  private baseUrl: string = `${environment.apiUrl}/categories`; 

  constructor(private http: HttpClient) {}

  // Récupérer la liste des articles
  getCategories(): Observable<Categorie[]> {
    return this.http.get<Categorie[]>(`${this.baseUrl}`);
  }

}
