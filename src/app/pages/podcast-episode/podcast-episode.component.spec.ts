import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule  } from '@angular/common/http/testing';
import { RouterTestingModule } from "@angular/router/testing";

import { PodcastEpisodeComponent } from './podcast-episode.component';

describe('PodcastEpisodeComponent', () => {
  let component: PodcastEpisodeComponent;
  let fixture: ComponentFixture<PodcastEpisodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PodcastEpisodeComponent ],
      imports: [HttpClientTestingModule, RouterTestingModule ]
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
