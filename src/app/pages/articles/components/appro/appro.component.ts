import { Component, EventEmitter, Output } from '@angular/core';
import { Article } from 'src/app/models/article.model';
import { ArticleService } from '../../../../services/article.service'; // Importer le service

@Component({
  selector: 'app-article-appro',
  templateUrl: './appro.component.html',
  styleUrls: ['./appro.component.css']
})
export class ApproComponent {
  selectedArticles: Article[] = [];
  quantities: number[] = [];
  @Output() articlesSaved = new EventEmitter<void>();
  isChecked: boolean[] = [];

  constructor(private articleService: ArticleService) {} // Injecter le service

  // Fonction appelée lors de la sélection d'articles dans ListeComponent
  onArticleSelectionChange(articles: Article[]): void {
    this.selectedArticles = articles;
    this.quantities = articles.map(() => 1);  // Initialiser chaque quantité à 1
    this.isChecked = articles.map(() => true); // Initialiser chaque checkbox à cochée
  }

  // Incrémente la quantité
  increment(index: number): void {
    this.quantities[index]++;
  }

  // Décrémente la quantité mais s'assure qu'elle reste au minimum à 1
  decrement(index: number): void {
    if (this.quantities[index] > 1) {
      this.quantities[index]--;
    }
  }

  // Supprime l'article et son état de checkbox
  removeArticle(article: Article, index: number): void {
    if (index !== -1) {
      this.selectedArticles.splice(index, 1);
      this.quantities.splice(index, 1);
      this.isChecked.splice(index, 1); 
    }
  }

  // Gérer la sélection des articles avec le checkbox
  toggleArticleSelection(index: number): void {
    this.isChecked[index] = !this.isChecked[index];
    if (!this.isChecked[index]) {
      this.selectedArticles.splice(index, 1);
      this.quantities.splice(index, 1);
    }
  }

  // Fonction appelée lorsqu'on coche/décoche un article
  onSelectArticle(article: Article, event: any): void {
    const checked = event.target.checked;
    if (checked) {
      this.selectedArticles.push(article);
      this.quantities.push(1);  // Ajouter une quantité par défaut
      this.isChecked.push(true);  // Coche l'article
    } else {
      const index = this.selectedArticles.findIndex(a => a.id === article.id);
      this.removeArticle(article, index);
    }
  }


  // Fonction appelée lors du clic sur le bouton SAVE  
  save(): void {
    if (this.selectedArticles.length > 0) {
      this.selectedArticles.forEach((article, index) => {
        if (article.id !== undefined) { 
          const newQuantity1 = article.quantiteStock + this.quantities[index];
          const newQuantity = this.quantities[index]; 
          this.articleService.updateArticleQuantite(article.id, newQuantity).subscribe({
            next: (response) => {
              console.log(`Article ${article.libelle} mis à jour`);
              article.quantiteStock = newQuantity1;
            },
            error: (error) => {
              console.error(`Erreur lors de la mise à jour de l'article ${article.libelle}`, error);
            }
          });
        } else {
          console.warn(`L'article ${article.libelle} n'a pas d'ID valide.`);
        }
      });
  
      // Émettre l'événement après avoir sauvegardé
      this.articlesSaved.emit();
  
      // Vider les tableaux après la mise à jour
      this.selectedArticles = [];
      this.quantities = [];
    } else {
      console.warn('Aucun article sélectionné pour la mise à jour.');
    }
  }
  

    // Méthode appelée après la sauvegarde des articles
    onArticlesSaved(): void {
      this.selectedArticles = [];
      this.quantities = [];
    }
  

}
