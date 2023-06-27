import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmarkedMoviesComponent } from './bookmarked-movies.component';

describe('BookmarkedMoviesComponent', () => {
  let component: BookmarkedMoviesComponent;
  let fixture: ComponentFixture<BookmarkedMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookmarkedMoviesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookmarkedMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Add a test for the bookmarks property
  it('should have an empty bookmarks array initially', () => {
    expect(component.bookmarks).toEqual([]);
  });

  
});
