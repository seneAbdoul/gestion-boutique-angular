import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ArticleService } from '../../../../services/article.service'; 
import { Article } from '../../../../models/article.model'; 

@Component({
  selector: 'app-article-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {
  articles: Article[] = []; 
  filteredArticles: Article[] = []; 
  searchLibelle: string = ''; 
  selectedArticles: Article[] = [];
  @Output() articleSelectionChange = new EventEmitter<Article[]>();

  constructor(private articleService: ArticleService) {}


  ngOnInit(): void {
    this.fetchArticles(); 
  }
  fetchArticles(): void {
    this.articleService.getArticles().subscribe({
      next: (response: any) => {
        if (Array.isArray(response)) {
          this.articles = response; // La réponse est un tableau d'articles
          this.filteredArticles = [...this.articles];
        } else {
          console.error('La réponse de l\'API ne contient pas la structure attendue');
        }
      },
      error: (error) => {
        console.error('Erreur lors de la récupération des articles', error);
      },
      complete: () => {
        console.log('Récupération des articles terminée');
      }
    });
  }
  

  filterArticles(filterType: string): void {
    if (filterType === 'ALL') {
      this.filteredArticles = [...this.articles]; 
    } else if (filterType === 'RUP') {
      this.filteredArticles = this.articles.filter(article => article.quantiteStock < 5); 
    } else if (filterType === 'DIS') {
      this.filteredArticles = this.articles.filter(article => article.quantiteStock > 5); 
    }
  }

  searchArticle(): void {
    if (this.searchLibelle) {
      this.articleService.getArticles().subscribe({
        next: (response: any) => {
          if (Array.isArray(response)) {
            const article = response.find((article: Article) => article.libelle === this.searchLibelle);
            this.filteredArticles = article ? [article] : []; // Affiche l'article trouvé ou vide si non trouvé
          } else {
            console.error('La réponse de l\'API ne contient pas de propriété "data"');
          }
        },
        error: (error) => {
          console.error('Erreur lors de la récupération des articles', error);
        },
        complete: () => {
          console.log('Recherche d\'article terminée');
        }
      });
    } else {
      // Si le champ de recherche est vide, afficher tous les articles
      this.filteredArticles = [...this.articles];
    }
  }

  onSelectArticle(article: Article, event: any): void {
    if (event.target.checked) {
      this.selectedArticles.push(article); // Ajouter l'article s'il est coché
    } else {
      this.selectedArticles = this.selectedArticles.filter(
        (a) => a.id !== article.id
      ); // Retirer l'article s'il est décoché
    }
    this.articleSelectionChange.emit(this.selectedArticles); // Émettre les articles sélectionnés
  }

  // Recevoir l'événement d'article sauvegardés et décocher les articles
  onArticlesSaved(): void {
    this.selectedArticles = [];
    this.articleSelectionChange.emit(this.selectedArticles);
  }
}
