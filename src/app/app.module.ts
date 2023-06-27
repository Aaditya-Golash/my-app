import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { MovieSearchComponent } from './movie-search/movie-search.component';
import { BookmarkedMoviesComponent } from './bookmarked-movies/bookmarked-movies.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieSearchComponent,
    BookmarkedMoviesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NoopAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbEvaIconsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
