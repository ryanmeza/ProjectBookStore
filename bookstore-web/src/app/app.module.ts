import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {AboutComponent} from './pages/about/about.component';
import {BooksComponent} from './pages/books/books.component';
import {HttpClientModule} from '@angular/common/http';
import {BookService} from './pages/books/book.service';
import {BookDetailComponent} from './pages/books/book-detail/book-detail.component';
import {AuthorsComponent} from './pages/authors/authors.component';
import {AuthorDetailsComponent} from './pages/authors/author-details/author-details.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './core/material/material.module';
import { GenresComponent } from './pages/genres/genres.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AboutComponent,
    BooksComponent,
    BookDetailComponent,
    AuthorsComponent,
    AuthorDetailsComponent,
    GenresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
