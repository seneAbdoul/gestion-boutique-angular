import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../../../services/article.service'; // Chemin à adapter
import { CategorieService } from '../../../../services/categorie.service'; // Chemin à adapter
import { Categorie } from '../../../../models/categorie.model'; // Modèle Categorie
import { Article } from '../../../../models/article.model'; // Modèle Article
import { NgForm } from '@angular/forms'; // Nécessaire pour gérer le formulaire

@Component({
  selector: 'app-article-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  categories: Categorie[] = []; // Tableau pour stocker les catégories
  selectedCategorieId: number = 0; // Valeur sélectionnée
  article: Article = {
    libelle: '',
    prix: 0,
    quantiteStock: 0,
    promotion: '',
    prixDetail: 0,
    categorieId: 0
  };

  constructor(private categorieService: CategorieService, private articleService: ArticleService) {}

  ngOnInit(): void {
    this.fetchCategories();
  }

  fetchCategories(): void {
    this.categorieService.getCategories().subscribe({
      next: (response: any) => {
        if (Array.isArray(response)) {
            this.categories = response; // La réponse est un tableau d'articles
          } else {
            console.error('La réponse de l\'API ne contient pas la structure attendue');
          }
      },
      error: (err:any) => {
        console.error('Erreur lors de la récupération des catégories', err);
      }
    });
  }


  onSubmit(form: NgForm): void {
    if (form.valid) {
      const newArticle: Article = {
        libelle: this.article.libelle,
        prix: this.article.prix,
        quantiteStock: this.article.quantiteStock,
        promotion: this.article.promotion,
        prixDetail: this.article.prixDetail,
        categorieId: Number(this.selectedCategorieId) // Assurez-vous que c'est un nombre
      };
  
      // Appel au service pour ajouter l'article
      this.articleService.addArticle(newArticle).subscribe({
        next: (response: Article) => {
          console.log('Article ajouté avec succès', response);
          // Vous pouvez réinitialiser le formulaire ici ou naviguer vers une autre page
          form.reset();
        },
        error: (error) => {
          console.error('Erreur lors de l\'ajout de l\'article', error);
        }
      });
    }
  }
  
}
