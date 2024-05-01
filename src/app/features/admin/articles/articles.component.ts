import { Component } from '@angular/core';
import { ArticleService } from '../../../core/services/article.service';
import { Article } from '../../../core/models/article';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.css',
})
export class ArticlesComponent {
  articles$!: Article[];

  constructor(private articleService: ArticleService) {}

  ngOnInit(): void {
    this.articles$ = this.articleService.getArticles();
  }
}
