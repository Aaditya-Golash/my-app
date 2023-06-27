import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiURL = 'http://www.omdbapi.com/';
  //private apiKey = 'b30aebe2'; // replace with your actual API key

  constructor(private http: HttpClient, @Inject('API_KEY') private apiKey: string) { }

  searchMovies(query: string) {
    return this.http.get(`${this.apiURL}?s=${query}&apikey=${this.apiKey}`);
  }

  bookmarkMovie(movie: Movie) {
    let bookmarks = this.getBookmarkedMovies();
    bookmarks.push(movie);
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  }

  getBookmarkedMovies(): Movie[] {
    let bookmarks = localStorage.getItem('bookmarks');
    return bookmarks ? JSON.parse(bookmarks) : [];
  }

  unbookmarkMovie(id: string) {
    let bookmarks = this.getBookmarkedMovies();
    const index = bookmarks.findIndex(movie => movie.imdbID === id);
    if (index !== -1) {
      bookmarks.splice(index, 1);
      localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    }
  }
}
