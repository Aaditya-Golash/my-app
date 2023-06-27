import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieSearchComponent } from './movie-search/movie-search.component';
import { BookmarkedMoviesComponent } from './bookmarked-movies/bookmarked-movies.component';

const routes: Routes = [
  { path: 'search', component: MovieSearchComponent },
  { path: 'bookmark', component: BookmarkedMoviesComponent },
  { path: '', redirectTo: '/search', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
