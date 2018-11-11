import { Component, OnInit } from '@angular/core';
import { BookService } from './book.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Book } from './models/book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  public books: Book[] = [];
  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.getAllBooks();
  }

  private getAllBooks() {
    this.bookService.getAllBooks().subscribe(
      (response: Book[]) => {
        this.books = response;
        console.log('Http Response', this.books);

      },
      (error: HttpErrorResponse) => {
        console.log('Error occurred', error)
      },
      () => {
        console.log("Were done");
      });
  }

}
