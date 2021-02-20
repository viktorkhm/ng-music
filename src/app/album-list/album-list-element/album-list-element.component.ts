import { Component, OnInit, Input } from '@angular/core';
import { AlbumsService } from '../../services/albums.service';
import { Like } from '../../models/Like.model';
import { trigger, transition, animate, style } from '@angular/animations'

@Component({
  selector: 'app-album-list-element',
  templateUrl: './album-list-element.component.html',
  styleUrls: ['./album-list-element.component.css'],
  animations: [
    trigger('fade', [ 
      transition('void => *', [
        style({ opacity: 0 }), 
        animate(2000, style({opacity: 1}))
      ]) 
    ])
  ]
})
export class AlbumListElementComponent implements OnInit {

  @Input() genre;
  @Input() albumElement;
  
  constructor(private albumsServ: AlbumsService) { }

  ngOnInit(): void {
  }

  likeToggle(albumElement) {
    albumElement.like.state = !albumElement.like.state;
    albumElement.like.state ? this.addLike(new Like(this.albumElement.name, true)) : 
    this.deleteLike(new Like(this.albumElement.name, true));
  }

  addLike(like: Like) {
    this.albumsServ.addLike(this.genre, like);
  }

  deleteLike(like: Like) {
    this.albumsServ.deleteLike(this.genre, like);
  }

}
