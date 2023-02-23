import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TopBarComponent } from './top-bar/top-bar.component';
import { PodcastBoxComponent } from './podcast-box/podcast-box.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    TopBarComponent,
    PodcastBoxComponent
  ],
  imports: [
    BrowserModule,
    RouterModule
  ],
  exports: [TopBarComponent, PodcastBoxComponent],
  providers: [],
  bootstrap: []
})
export class ComponentsModule { }
