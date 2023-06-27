import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiURL = 'http://www.omdbapi.com/';
  private apiKey = 'b30aebe2'; // replace with your actual API key

  constructor(private http: HttpClient) { }

  searchMovies(query: string) {
    return this.http.get(`${this.apiURL}?s=${query}&apikey=${this.apiKey}`);
  }
}
