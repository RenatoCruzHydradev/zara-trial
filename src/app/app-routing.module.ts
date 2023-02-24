import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PodcastDetailsComponent } from './pages/podcast-details/podcast-details.component';
import { PodcastEpisodeComponent } from './pages/podcast-episode/podcast-episode.component';
import { PodcastListComponent } from './pages/podcast-list/podcast-list.component';
import { PodcastComponent } from './pages/podcast/podcast.component';

const routes: Routes = [
  { path: '', component: PodcastListComponent },
  {
    path: 'podcast',
    component: PodcastComponent,
    children: [
      {
        path: ':podcastId',
        component: PodcastDetailsComponent,
        pathMatch: 'full',
      },
      {
        path: ':podcastId/episode/:episodeId',
        component: PodcastEpisodeComponent,
        pathMatch: 'full',
      },
      { path: '', redirectTo: '/', pathMatch: 'full' },
      { path: '**', redirectTo: '/'},
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
