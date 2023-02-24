import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PodcastComponent } from './podcast/podcast.component';
import { PodcastEpisodeComponent } from './podcast-episode/podcast-episode.component';
import { AppRoutingModule } from '../app-routing.module';
import { ComponentsModule } from '../components/components.module';
import { PodcastListComponent } from './podcast-list/podcast-list.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PodcastDetailsComponent } from './podcast-details/podcast-details.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    DashboardComponent,
    PodcastDetailsComponent,
    PodcastListComponent,
    PodcastComponent,
    PodcastEpisodeComponent,
    NotFoundComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    FormsModule,
  ],
  exports: [
    DashboardComponent,
    PodcastDetailsComponent,
    PodcastComponent,
    PodcastEpisodeComponent,
    NotFoundComponent
  ],
  providers: [],
  bootstrap: [],
})
export class PagesModule {}
