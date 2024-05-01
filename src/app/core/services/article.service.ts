import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { Article } from '../models/article';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  constructor(private http: HttpClient) {}

  getArticles():Observable<Article[]>{
    return this.http.get<Article[]>(`https://dummyjson.com/products`).pipe(
      map((response: any) => {        
        return response.products;
      }),
    );
  }
}
