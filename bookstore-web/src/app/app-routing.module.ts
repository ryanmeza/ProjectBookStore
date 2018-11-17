import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AboutComponent } from './pages/about/about.component';
import { BooksComponent } from './pages/books/books.component';
import { BookDetailComponent } from './pages/books/book-detail/book-detail.component';
import { AuthorsComponent } from './pages/authors/authors.component';
import { AuthorDetailsComponent } from './pages/authors/author-details/author-details.component';
import {GenresComponent} from "./pages/genres/genres.component";

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'books',
    component: BooksComponent
  },      
  {
    path: 'book-details/:id',
    component: BookDetailComponent
  },
  {
    path: 'authors',
    component: AuthorsComponent
  },
  {
    path: 'author-details/:id',
    component: AuthorDetailsComponent
  },
  {
    path: 'genres',
    component: GenresComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
