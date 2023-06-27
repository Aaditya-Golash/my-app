// import { HttpClient } from '@angular/common/http';
// import { Component, OnInit } from '@angular/core';


// interface Movie {
//   Title: string;
//   Year: string;
//   imdbID: string;
//   Type: string;
//   Poster: string;
// }

// @Component({
//   selector: 'app-movie-search',
//   templateUrl: './movie-search.component.html',
//   styleUrls: ['./movie-search.component.css']
// })
// export class MovieSearchComponent implements OnInit {
//   movies: Movie[] = [];
//   searchTerm = '';
//   errorMessage = '';

//   constructor(private http: HttpClient) { }

//   ngOnInit(): void { }

//   /**
//    * This function fetches movies from the OMDb API based on the search term.
//    * The fetched movies are stored in the `movies` array.
//    */
//   searchMovies() {
//     if (this.searchTerm) {
//       this.http.get<Movie[]>(`http://www.omdbapi.com/?apikey=[b30aebe2]&s=${encodeURIComponent(this.searchTerm)}`)
//         .subscribe(
//           (data: any) => {
//             this.movies = data.Search;
//             this.errorMessage = ''; // Clear any previous error message
//           },
//           (error) => {
//             this.errorMessage = 'An error occurred while searching for movies. Please try again later.';
//             console.error('Error occurred:', error);
//           }
//         );
//     } else {
//       console.log('No movie title provided for search.');
//     }
//   }

//   /**
//    * This function allows the user to bookmark a movie.
//    * The bookmarked movie is stored in local storage.
//    *
//    * @param movie - The movie to be bookmarked.
//    */
//   bookmarkMovie(movie: Movie) {
//     let bookmarks = JSON.parse(localStorage.getItem('bookmarks')!) || [];
//     bookmarks.push(movie);
//     localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
//   }
// }
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent implements OnInit {
  movies: Movie[] = [];
  searchTerm = '';
  errorMessage = '';

  // Add a formGroup to handle the search form
  searchForm = this.fb.group({
    movieName: ['', Validators.required]
  });

  constructor(private http: HttpClient, private fb: FormBuilder) { }

  ngOnInit(): void { }

  /**
   * This function fetches movies from the OMDb API based on the search term.
   * The fetched movies are stored in the `movies` array.
   */
  searchMovies() {
    this.searchTerm = this.searchForm.value.movieName || '';


    if (this.searchTerm) {
      this.http.get<Movie[]>(`http://www.omdbapi.com/?apikey=[b30aebe2]&s=${encodeURIComponent(this.searchTerm)}`)
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

  /**
   * This function allows the user to bookmark a movie.
   * The bookmarked movie is stored in local storage.
   *
   * @param movie - The movie to be bookmarked.
   */
  bookmarkMovie(movie: Movie) {
    let bookmarks = localStorage.getItem('bookmarks');
    let bookmarksList: Movie[] = bookmarks ? JSON.parse(bookmarks) : [];
  
    // Check if the movie is already bookmarked
    if (!bookmarksList.some(bookmarkedMovie => bookmarkedMovie.imdbID === movie.imdbID)) {
      bookmarksList.push(movie);
      localStorage.setItem('bookmarks', JSON.stringify(bookmarksList));
    } else {
      console.log('This movie is already bookmarked.');
    }
  }
  onSubmit() {
    this.searchTerm = this.searchForm.get('movieName')?.value || '';
    this.searchMovies();
  }
  
  }

