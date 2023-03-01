import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FetchingService } from 'src/app/services/fetching.service';
import { PodcastService } from 'src/app/services/podcast-service.service';

@Component({
  selector: 'app-podcast-list',
  templateUrl: './podcast-list.component.html',
  styleUrls: ['./podcast-list.component.scss'],
})
export class PodcastListComponent implements OnInit, OnDestroy {
  podcastSub: Subscription;
  podcasts: any[] = [];
  filteredPodcasts: any[] = [];
  formValue: string;

  constructor(
    private service: PodcastService,
    private fetchingService: FetchingService
  ) {}

  ngOnInit(): void {
    this.fetchingService.changeIsFetching(true);
    this.podcastSub = this.service.getPodcastsList().subscribe((res) => {
      this.podcasts = res.feed.entry;
      this.filteredPodcasts = res.feed.entry;
      this.fetchingService.changeIsFetching(false);
    });
  }

  ngOnDestroy(): void {
    this.podcastSub?.unsubscribe();
  }

  filterChange() {
    this.filteredPodcasts = this.podcasts.filter((podcast) => {
      const name: string = String(podcast['im:name'].label).toUpperCase();
      const artist: string = String(podcast['im:artist'].label).toUpperCase();
      const filter: string = this.formValue.toUpperCase();
      return name.includes(filter) || artist.includes(filter);
    });
  }
}
