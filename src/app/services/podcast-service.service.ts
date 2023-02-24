import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PodcastService {
  baseUrl: string = 'https://itunes.apple.com';

  constructor(private http: HttpClient) {}

  getPodcastsList(): Observable<any> {
    return this.http.get<any>(
      `${this.baseUrl}/us/rss/toppodcasts/limit=100/genre=1310/json`
    );
  }

  getPodcastsDetails(id: string | number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/lookup/json`, {
      params: { id: id, entity: 'podcastEpisode' },
    });
  }
}
