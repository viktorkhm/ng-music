import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GenreListComponent } from './genre-list/genre-list.component';
import { AlbumListComponent } from './album-list/album-list.component';


const routes: Routes = [
                        { path: '', component: GenreListComponent, pathMatch:'full' },
                        { path: ':id/:name', component: AlbumListComponent }
                       ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
