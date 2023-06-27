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
      this.bookmarks = JSON.parse(storedBookmarks);
    }
  }
}
