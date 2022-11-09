import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Song } from '../songs/song';
import { SongService } from '../song.service';
import { SongDetailComponent } from '../song-detail/song-detail.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  selectedSong?: Song;

  constructor(private songService: SongService) {}

  ngOnInit() {
    this.songService.songSelected.subscribe((song: Song) => {
      this.selectedSong = song;
    });
  }
}
