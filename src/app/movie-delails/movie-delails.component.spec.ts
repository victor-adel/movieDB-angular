import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDelailsComponent } from './movie-delails.component';

describe('MovieDelailsComponent', () => {
  let component: MovieDelailsComponent;
  let fixture: ComponentFixture<MovieDelailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieDelailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDelailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
