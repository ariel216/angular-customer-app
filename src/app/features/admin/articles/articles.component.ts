import { Component } from '@angular/core';
import { ListArticlesComponent } from '../../../shared/components/list-articles/list-articles.component';

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [ListArticlesComponent],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.css',
})
export class ArticlesComponent {
  
}
