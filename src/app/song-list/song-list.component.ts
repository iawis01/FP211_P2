import { Component, OnInit } from '@angular/core';
import { Song } from '../songs/song';
import { SONGS } from '../songs/songs-data';
import { SongService } from '../song.service';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.scss']
})
export class SongListComponent implements OnInit {

  songs : Song[] = [];
  selectedSong? : Song;

  constructor(private songService: SongService) { }

  ngOnInit(): void {
    this.getSongs();
  }

  onSelect(song: Song): void{
    this.selectedSong = song;
  }

  //Esto es síncrono. No serviría para obtener datos en una aplicación con base de datos..
  //En ese caso habría que usar un observable asyncrono.
  //getSongs():void{
    //this.songs = this.songService.getSongs();
  //}

  //Este es asincrono
  getSongs(): void {
    this.songService.getSongs()
        .subscribe(songs => this.songs = songs);
  }


}
