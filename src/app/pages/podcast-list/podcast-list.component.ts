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
    if (this.shouldFetchNewList()) {
      this.getPodcastList();
    } else {
      this.podcasts = JSON.parse(localStorage.getItem("podcasts") as any)
      this.filteredPodcasts = JSON.parse(localStorage.getItem("podcasts") as any)
    }
  }

  getPodcastList() {
    this.fetchingService.changeIsFetching(true);
    this.podcastSub = this.service.getPodcastsList().subscribe((res) => {
      this.podcasts = res.feed.entry;
      this.filteredPodcasts = res.feed.entry;
      localStorage.setItem("lastFetch", new Date().toJSON())
      localStorage.setItem("podcasts", JSON.stringify(this.podcasts))
      this.fetchingService.changeIsFetching(false);
    });
  }

  shouldFetchNewList(): boolean {
    if (!localStorage.getItem("lastFetch") || !localStorage.getItem("podcasts")) {
      return true
    }

    const lastFetch = localStorage.getItem("lastFetch")
    if (lastFetch) {
      const oneDayInMs = 24 * 60 * 60 * 1000; // One day in milliseconds
      const now = new Date(); // Current date and time
      return now.getTime() - new Date(lastFetch).getTime() >= oneDayInMs;
    }

    return true
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
