import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-podcast',
  templateUrl: './podcast.component.html',
  styleUrls: ['./podcast.component.scss'],
})
export class PodcastComponent implements OnInit, OnDestroy {
  podcastId: string;
  podcastDetails: any;
  podcast: any;

  constructor(
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
  }

  private getPodcastDetails() {
    this.podcast = this.state.getPodcast()
    if (!this.podcast) {
      this.router.navigate(["/"])
    }
  }
}
