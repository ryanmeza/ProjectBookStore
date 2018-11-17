import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Author } from './models/authors';
import { AuthorDetail } from './models/author-detail';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(
    private http: HttpClient
  ) { }

  getAllAuthors(): Observable<Author[]> {
    return this.http.get<Author[]>('assets/authors.json');
  }

  getAuthor(): Observable<AuthorDetail> {
    return this.http.get<AuthorDetail>('assets/author-detail.json');
  }


}
