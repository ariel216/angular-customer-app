import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { Article } from '../models/article';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  constructor(private http: HttpClient) {}

  getArticles(): Observable<Article[]> {
    //return this.http.get<Article[]>(`https://dummyjson.com/products`);

    return this.http.get(`https://dummyjson.com/products`).pipe(
      tap((response: any) => {
        (response.products as Article[]).forEach((articulo) => {});
      }),
      map((response: any) => {
        (response.products as Article[]).map((articulo) => {
          return articulo;
        });
        return response;
      })
    );
  }
}
