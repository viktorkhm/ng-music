import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-genre-list-element',
  templateUrl: './genre-list-element.component.html',
  styleUrls: ['./genre-list-element.component.css']
})
export class GenreListElementComponent implements OnInit {

  @Input() genreElement;

  constructor() { }

  ngOnInit(): void {
  }

}
