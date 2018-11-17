import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../author.service';
import { AuthorDetail } from '../models/author-detail';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-author-details',
  templateUrl: './author-details.component.html',
  styleUrls: ['./author-details.component.css']
})
export class AuthorDetailsComponent implements OnInit {

  public authorDetailBooks: AuthorDetail[] = [];
  constructor(private authorService: AuthorService) { }

  ngOnInit() {
    this.getAuthorBooks();
  }

  private getAuthorBooks() {
    this.authorService.getAuthorBooks(1).subscribe(
      (response: AuthorDetail[]) => {
        this.authorDetailBooks = response;
        console.log('Http Response', this.authorDetailBooks);

      },
      (error: HttpErrorResponse) => {
        console.log('Error occurred', error)
      },
      () => {
        console.log("We're done");
      });
  }

}
