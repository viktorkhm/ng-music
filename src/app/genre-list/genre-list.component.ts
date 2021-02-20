import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Genre } from '../models/Genre.model';

@Component({
  selector: 'app-genre-list',
  templateUrl: './genre-list.component.html',
  styleUrls: ['./genre-list.component.css']
})
export class GenreListComponent implements OnInit {

  genreList: Genre[] = [new Genre('Rock', 'rgb(236,30,50)', 'https://cdn.wallpapersafari.com/40/34/Jwqrfp.jpg'), 
               new Genre('Electro', 'rgb(155,241,225)', 'https://i.ytimg.com/vi/DBW-Rq4iEhQ/maxresdefault.jpg'), 
               new Genre('Hip-Hop', 'rgb(245,156,35)', 'https://images.complex.com/complex/images/c_scale,f_auto,q_auto,w_768/fl_lossy,pg_1/p3kmnuqbkpp5rvgfeyvc/best-producers-lead'), 
               new Genre('Pop', 'rgb(195,240,200)', 'https://pyxis.nymag.com/v1/imgs/3a3/b1f/2141226b8ab1ae07afe4b541ee0d2b0825-11-yic-pop-essay.rsocial.w1200.jpg'), 
               new Genre('R&B', 'rgb(241,56,165)', 'https://images.squarespace-cdn.com/content/v1/5665ac88e4b0ec6fd4974003/1560062410742-VHWXYBTFNDTYU1AFGRZU/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/image-asset.jpeg?format=1500w'), 
               new Genre('Indie', 'rgb(65,0,245)', 'https://media.pitchfork.com/photos/5f6e51fa860c31a7582ca1aa/2:1/w_2560%2Cc_limit/POC-edit-Recovered.png')];

  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log(this.genreList);
  }

  navigateToTheAlboms(i, element) {
    this.router.navigate([i, element.name]);
  }

}
