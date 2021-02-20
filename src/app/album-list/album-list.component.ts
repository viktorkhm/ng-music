import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Album } from '../models/Album.model';
import { Like } from '../models/Like.model';
import { AlbumsService } from '../services/albums.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent implements OnInit {

  searchName: string;
  genreName: string = '';
  likes: number = 0;
  albumList: Album[] = [];

  constructor(private route: ActivatedRoute, private albumsServ: AlbumsService, private router: Router) { }

  ngOnInit(): void {
    this.getAlbomsList();
    this.getLikes();
    this.updateLikes();
  }

  getAlbomsList() {
    this.genreName = this.route.snapshot.paramMap.get('name');
    let storedGenreLikes = JSON.parse(localStorage.getItem('genreLikes'));
    let currentGenreLikes = storedGenreLikes ? storedGenreLikes.filter(genreItem => genreItem.name === this.genreName)[0] : null;
    let likes = currentGenreLikes ? currentGenreLikes.likes : [];
    this.albumsServ.getAlbums(this.genreName).subscribe(
			(response:any) => { 
        this.albumList = response.albums.album;
        this.albumList.forEach((album, index, albums) => {
          let albumLike = likes.filter(like => like.albumName === album.name)[0];
          let itemLikeState = albumLike ? albumLike.state : false;
          albums[index].like = new Like(album.name, itemLikeState);
        });
      }
    );
  }

  getLikes() {
    this.likes = this.albumsServ.getLikes(this.genreName);
  }

  updateLikes() {
    this.albumsServ.genreLikesChanged.subscribe((genreLikes) => {
      this.likes =  genreLikes.filter(item => item.name === this.genreName)[0].likes.length;
    });
  }

  navigateToTheGenres() {
    this.router.navigateByUrl('/');
  }

}
