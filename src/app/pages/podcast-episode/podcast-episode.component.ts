import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { PodcastService } from 'src/app/services/podcast-service.service';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-podcast-episode',
  templateUrl: './podcast-episode.component.html',
  styleUrls: ['./podcast-episode.component.scss']
})
export class PodcastEpisodeComponent implements OnDestroy {

  episode: any;
  episodeId: number;
  podcastId: number;
  podcastSub: Subscription;
  constructor(private state: StateService, private service: PodcastService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.episode = this.state.getEpisode();
    if (!this.episode) {
      this.route.params.subscribe((params: any) => {
        this.episodeId = params.episodeId
        this.podcastId = params.podcastId
        this.getPodcastEpisodes();
      });
    }
  }

  private getPodcastEpisodes() {
    this.podcastSub = this.service
      .getPodcastsEpisodes(this.podcastId)
      .subscribe((res: any) => {
        this.episode = res.results.find((ep: any) => {
          return ep.trackId == this.episodeId
        })

      });
  }

  ngOnDestroy(): void {
    this.state.clearEpisode()
    this.podcastSub?.unsubscribe()
  }

}
