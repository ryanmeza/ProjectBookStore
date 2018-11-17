import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Genre} from './models/genre';

@Injectable({
  providedIn: 'root'
})
export class HttpGenreService {

  constructor(private http: HttpClient) { }

  getAllGenres(): Observable<Genre[]> {
    return this.http.get<Genre[]>('assets/genres.json');
  }

}
