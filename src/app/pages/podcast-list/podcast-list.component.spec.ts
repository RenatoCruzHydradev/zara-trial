import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { PodcastListComponent } from './podcast-list.component';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/components/components.module';


describe('PodcastListComponent', () => {
  let component: PodcastListComponent;
  let fixture: ComponentFixture<PodcastListComponent>;

  let randomPodcasts = [
    {
      'im:name': {
        label: 'The Joe Budden Podcast',
      },
      'im:image': [
        {
          label:
            'https://is3-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/55x55bb.png',
          attributes: {
            height: '55',
          },
        },
        {
          label:
            'https://is5-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/60x60bb.png',
          attributes: {
            height: '60',
          },
        },
        {
          label:
            'https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/170x170bb.png',
          attributes: {
            height: '170',
          },
        },
      ],
      summary: {
        label:
          'Tune into Joe Budden and his friends. Follow along the crazy adventures of these very random friends.',
      },
      'im:price': {
        label: 'Get',
        attributes: {
          amount: '0',
          currency: 'USD',
        },
      },
      'im:contentType': {
        attributes: {
          term: 'Podcast',
          label: 'Podcast',
        },
      },
      rights: {
        label: '© All rights reserved',
      },
      title: {
        label: 'The Joe Budden Podcast - The Joe Budden Network',
      },
      link: {
        attributes: {
          rel: 'alternate',
          type: 'text/html',
          href: 'https://podcasts.apple.com/us/podcast/the-joe-budden-podcast/id1535809341?uo=2',
        },
      },
      id: {
        label:
          'https://podcasts.apple.com/us/podcast/the-joe-budden-podcast/id1535809341?uo=2',
        attributes: {
          'im:id': '1535809341',
        },
      },
      'im:artist': {
        label: 'The Joe Budden Network',
        attributes: {
          href: 'https://podcasts.apple.com/us/artist/the-joe-budden-network/1535844019?uo=2',
        },
      },
      category: {
        attributes: {
          'im:id': '1310',
          term: 'Music',
          scheme:
            'https://podcasts.apple.com/us/genre/podcasts-music/id1310?uo=2',
          label: 'Music',
        },
      },
      'im:releaseDate': {
        label: '2023-02-18T00:00:00-07:00',
        attributes: {
          label: 'February 18, 2023',
        },
      },
    },
    {
      'im:name': {
        label: 'Million Dollaz Worth Of Game',
      },
      'im:image': [
        {
          label:
            'https://is1-ssl.mzstatic.com/image/thumb/Podcasts125/v4/7b/cf/f6/7bcff6bb-5f99-6c2f-c6c5-3a9799f3df21/mza_8544742664200824246.jpg/55x55bb.png',
          attributes: {
            height: '55',
          },
        },
        {
          label:
            'https://is3-ssl.mzstatic.com/image/thumb/Podcasts125/v4/7b/cf/f6/7bcff6bb-5f99-6c2f-c6c5-3a9799f3df21/mza_8544742664200824246.jpg/60x60bb.png',
          attributes: {
            height: '60',
          },
        },
        {
          label:
            'https://is2-ssl.mzstatic.com/image/thumb/Podcasts125/v4/7b/cf/f6/7bcff6bb-5f99-6c2f-c6c5-3a9799f3df21/mza_8544742664200824246.jpg/170x170bb.png',
          attributes: {
            height: '170',
          },
        },
      ],
      summary: {
        label:
          'The Million Dollaz Worth of Game show, a weekly podcast with rapper/actor @GillieDaKing and social media influencer and disruptor @Wallo267 - The perfect blend of discussing music, real life issues, personal experiences, honest advice and comedy\n\nYou can find every episode of this show on Apple Podcasts, Spotify or YouTube. Prime Members can listen ad-free on Amazon Music. For more, visit barstool.link/mworthofgame',
      },
      'im:price': {
        label: 'Get',
        attributes: {
          amount: '0',
          currency: 'USD',
        },
      },
      'im:contentType': {
        attributes: {
          term: 'Podcast',
          label: 'Podcast',
        },
      },
      rights: {
        label: '© 2023 Barstool Sports, Inc.',
      },
      title: {
        label: 'Million Dollaz Worth Of Game - Barstool Sports',
      },
      link: {
        attributes: {
          rel: 'alternate',
          type: 'text/html',
          href: 'https://podcasts.apple.com/us/podcast/million-dollaz-worth-of-game/id1460157002?uo=2',
        },
      },
      id: {
        label:
          'https://podcasts.apple.com/us/podcast/million-dollaz-worth-of-game/id1460157002?uo=2',
        attributes: {
          'im:id': '1460157002',
        },
      },
      'im:artist': {
        label: 'Barstool Sports',
        attributes: {
          href: 'https://podcasts.apple.com/us/artist/barstool-sports/1524874689?uo=2',
        },
      },
      category: {
        attributes: {
          'im:id': '1523',
          term: 'Music Commentary',
          scheme:
            'https://podcasts.apple.com/us/genre/podcasts-music-music-commentary/id1523?uo=2',
          label: 'Music Commentary',
        },
      },
      'im:releaseDate': {
        label: '2023-02-13T10:26:00-07:00',
        attributes: {
          label: 'February 13, 2023',
        },
      },
    },
    {
      'im:name': {
        label: "60 Songs That Explain the '90s",
      },
      'im:image': [
        {
          label:
            'https://is4-ssl.mzstatic.com/image/thumb/Podcasts112/v4/f4/53/be/f453be7f-2a34-0617-7bc1-bc57d9b747fc/mza_6548891788110664288.jpg/55x55bb.png',
          attributes: {
            height: '55',
          },
        },
        {
          label:
            'https://is3-ssl.mzstatic.com/image/thumb/Podcasts112/v4/f4/53/be/f453be7f-2a34-0617-7bc1-bc57d9b747fc/mza_6548891788110664288.jpg/60x60bb.png',
          attributes: {
            height: '60',
          },
        },
        {
          label:
            'https://is1-ssl.mzstatic.com/image/thumb/Podcasts112/v4/f4/53/be/f453be7f-2a34-0617-7bc1-bc57d9b747fc/mza_6548891788110664288.jpg/170x170bb.png',
          attributes: {
            height: '170',
          },
        },
      ],
      summary: {
        label:
          'The 1990s were a turning point in music: with the increasingly connected world enabling an unprecedented coalescence of various styles and genres, the decade featured the rapid evolution of sonic artistry — and subsequently shaped the soundscape of eras that followed. Listen along as The Ringer’s preeminent music critic Rob Harvilla curates and explores 60 iconic songs from the ‘90s that define the decade.',
      },
      'im:price': {
        label: 'Get',
        attributes: {
          amount: '0',
          currency: 'USD',
        },
      },
      'im:contentType': {
        attributes: {
          term: 'Podcast',
          label: 'Podcast',
        },
      },
      rights: {
        label: '© All rights reserved.',
      },
      title: {
        label: "60 Songs That Explain the '90s - The Ringer",
      },
      link: {
        attributes: {
          rel: 'alternate',
          type: 'text/html',
          href: 'https://podcasts.apple.com/us/podcast/60-songs-that-explain-the-90s/id1635211340?uo=2',
        },
      },
      id: {
        label:
          'https://podcasts.apple.com/us/podcast/60-songs-that-explain-the-90s/id1635211340?uo=2',
        attributes: {
          'im:id': '1635211340',
        },
      },
      'im:artist': {
        label: 'The Ringer',
      },
      category: {
        attributes: {
          'im:id': '1310',
          term: 'Music',
          scheme:
            'https://podcasts.apple.com/us/genre/podcasts-music/id1310?uo=2',
          label: 'Music',
        },
      },
      'im:releaseDate': {
        label: '2023-02-15T00:00:00-07:00',
        attributes: {
          label: 'February 15, 2023',
        },
      },
    },
    {
      'im:name': {
        label: 'Drink Champs',
      },
      'im:image': [
        {
          label:
            'https://is4-ssl.mzstatic.com/image/thumb/Podcasts113/v4/46/39/69/46396977-6d87-f120-6432-6373dcefdf9b/mza_6589930413574180525.jpg/55x55bb.png',
          attributes: {
            height: '55',
          },
        },
        {
          label:
            'https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/46/39/69/46396977-6d87-f120-6432-6373dcefdf9b/mza_6589930413574180525.jpg/60x60bb.png',
          attributes: {
            height: '60',
          },
        },
        {
          label:
            'https://is4-ssl.mzstatic.com/image/thumb/Podcasts113/v4/46/39/69/46396977-6d87-f120-6432-6373dcefdf9b/mza_6589930413574180525.jpg/170x170bb.png',
          attributes: {
            height: '170',
          },
        },
      ],
      summary: {
        label:
          'Legendary Queens rapper-turned show host N.O.R.E. teams up with Miami hip-hop pioneer DJ EFN for a night of boozy conversation and boisterous storytelling. The hosts and guests engage together in fun, light-hearted conversation - looking back at their paths to success, highlighting their lives, friendships, and iconic moments within their career. In this unfiltered series, drinks are flowing and jokes are rolling - take a seat at the table with N.O.R.E & EFN. You Gotta Relax!',
      },
      'im:price': {
        label: 'Get',
        attributes: {
          amount: '0',
          currency: 'USD',
        },
      },
      'im:contentType': {
        attributes: {
          term: 'Podcast',
          label: 'Podcast',
        },
      },
      rights: {
        label: '© 2023 Interval Presents',
      },
      title: {
        label: 'Drink Champs - Interval Presents',
      },
      link: {
        attributes: {
          rel: 'alternate',
          type: 'text/html',
          href: 'https://podcasts.apple.com/us/podcast/drink-champs/id1096830182?uo=2',
        },
      },
      id: {
        label:
          'https://podcasts.apple.com/us/podcast/drink-champs/id1096830182?uo=2',
        attributes: {
          'im:id': '1096830182',
        },
      },
      'im:artist': {
        label: 'Interval Presents',
        attributes: {
          href: 'https://podcasts.apple.com/us/artist/iheartradio/284341002?uo=2',
        },
      },
      category: {
        attributes: {
          'im:id': '1310',
          term: 'Music',
          scheme:
            'https://podcasts.apple.com/us/genre/podcasts-music/id1310?uo=2',
          label: 'Music',
        },
      },
      'im:releaseDate': {
        label: '2023-02-17T00:00:00-07:00',
        attributes: {
          label: 'February 17, 2023',
        },
      },
    },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PodcastListComponent],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        FormsModule,
        ComponentsModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(PodcastListComponent);
    component = fixture.componentInstance;

    component.filteredPodcasts = randomPodcasts;
    component.podcasts = randomPodcasts;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 4 podcasts', () => {
    const counter = fixture.debugElement.nativeElement.querySelector('.counter');
    expect(counter.textContent).toContain(randomPodcasts.length);
  });

  it('should filter and have 1 podcast', fakeAsync(() => {
    const counter = fixture.debugElement.nativeElement.querySelector('.counter');
    expect(counter.textContent).toContain(randomPodcasts.length);
    const input = fixture.debugElement.nativeElement.querySelector('input');
    input.value = "The Joe Budden"
    input.dispatchEvent(new Event('input'))
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(counter.textContent).toContain(1);
    })

  }));
});
