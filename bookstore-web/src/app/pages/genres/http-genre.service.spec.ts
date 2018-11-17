import { TestBed } from '@angular/core/testing';

import { HttpGenreService } from './http-genre.service';

describe('HttpGenreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpGenreService = TestBed.get(HttpGenreService);
    expect(service).toBeTruthy();
  });
});
