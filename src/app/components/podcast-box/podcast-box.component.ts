import { Component, Input } from '@angular/core';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-podcast-box',
  templateUrl: './podcast-box.component.html',
  styleUrls: ['./podcast-box.component.scss']
})
export class PodcastBoxComponent {

  @Input() podcast: any

  constructor(private state: StateService) {}

  savePodcast() {
    this.state.savePodcast(this.podcast);
  }

}
