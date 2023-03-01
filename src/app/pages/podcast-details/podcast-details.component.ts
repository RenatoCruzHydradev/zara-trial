import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { FetchingService } from 'src/app/services/fetching.service';
import { PodcastService } from 'src/app/services/podcast-service.service';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-podcast-details',
  templateUrl: './podcast-details.component.html',
  styleUrls: ['./podcast-details.component.scss'],
})
export class PodcastDetailsComponent implements OnInit, OnDestroy {
  podcastSub: Subscription;
  routeSub: Subscription;

  podcastId: string;
  podcastEpisodes: any;
  podcast: any;

  constructor(
    private service: PodcastService,
    private route: ActivatedRoute,
    private state: StateService,
    private fetchingService: FetchingService
  ) {}

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe((params: any) => {
      this.podcastId = params.podcastId;
      this.getPodcastEpisodes();
    });
  }

  ngOnDestroy(): void {
    this.podcastSub?.unsubscribe();
    this.routeSub?.unsubscribe();
  }

  private getPodcastEpisodes() {
    this.fetchingService.changeIsFetching(true);

    this.podcastSub = this.service
      .getPodcastsEpisodes(this.podcastId)
      .subscribe((res: any) => {
        res.results.shift()
        this.podcastEpisodes = res;
        this.fetchingService.changeIsFetching(false);
      });
  }

  selectEpisode(episode: any) {
    this.state.saveEpisode(episode);
  }
}
