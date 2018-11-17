import {Component, OnInit} from '@angular/core';
import {Genre} from './models/genre';
import {HttpGenreService} from './http-genre.service';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css']
})
export class GenresComponent implements OnInit {
  public genres: Genre[] = [];

  constructor(private genreService: HttpGenreService) {
  }

  ngOnInit() {
    this.getGenres();
  }

  private getGenres() {
    this.genreService.getAllGenres().subscribe((response: Genre[]) => {
      this.genres = response;
    });
  }
}
