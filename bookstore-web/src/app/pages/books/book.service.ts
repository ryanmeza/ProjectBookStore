import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from './models/book';
import { BookDetail } from './models/book-detail';

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

  getBook(id: number): Observable<BookDetail> {
    return this.http.get<BookDetail>('assets/book-detail.json');
  }
}
