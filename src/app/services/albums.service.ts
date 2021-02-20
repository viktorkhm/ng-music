import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Like } from '../models/Like.model';
import { GenreLikes } from '../models/GenreLikes.model';
import { Subject } from 'rxjs';

@Injectable()

export class AlbumsService {

    private genreLikes: GenreLikes[] = [];
    private genre: string = 'ROCK';
    private token: string  = 'b0414dc9024f62cd2a4524179e9b1b15';
    genreLikesChanged = new Subject<GenreLikes[]>();

    constructor(private http: HttpClient) {
    }

	  getAlbums(genre: string) {
      this.genre = genre;
      return this.http.get(`http://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&tag=${this.genre}&api_key=${this.token}&format=json`);
    }

    addLike(genre: string, like: Like) {
      this.genreLikes.forEach(item => {
        if(item.name === genre) {
          item.likes.push(like);
        }
      });
      this.genreLikesChanged.next(this.genreLikes);
      this.saveToStorage();
    }
    
    deleteLike(genre: string, like: Like) {
      this.genreLikes.forEach(item => {
        if(item.name === genre) {
          let index = item.likes.findIndex(el => el.albumName === like.albumName);
          item.likes.splice(index, 1);
        }
      });
      this.genreLikesChanged.next(this.genreLikes);
      this.saveToStorage();
	  }

    getLikes(genre: string) {
      let storedGenreLikes = JSON.parse(localStorage.getItem('genreLikes'));
      this.genreLikes = storedGenreLikes ? storedGenreLikes : [];
      this.genreLikes[genre] ? this.genreLikes[genre] : this.genreLikes.push(new GenreLikes(genre, [])), 
      this.saveToStorage();
      return this.genreLikes.filter(item => item.name === genre)[0].likes.length;
    }

    saveToStorage() {
      localStorage.setItem('genreLikes', JSON.stringify(this.genreLikes));
    }
}