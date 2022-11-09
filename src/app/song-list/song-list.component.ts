import { Component, Input, OnInit, Output } from '@angular/core';
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
  @Output() selectedSong? : Song;
  @Input() song : Song;

  constructor(private songService: SongService) {
    this.song = {id: 1,
      title: 'For You',
      author: 'chenda',
      cover:
        'https://linkstorage.linkfire.com/medialinks/images/8c7d194f-5535-4ebd-9f93-857a84ee1700/artwork-440x440.jpg',
      group: 'NCS',
      year: 2022,
      album: 'For You',
      bpm: 160,
      length: 269,
      genre: 'Drum And Bass',}
   }

  ngOnInit(): void {
    this.getSongs();
  }

  onSelected(selectedSong : Song){
    this.songService.songSelected.emit(selectedSong)
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
