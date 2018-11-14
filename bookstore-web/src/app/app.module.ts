import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AboutComponent } from './pages/about/about.component';
import { BooksComponent } from './pages/books/books.component';
import { HttpClientModule } from '@angular/common/http';
import { BookService } from './pages/books/book.service';
import { BookDetailComponent } from './pages/books/book-detail/book-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AboutComponent,
    BooksComponent,
    BookDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
