import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  podcast: any
  episode: any

  constructor() { }

  getPodcast() {
    return this.podcast
  }

  clearPodcast() {
    return this.podcast = null
  }

  savePodcast(podcast: any) {
    return this.podcast = podcast
  }

  getEpisode() {
    return this.episode
  }

  clearEpisode() {
    return this.episode = null
  }

  saveEpisode(episode: any) {
    return this.episode = episode
  }
}
