import { Article } from "./article.model";
import { Dette } from "./dette.model";

export interface ArticleDette {
    detteId: number;
    articleId: number;
    quantiteArticleDette: number;
    dette: Dette; 
    article: Article; 
    createdAt: Date;
    updatedAt: Date;
  }
  