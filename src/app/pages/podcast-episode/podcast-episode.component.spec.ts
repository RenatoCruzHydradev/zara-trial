import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { PodcastEpisodeComponent } from './podcast-episode.component';

describe('PodcastEpisodeComponent', () => {
  let component: PodcastEpisodeComponent;
  let fixture: ComponentFixture<PodcastEpisodeComponent>;

  const podcastEpisode = {
    country: 'USA',
    genres: [
      {
        name: 'Music',
        id: '1310',
      },
    ],
    episodeGuid: 'da1030ff-da4a-49e8-bd4e-fd62ad93286f',
    description:
      'The JBP kicks off this episode recapping their past few days before diving into their opinions on NBA All-Star Weekend in Utah (16:35). A video of YSL Woody allegedly snitching has been released which leads into a conversation surrounding street culture (50:46). Boosie cancels a potential collab album with T.I. (1:19:38), Jonathan Majors’ recent photoshoot for Ebony Magazine has sparked controversy (1:32:20), the advancement of artificial intelligence (2:15:30), + MORE!\n Become a Patron of The Joe Budden Podcast for additional bonus episodes and visual content for all things JBP.: Tap in here www.patreon.com/JoeBudden\n  \n Sleeper Picks:\n Joe | Nicole Bus - “Rain”\n Ice | Yung Bleu - “Games Women Play”\n Parks | Styles P - “Porsche Lights”\n Ish | Mario (feat. Ty Dolla $ign) - “Used To Me”\n Melyssa Ford | Th&o. - “Prosecco”\n QueenzFlip | MASTERPIECE QUY | "Move On (QuyMIx)"',
    releaseDate: '2023-02-22T12:18:19Z',
    trackId: 1000601100410,
    trackName: 'Episode 604 | "Enjoy Homeboy"',
    feedUrl: 'https://jbpod.libsyn.com/applepodcast',
    closedCaptioning: 'none',
    shortDescription:
      'The JBP kicks off this episode recapping their past few days before diving into their opinions on NBA All-Star Weekend in Utah (16:35). A video of YSL Woody allegedly snitching has been released which leads into a conversation surrounding street...',
    collectionId: 1535809341,
    collectionName: 'The Joe Budden Podcast',
    artistIds: [1535844019],
    previewUrl:
      'https://traffic.libsyn.com/secure/jbpod/Joe_Budden_Podcast_604_1.mp3?dest-id=2422538',
    collectionViewUrl:
      'https://itunes.apple.com/us/podcast/the-joe-budden-podcast/id1535809341?mt=2&uo=4',
    trackTimeMillis: 9490000,
    episodeFileExtension: 'mp3',
    episodeContentType: 'audio',
    trackViewUrl:
      'https://podcasts.apple.com/us/podcast/episode-604-enjoy-homeboy/id1535809341?i=1000601100410&uo=4',
    contentAdvisoryRating: 'Explicit',
    episodeUrl:
      'https://traffic.libsyn.com/secure/jbpod/Joe_Budden_Podcast_604_1.mp3?dest-id=2422538',
    artworkUrl600:
      'https://is2-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/600x600bb.jpg',
    artworkUrl160:
      'https://is2-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/160x160bb.jpg',
    artworkUrl60:
      'https://is2-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/60x60bb.jpg',
    artistViewUrl:
      'https://itunes.apple.com/us/artist/the-joe-budden-network/1535844019?mt=2&uo=4',
    kind: 'podcast-episode',
    wrapperType: 'podcastEpisode',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PodcastEpisodeComponent],
      imports: [HttpClientTestingModule, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(PodcastEpisodeComponent);
    component = fixture.componentInstance;

    component.ngOnInit = () => {}
    fixture.detectChanges();
    component.episode = podcastEpisode;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have title', () => {
    const title = fixture.debugElement.nativeElement.querySelector('.title');
    expect(title.textContent).toContain(podcastEpisode.collectionName);
  });

  it('should have description', () => {
    const description =
      fixture.debugElement.nativeElement.querySelector('.description');
    expect(description.textContent).toContain(podcastEpisode.description);
  });

  it('should have track player', () => {
    const track = fixture.debugElement.nativeElement.querySelector('source');
    expect(track.src).toContain(podcastEpisode.episodeUrl);
  });
});
