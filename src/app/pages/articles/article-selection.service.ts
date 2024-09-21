import { Component, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Article } from 'src/app/models/article.model';

@Component({
    selector: 'app-article-service',
    templateUrl: './article-selection.service.html',
    styleUrls: ['./article-selection.service.css']
  })
export class ArticleServiceArticle {
  private selectedArticlesSource = new BehaviorSubject<Article[]>([]);
  selectedArticles$ = this.selectedArticlesSource.asObservable();

  private articlesSavedSource = new BehaviorSubject<void>(undefined);
  articlesSaved$ = this.articlesSavedSource.asObservable();

  setSelectedArticles(articles: Article[]): void {
    this.selectedArticlesSource.next(articles);
  }

  notifyArticlesSaved(): void {
    this.articlesSavedSource.next();
  }
}

