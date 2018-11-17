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

  constructor(private authorService: AuthorService) { }

  ngOnInit() {
  }

}
