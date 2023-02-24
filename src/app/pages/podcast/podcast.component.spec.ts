import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { PodcastComponent } from './podcast.component';

describe('PodcastComponent', () => {
  let component: PodcastComponent;
  let fixture: ComponentFixture<PodcastComponent>;

  const podcastDetails = {
    wrapperType: 'track',
    kind: 'podcast',
    artistId: 1535844019,
    collectionId: 1535809341,
    trackId: 1535809341,
    artistName: 'The Joe Budden Network',
    collectionName: 'The Joe Budden Podcast',
    trackName: 'The Joe Budden Podcast',
    collectionCensoredName: 'The Joe Budden Podcast',
    trackCensoredName: 'The Joe Budden Podcast',
    artistViewUrl:
      'https://podcasts.apple.com/us/artist/the-joe-budden-network/1535844019?uo=4',
    collectionViewUrl:
      'https://podcasts.apple.com/us/podcast/the-joe-budden-podcast/id1535809341?uo=4',
    feedUrl: 'https://jbpod.libsyn.com/applepodcast',
    trackViewUrl:
      'https://podcasts.apple.com/us/podcast/the-joe-budden-podcast/id1535809341?uo=4',
    artworkUrl30:
      'https://is2-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/30x30bb.jpg',
    artworkUrl60:
      'https://is2-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/60x60bb.jpg',
    artworkUrl100:
      'https://is2-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/100x100bb.jpg',
    collectionPrice: 0.0,
    trackPrice: 0.0,
    collectionHdPrice: 0,
    releaseDate: '2023-02-18T08:00:00Z',
    collectionExplicitness: 'notExplicit',
    trackExplicitness: 'explicit',
    trackCount: 366,
    trackTimeMillis: 10610,
    country: 'USA',
    currency: 'USD',
    primaryGenreName: 'Music',
    contentAdvisoryRating: 'Explicit',
    artworkUrl600:
      'https://is2-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/600x600bb.jpg',
    genreIds: ['1310', '26'],
    genres: ['Music', 'Podcasts'],
  };

  const podcastMetadata = {
    image:
      'https://is2-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/600x600bb.jpg',
    name: 'The Joe Budden Podcast',
    artist: 'The Joe Budden Network',
    summary: 'mock description',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PodcastComponent],
      imports: [HttpClientTestingModule, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(PodcastComponent);
    component = fixture.componentInstance;
    component.podcastMetadata = podcastMetadata;
    component.podcastDetails = podcastDetails;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have image', () => {
    const image = fixture.debugElement.nativeElement.querySelector('img');
    expect(image).toBeTruthy();
  });

  it('should have title/author', () => {
    const title =
      fixture.debugElement.nativeElement.querySelector('.title.with-border');
    expect(title.textContent).toContain('The Joe Budden Podcast');
    expect(title.textContent).toContain('The Joe Budden Network');
  });

  it('should have summary', () => {
    const title = fixture.debugElement.nativeElement.querySelector(
      '.description.with-border'
    );
    expect(title.textContent).toContain('mock description');
  });
});
