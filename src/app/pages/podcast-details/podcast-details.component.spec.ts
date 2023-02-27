import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { PodcastDetailsComponent } from './podcast-details.component';

describe('PodcastDetailsComponent', () => {
  let component: PodcastDetailsComponent;
  let fixture: ComponentFixture<PodcastDetailsComponent>;

  const podcastEpisodes = {
    resultCount: 7,
    results: [
      {
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
        releaseDate: '2023-02-22T12:18:00Z',
        collectionExplicitness: 'notExplicit',
        trackExplicitness: 'explicit',
        trackCount: 367,
        trackTimeMillis: 9490,
        country: 'USA',
        currency: 'USD',
        primaryGenreName: 'Music',
        contentAdvisoryRating: 'Explicit',
        artworkUrl600:
          'https://is2-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/600x600bb.jpg',
        genreIds: ['1310', '26'],
        genres: ['Music', 'Podcasts'],
      },
      {
        country: 'USA',
        genres: [
          {
            name: 'Music',
            id: '1310',
          },
        ],
        episodeGuid: '333e2c4d-bc72-4a6a-9b7e-e0bd859d08b5',
        description:
          'The gang talks about the upcoming Oscars as Rihanna is set to perform (20:20) while The Academy also prepares to get a crisis management team in place (22:30). A debate about white vs. black drug tv shows ensues as season 5 of Snowfall is underway (31:23), 6LACK has an album due in March (42:38), and Snoh Aalegra’s recent tweet brings a discussion about the challenges artists still face in music (51:12). Also, Saucy Santana has some comments about hookah (1:33:55), ADIDAS is reportedly re-approaching business with Kanye (1:55:15), Part of the Show (2:02:26), + MORE!\n Become a Patron of The Joe Budden Podcast for additional bonus episodes and visual content for all things JBP.: Tap in here www.patreon.com/JoeBudden\n  \n Sleeper Picks:\n  \n Joe | Jozzy - “Alone”\n  \n Ice | Payroll Giovani (feat. Jeezy) - “Ex Dealer Flow 2”\n  \n Parks | Times Change (feat. Mooch) - “Destined”\n  \n Ish | Kevin Ross - “Show & Prove”\n  \n Melyssa | Ukweli & Xenia Manasseh - “Waiting”\n  \n QueenzFlip | Lord Ju - “My Bop”',
        releaseDate: '2023-02-25T08:00:00Z',
        trackId: 1000601545042,
        trackName: 'Episode 605 | "3 Hookah Tips In His Mouth"',
        feedUrl: 'https://jbpod.libsyn.com/applepodcast',
        closedCaptioning: 'none',
        shortDescription:
          'The gang talks about the upcoming Oscars as Rihanna is set to perform (20:20) while The Academy also prepares to get a crisis management team in place (22:30). A debate about white vs. black drug tv shows ensues as season 5 of Snowfall is underway...',
        collectionId: 1535809341,
        collectionName: 'The Joe Budden Podcast',
        artistIds: [1535844019],
        previewUrl:
          'https://traffic.libsyn.com/secure/jbpod/Joe_Budden_Podcast_605_1.mp3?dest-id=2422538',
        collectionViewUrl:
          'https://itunes.apple.com/us/podcast/the-joe-budden-podcast/id1535809341?mt=2&uo=4',
        trackTimeMillis: 9380000,
        episodeFileExtension: 'mp3',
        episodeContentType: 'audio',
        trackViewUrl:
          'https://podcasts.apple.com/us/podcast/episode-605-3-hookah-tips-in-his-mouth/id1535809341?i=1000601545042&uo=4',
        contentAdvisoryRating: 'Explicit',
        episodeUrl:
          'https://traffic.libsyn.com/secure/jbpod/Joe_Budden_Podcast_605_1.mp3?dest-id=2422538',
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
      },
      {
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
      },
      {
        country: 'USA',
        genres: [
          {
            name: 'Music',
            id: '1310',
          },
        ],
        episodeGuid: '1e007c09-5094-4399-abb0-a43c926c0f0e',
        description:
          'The JBP starts this episode reading the list of reasons why women hate each other (12:04) before diving into a fashion convo as Pharrell becomes Louis Vuitton’s next men’s creative director (23:54). A$AP Rocky & Rihanna grace the cover of British Vogue (33:18) and Melyssa addresses Don Lemon’s recent comments about Nikki Haley being past her prime (51:46). *SPOILER ALERTS AHEAD* Ice gives his thoughts on Ant-Man (1:22:09) and the crew provides their opinions on the latest seasons of YOU (1:25:05) & All-American (1:30:04). Also, Ice shares his experience at a recent comedy show (1:49:15), Part of the Show returns (2:12:28), + MORE!\n Become a Patron of The Joe Budden Podcast for additional bonus episodes and visual content for all things JBP.: Tap in here www.patreon.com/JoeBudden\n  \n Sleeper Picks:\n Joe | Fridayy - “Know The Truth” \n Ice | Fetty Wap - “Tonight”\n Parks | Rasheed Chappelle, 38 Spesh, & Little Vic - “Courtside”\n Ish | Dana Vaughns - “Touch My Soul”\n QueenzFlip | JayO (feat. Cowwa Bang) - “Matter of Time”\n Melyssa | Terrace Martin (feat. Arin Ray & Elena Pinderhughes) - “Beige”',
        releaseDate: '2023-02-18T08:00:00Z',
        trackId: 1000600305730,
        trackName: 'Episode 603 | "God Dad Did"',
        feedUrl: 'https://jbpod.libsyn.com/applepodcast',
        closedCaptioning: 'none',
        shortDescription:
          'The JBP starts this episode reading the list of reasons why women hate each other (12:04) before diving into a fashion convo as Pharrell becomes Louis Vuitton’s next men’s creative director (23:54). A$AP Rocky & Rihanna grace the cover of...',
        collectionId: 1535809341,
        collectionName: 'The Joe Budden Podcast',
        artistIds: [1535844019],
        previewUrl:
          'https://traffic.libsyn.com/secure/jbpod/Joe_Budden_Podcast_603.mp3?dest-id=2422538',
        collectionViewUrl:
          'https://itunes.apple.com/us/podcast/the-joe-budden-podcast/id1535809341?mt=2&uo=4',
        trackTimeMillis: 10610000,
        episodeFileExtension: 'mp3',
        episodeContentType: 'audio',
        trackViewUrl:
          'https://podcasts.apple.com/us/podcast/episode-603-god-dad-did/id1535809341?i=1000600305730&uo=4',
        contentAdvisoryRating: 'Explicit',
        episodeUrl:
          'https://traffic.libsyn.com/secure/jbpod/Joe_Budden_Podcast_603.mp3?dest-id=2422538',
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
      },
      {
        country: 'USA',
        genres: [
          {
            name: 'Music',
            id: '1310',
          },
        ],
        episodeGuid: '8d4a62b2-ae92-4283-abc9-0cebef99e201',
        description:
          'Friend of the Show and Colts Linebacker Zaire Franklin returns to the JBP as the gang starts by recapping the Chiefs/Eagles Super Bowl (20:31) before turning their attention to Rihanna’s halftime performance (47:20). Floyd Mayweather Jr. has agreed to an exhibition boxing match (1:30:28), everyone shares their thoughts on the red boots (1:38:15), and have the aliens arrived on earth (1:44:00)? Also, a train derailment in Ohio has caused an environmental disaster (1:52:55), Rest in Peace to Dave Jolicoeur of De La Soul, aka Trugoy the Dove (2:16:15), and will Damar Hamlin play in the NFL ever again? (2:23:25) + MORE! \n  \n Become a Patron of The Joe Budden Podcast for additional bonus episodes and visual content for all things JBP.: Tap in here www.patreon.com/JoeBudden\n  \n Sleeper Picks:\n Joe | RINI (feat. Bibi Bourelly) - “My Luv”\n Ice | Shotgun Suge - “I Dont Party”\n Parks | De La Soul, Handsome Boy Modeling School, & Starchild Excalibur - “If It Wasn’t for You”\n Ish | Sabrina Claudio - “Nurture”\n Melyssa Ford | Adi Oasis - “Whisper My Name”\n Zaire | Babyface Ray - “Ashanti”',
        releaseDate: '2023-02-15T08:30:00Z',
        trackId: 1000599713875,
        trackName: 'Episode 602 | "The Honey Pack"',
        feedUrl: 'https://jbpod.libsyn.com/applepodcast',
        closedCaptioning: 'none',
        shortDescription:
          'Friend of the Show and Colts Linebacker Zaire Franklin returns to the JBP as the gang starts by recapping the Chiefs/Eagles Super Bowl (20:31) before turning their attention to Rihanna’s halftime performance (47:20). Floyd Mayweather Jr. has agreed...',
        collectionId: 1535809341,
        collectionName: 'The Joe Budden Podcast',
        artistIds: [1535844019],
        previewUrl:
          'https://traffic.libsyn.com/secure/jbpod/Joe_Budden_Podcast_602.mp3?dest-id=2422538',
        collectionViewUrl:
          'https://itunes.apple.com/us/podcast/the-joe-budden-podcast/id1535809341?mt=2&uo=4',
        trackTimeMillis: 11029000,
        episodeFileExtension: 'mp3',
        episodeContentType: 'audio',
        trackViewUrl:
          'https://podcasts.apple.com/us/podcast/episode-602-the-honey-pack/id1535809341?i=1000599713875&uo=4',
        contentAdvisoryRating: 'Explicit',
        episodeUrl:
          'https://traffic.libsyn.com/secure/jbpod/Joe_Budden_Podcast_602.mp3?dest-id=2422538',
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
      },
      {
        country: 'USA',
        genres: [
          {
            name: 'Music',
            id: '1310',
          },
        ],
        episodeGuid: '8a866f59-2eb6-405f-91f7-aab968e67873',
        description:
          'The Bionic Six is back. With the Super Bowl coming up this weekend, the gang opens up this episode with their predictions for the Eagles & Chiefs matchup as well as their reactions to Billboard’s Top-10 Halftime Performances (12:11). LeBron James passes Kareem Abdul-Jabbar on the NBA’s all-time scoring list (22:07), HYBE America acquires Quality Control Music for $300 million (43:55), and Billboard/Vibe also wrap up their Top-50 Rappers of All-Time list (52:48). The XXXTENTACION trial is underway and Drake is ordered to sit for deposition (1:01:30), why the Grammy’s missed on naming Beyoncé’s “Renaissance” as Album of the Year (1:14:20), GloRilla’s recent club appearance (1:28:33), Valentine’s Day plans (2:08:48), + MORE!\n Become a Patron of The Joe Budden Podcast for additional bonus episodes and visual content for all things JBP.: Tap in here www.patreon.com/JoeBudden\n Sleeper Picks:\n Joe |  Secily - “Gah Damn”\n Ice | Kash Doll & Payroll Giovanni - “LEGIT”\n Parks | Marlon Craft - “Human First”\n Ish | Libianca - “People”\n Melyssa Ford | Little Dragon - “Water”',
        releaseDate: '2023-02-11T08:00:00Z',
        trackId: 1000599125603,
        trackName: 'Episode 601 | "“Press Pay To Play”"',
        feedUrl: 'https://jbpod.libsyn.com/applepodcast',
        closedCaptioning: 'none',
        shortDescription:
          'The Bionic Six is back. With the Super Bowl coming up this weekend, the gang opens up this episode with their predictions for the Eagles & Chiefs matchup as well as their reactions to Billboard’s Top-10 Halftime Performances (12:11). LeBron...',
        collectionId: 1535809341,
        collectionName: 'The Joe Budden Podcast',
        artistIds: [1535844019],
        previewUrl:
          'https://traffic.libsyn.com/secure/jbpod/Joe_Budden_Podcast_601.mp3?dest-id=2422538',
        collectionViewUrl:
          'https://itunes.apple.com/us/podcast/the-joe-budden-podcast/id1535809341?mt=2&uo=4',
        trackTimeMillis: 9698000,
        episodeFileExtension: 'mp3',
        episodeContentType: 'audio',
        trackViewUrl:
          'https://podcasts.apple.com/us/podcast/episode-601-press-pay-to-play/id1535809341?i=1000599125603&uo=4',
        contentAdvisoryRating: 'Clean',
        episodeUrl:
          'https://traffic.libsyn.com/secure/jbpod/Joe_Budden_Podcast_601.mp3?dest-id=2422538',
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
      },
      {
        country: 'USA',
        genres: [
          {
            name: 'Music',
            id: '1310',
          },
        ],
        episodeGuid: '1b1307af-4c7e-44de-8974-848f0e7d9efe',
        description:
          ' A milestone episode for the JBP as the guys open up the podcast with a recap of the Grammy’s. Parks shares how his weekend went in LA (11:19), Stevie Wonder & Smokey Robinson perform (20:41), and Joe talks about the clear agenda for this year’s award show (32:46). Also, Dr. Dre earns the Dr. Dre Award (43:37), Viola Davis achieves EGOT (44:57), Harry Styles tops Beyoncé for Album of the Year (55:00), Quavo has a Takeoff Tribute (1:13:07), & Chris Brown has a meltdown following Robert Glasper’s win (1:17:05). Flip questions Joe about comments N.O.R.E. & him made about wanting people to fail (1:44:04), Offset responds to J. Prince’s latest interview (1:55:30), Ja Morant (2:33:50), + MORE! \n  \n Become a Patron of The Joe Budden Podcast for additional bonus episodes and visual content for all things JBP.: Tap in here www.patreon.com/JoeBudden\n Sleeper Picks:\n Joe |  Jon B, Gunna, Chloe Bailey, Chris Brown, SZA, & Aaliyah - “They Don’t Know (JAYBeatz Mashup)”\n Ice | Arsonal Da Rebel  - “Make You Feel” \n Parks | J Dilla (feat. Guilty Simpson & Madlib) - “Baby”\n Ish | Maina Doe, King Ivym & IJALE (feat. Valve Sounds) - “WYA”\n QueenzFlip | MASTERPIECE QUY - “Unlikely”',
        releaseDate: '2023-02-08T08:00:00Z',
        trackId: 1000598612965,
        trackName: 'Episode 600 | "The Pandy’s"',
        feedUrl: 'https://jbpod.libsyn.com/applepodcast',
        closedCaptioning: 'none',
        shortDescription:
          ' A milestone episode for the JBP as the guys open up the podcast with a recap of the Grammy’s. Parks shares how his weekend went in LA (11:19), Stevie Wonder & Smokey Robinson perform (20:41), and Joe talks about the clear agenda for this...',
        collectionId: 1535809341,
        collectionName: 'The Joe Budden Podcast',
        artistIds: [1535844019],
        previewUrl:
          'https://traffic.libsyn.com/secure/jbpod/Joe_Budden_Podcast_600.mp3?dest-id=2422538',
        collectionViewUrl:
          'https://itunes.apple.com/us/podcast/the-joe-budden-podcast/id1535809341?mt=2&uo=4',
        trackTimeMillis: 11553000,
        episodeFileExtension: 'mp3',
        episodeContentType: 'audio',
        trackViewUrl:
          'https://podcasts.apple.com/us/podcast/episode-600-the-pandys/id1535809341?i=1000598612965&uo=4',
        contentAdvisoryRating: 'Explicit',
        episodeUrl:
          'https://traffic.libsyn.com/secure/jbpod/Joe_Budden_Podcast_600.mp3?dest-id=2422538',
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
      },
    ],
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PodcastDetailsComponent],
      imports: [HttpClientTestingModule, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(PodcastDetailsComponent);
    component = fixture.componentInstance;
    component.podcastEpisodes = podcastEpisodes

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have title with correct number of episodes', () => {
    const title = fixture.debugElement.nativeElement.querySelector('.title');
    expect(title.textContent).toContain(`Episodes: ${podcastEpisodes.results.length}`);
  });

  it('should have table', () => {
    const table = fixture.debugElement.nativeElement.querySelector('.fl-table');
    expect(table).toBeTruthy();

    const tableBody = fixture.debugElement.nativeElement.querySelector('tbody');
    expect(tableBody).toBeTruthy();
  });

  it('should have info on table', () => {
    const tableRows = fixture.debugElement.nativeElement.querySelectorAll('tr');
    expect(tableRows.length).toBe(podcastEpisodes.results.length);
    expect(tableRows[0].children[0].textContent).toContain(podcastEpisodes.results[0].trackName);
    expect(tableRows[0].children[1].textContent).toContain('22/02/2023');
    expect(tableRows[0].children[2].textContent).toContain("00:00:09");
  });
});
