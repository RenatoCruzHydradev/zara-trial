import { Component, OnDestroy } from '@angular/core';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-podcast-episode',
  templateUrl: './podcast-episode.component.html',
  styleUrls: ['./podcast-episode.component.scss']
})
export class PodcastEpisodeComponent implements OnDestroy {

  episode: any;
  constructor(private state: StateService) {

  }

  ngOnInit() {
    this.episode = this.state.getEpisode();
    console.log("episode - ", this.episode)
  }

  ngOnDestroy(): void {
    this.state.clearEpisode()
  }

}
