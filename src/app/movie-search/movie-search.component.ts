import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent {
  public movies: any[] = [];
  public movieTitle: string = '';
  public errorMessage: string = ''; // Change the default value to an empty string

  constructor(private http: HttpClient) { }

  public searchMovies() {
    if (this.movieTitle) {
      this.http.get(`http://www.omdbapi.com/?s=${encodeURIComponent(this.movieTitle)}&apikey=your-api-key`)
        .subscribe(
          (data: any) => {
            this.movies = data.Search;
            this.errorMessage = ''; // Clear any previous error message
          },
          (error) => {
            this.errorMessage = 'An error occurred while searching for movies. Please try again later.';
            console.error('Error occurred:', error);
          }
        );
    } else {
      console.log('No movie title provided for search.');
    }
  }
}
