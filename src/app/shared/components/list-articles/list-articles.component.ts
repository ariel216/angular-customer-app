import { Component } from '@angular/core';
import { ArticleService } from '../../../core/services/article.service';
import { Article } from '../../../core/models/article';

@Component({
  selector: 'app-list-articles',
  standalone: true,
  imports: [],
  templateUrl: './list-articles.component.html',
  styleUrl: './list-articles.component.css'
})
export class ListArticlesComponent {
  articles: Article[]=[];

  constructor(private articleService:ArticleService) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.articleService.getArticles().subscribe({
      next:(data)=>{
        this.articles = data;
      }
    })
  }
}
