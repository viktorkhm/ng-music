import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { AppComponent } from './app.component';
import { GenreListComponent } from './genre-list/genre-list.component';
import { GenreListElementComponent } from './genre-list/genre-list-element/genre-list-element.component';
import { AlbumListComponent } from './album-list/album-list.component';
import { AlbumListElementComponent } from './album-list/album-list-element/album-list-element.component';
import { FilterByNamePipe } from './pipes/filter.pipe';
import { AlbumsService } from './services/albums.service';

@NgModule({
  declarations: [
    AppComponent,
    GenreListComponent,
    GenreListElementComponent,
    AlbumListComponent,
    AlbumListElementComponent,
    FilterByNamePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatIconModule,
    BrowserAnimationsModule
  ],
  providers: [AlbumsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
