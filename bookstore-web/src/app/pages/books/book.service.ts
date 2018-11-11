import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from './models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(
    private http: HttpClient
  ) { }

  getAllBooks(): Observable<Book[]> {
    return this.http.get<Book[]>('assets/books.json');
  }
}
