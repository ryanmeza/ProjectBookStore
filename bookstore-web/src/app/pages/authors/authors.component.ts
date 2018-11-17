import { Component, OnInit } from '@angular/core';
import { AuthorService } from './author.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Author } from './models/authors';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  public authors: Author[] = [];
  constructor(private authorService: AuthorService) { }

  ngOnInit() {
    this.getAllAuthors();
  }

  private getAllAuthors() {
    this.authorService.getAllAuthors().subscribe(
      (response: Author[]) => {
        this.authors = response;
        console.log('Http Response', this.authors);

      },
      (error: HttpErrorResponse) => {
        console.log('Error occurred', error)
      },
      () => {
        console.log("Were done");
      });
  }

}
