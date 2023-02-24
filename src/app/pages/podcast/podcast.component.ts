import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { PodcastService } from 'src/app/services/podcast-service.service';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-podcast',
  templateUrl: './podcast.component.html',
  styleUrls: ['./podcast.component.scss'],
})
export class PodcastComponent implements OnInit, OnDestroy {
  podcastSub: Subscription;
  podcastId: string;
  podcastDetails: any;
  podcast: any;

  constructor(
    private service: PodcastService,
    private state: StateService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.firstChild?.params.subscribe((params: any) => {
      this.podcastId = params.podcastId;
      this.getPodcastDetails();
    });
  }

  ngOnDestroy(): void {
    this.podcastSub.unsubscribe();
  }

  private getPodcastDetails() {
    this.podcastSub = this.service
      .getPodcastsDetails(this.podcastId)
      .subscribe((res) => {
        this.podcastDetails = res;
        this.podcast = this.state.getPodcast()
        if (!this.podcast) {
          this.router.navigate(["/"])
        }
      });
  }
}
