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
import { ReactiveFormsModule } from '@angular/forms';
import { environment } from '../environments/environment';
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
    NbEvaIconsModule,
    ReactiveFormsModule
    
  ],
  providers: [
    { provide: 'API_KEY', useValue: environment.apiKey }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
