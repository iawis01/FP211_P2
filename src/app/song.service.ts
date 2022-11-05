import { Injectable } from '@angular/core';
import { Song } from './songs/song';
import { SONGS } from './songs/songs-data';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  constructor() { }

  //Esto es síncrono. No serviría para obtener datos en una aplicación con base de datos..
  //En ese caso habría que usar un observable asyncrono.
  //getSongs(): Song[]{
    //return SONGS;
  //}

  //Este es asíncrono
  getSongs(): Observable<Song[]> {
    const songs = of(SONGS);
    return songs;
  }
}
