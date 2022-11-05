import { Component, OnInit } from '@angular/core';
import { Song } from '../songs/song';
import { SONGS } from '../songs/songs-data';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.scss']
})
export class SongListComponent implements OnInit {

  songs = SONGS;
  constructor() { }

  ngOnInit(): void {
  }

}
