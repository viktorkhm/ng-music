import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenreListElementComponent } from './genre-list-element.component';

describe('GenreListElementComponent', () => {
  let component: GenreListElementComponent;
  let fixture: ComponentFixture<GenreListElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenreListElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenreListElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
