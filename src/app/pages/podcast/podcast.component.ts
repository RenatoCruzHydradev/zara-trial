import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { PodcastService } from 'src/app/services/podcast-service.service';
import * as xml2js from 'xml2js';

@Component({
  selector: 'app-podcast',
  templateUrl: './podcast.component.html',
  styleUrls: ['./podcast.component.scss'],
})
export class PodcastComponent implements OnInit, OnDestroy {
  podcastSub: Subscription;
  podcastId: string;
  podcastDetails: any;
  podcastMetadata: any;
  podcast: any;

  constructor(
    private service: PodcastService,
    private route: ActivatedRoute,
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
        this.podcastDetails = res.results[0];
        this.getPodcastMetaData();
      });
  }

  getPodcastMetaData() {
    this.service
      .getPodcastsMetaData(this.podcastDetails.feedUrl)
      .subscribe((res) => {
        const parser = new xml2js.Parser();
        parser.parseStringPromise(res).then((res) => {
          const data = res.rss.channel[0];
          this.podcastMetadata = {
            image: data.image[0].url[0],
            name: data.title[0],
            artist: data['itunes:author'][0],
            summary: data.description[0],
          };
        });
      });
  }
}
