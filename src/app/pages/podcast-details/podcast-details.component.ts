import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { PodcastService } from 'src/app/services/podcast-service.service';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-podcast-details',
  templateUrl: './podcast-details.component.html',
  styleUrls: ['./podcast-details.component.scss']
})
export class PodcastDetailsComponent implements OnInit, OnDestroy {
  podcastSub: Subscription;
  podcastId: string;
  podcastEpisodes: any;
  podcast: any;
  selectedEpisode: any;

  constructor(
    private service: PodcastService,
    private route: ActivatedRoute,
    private state: StateService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      this.podcastId = params.podcastId;
      this.getPodcastEpisodes();
    });
  }

  ngOnDestroy(): void {
    this.podcastSub.unsubscribe();
  }

  private getPodcastEpisodes() {
    this.podcastSub = this.service
      .getPodcastsEpisodes(this.podcastId)
      .subscribe((res) => {
        this.podcastEpisodes = res;
      });
  }

  selectEpisode(episode: any) {
    this.state.saveEpisode(episode);
    this.selectedEpisode = episode;
  }
}
