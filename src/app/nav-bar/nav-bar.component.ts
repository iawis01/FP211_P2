import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Song } from '../songs/song';
import { SongService} from '../song.service';
import { SongDetailComponent } from '../song-detail/song-detail.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  song: Song | undefined;
  subscription: Subscription | undefined;
  public displaySong: boolean = false;
  public counter: number = 0;

  constructor(private songService: SongService) { }

  ngOnInit(): void {

  }


}
