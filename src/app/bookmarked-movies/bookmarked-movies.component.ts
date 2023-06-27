// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-bookmarked-movies',
//   templateUrl: './bookmarked-movies.component.html',
//   styleUrls: ['./bookmarked-movies.component.css']
// })
// export class BookmarkedMoviesComponent implements OnInit {
//   public bookmarks: any[] = [];

//   constructor() { }

//   ngOnInit(): void {
//     this.loadBookmarkedMovies();
//   }

//   loadBookmarkedMovies() {
//     // Load bookmarked movies from localStorage
//     const storedBookmarks = localStorage.getItem('bookmarks');

//     if (storedBookmarks) {
//       this.bookmarks = JSON.parse(storedBookmarks);
//     }
//   }
// }
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookmarked-movies',
  templateUrl: './bookmarked-movies.component.html',
  styleUrls: ['./bookmarked-movies.component.css']
})
export class BookmarkedMoviesComponent implements OnInit {
  public bookmarks: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.loadBookmarkedMovies();
  }

  loadBookmarkedMovies() {
    // Load bookmarked movies from localStorage
    const storedBookmarks = localStorage.getItem('bookmarks');

    if (storedBookmarks) {
      try {
        this.bookmarks = JSON.parse(storedBookmarks);
      } catch (e) {
        console.error('Error parsing bookmarks:', e);
        this.bookmarks = [];
      }
    }
  }

  unbookmarkMovie(imdbID: string) {
    // Remove the movie with the given ID from the bookmarks
    const index = this.bookmarks.findIndex(movie => movie.imdbID === imdbID);
    if (index !== -1) {
      this.bookmarks.splice(index, 1);
  
      // Save the updated bookmarks back to localStorage
      localStorage.setItem('bookmarks', JSON.stringify(this.bookmarks));
    }
  }
  
}
