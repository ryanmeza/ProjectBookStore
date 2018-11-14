import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { BookDetail } from '../models/book-detail';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  public bookDetail: BookDetail = new BookDetail();

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.getBook();
  }

  private getBook() {
    this.bookService.getBook(1).subscribe(
      (response: BookDetail) => {
        this.bookDetail = response;
        console.log('Http Response', this.bookDetail);

      },
      (error: HttpErrorResponse) => {
        console.log('Error occurred', error)
      },
      () => {
        console.log("We're done");
      });
  }
}
