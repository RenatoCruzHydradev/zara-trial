import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PodcastEpisodeComponent } from './podcast-episode.component';

describe('PodcastEpisodeComponent', () => {
  let component: PodcastEpisodeComponent;
  let fixture: ComponentFixture<PodcastEpisodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PodcastEpisodeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PodcastEpisodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
