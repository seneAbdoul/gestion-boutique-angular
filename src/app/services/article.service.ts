import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environnement';
import { Article } from '../models/article.model'; 

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  private baseUrl: string = `${environment.apiUrl}/articles`; 

  constructor(private http: HttpClient) {}

  // Récupérer la liste des articles
  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(`${this.baseUrl}`);
  }

  // Récupérer un article par son ID
  getArticleById(id: number): Observable<Article> {
    return this.http.get<Article>(`${this.baseUrl}/${id}`);
  }

  // Récupérer un article par son libellé
  getArticleByLibelle(libelle: string): Observable<Article> {
    return this.http.post<Article>(`${this.baseUrl}/libelle`, { libelle });
  }

  // Ajouter un nouvel article
  addArticle(article: Article): Observable<Article> {
    return this.http.post<Article>(`${this.baseUrl}`, article);
  }

  // Mettre à jour la quantité en stock d'un article
  updateArticleQuantite(id: number, quantiteStock: number): Observable<Article> {
    return this.http.put<Article>(`${this.baseUrl}/quantite/${id}`, { quantiteStock });
  }

  // Supprimer un article par ID
  deleteArticle(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
