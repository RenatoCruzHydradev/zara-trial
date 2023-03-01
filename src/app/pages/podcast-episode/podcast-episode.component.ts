import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { FetchingService } from 'src/app/services/fetching.service';
import { PodcastService } from 'src/app/services/podcast-service.service';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-podcast-episode',
  templateUrl: './podcast-episode.component.html',
  styleUrls: ['./podcast-episode.component.scss'],
})
export class PodcastEpisodeComponent implements OnDestroy {
  podcastSub: Subscription;
  routeSub: Subscription;

  episode: any;
  episodeId: number;
  podcastId: number;
  constructor(
    private state: StateService,
    private service: PodcastService,
    private route: ActivatedRoute,
    private router: Router,
    private fetchingService: FetchingService
  ) {}

  ngOnInit() {
    this.episode = this.state.getEpisode();
    if (!this.episode) {
      this.routeSub = this.route.params.subscribe((params: any) => {
        this.episodeId = params.episodeId;
        this.podcastId = params.podcastId;
        this.getPodcastEpisodes();
      });
    }
  }

  private getPodcastEpisodes() {
    this.fetchingService.changeIsFetching(true);
    this.podcastSub = this.service
      .getPodcastsEpisodes(this.podcastId)
      .subscribe((res: any) => {
        this.fetchingService.changeIsFetching(false);
        this.episode = res.results.find((ep: any) => {
          return ep.trackId == this.episodeId;
        });

        if (!this.episode) {
          return this.router.navigate(['/404']);
        }
        return;
      });
  }

  ngOnDestroy(): void {
    this.state.clearEpisode();
    this.podcastSub?.unsubscribe();
    this.routeSub?.unsubscribe();
  }
}
