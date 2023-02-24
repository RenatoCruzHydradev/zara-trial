describe('Test whole app', () => {
  before(() => {
    cy.intercept(
      {
        method: 'GET',
        url: '**/us/rss/toppodcasts/**',
      },
      { fixture: 'topPodcasts.json' }
    ).as('newTopPodcasts');

    cy.intercept(
      {
        method: 'GET',
        url: '**/lookup/json?id=1535809341&entity=podcast',
      },
      { fixture: 'onePodcast.json' }
    ).as('newPodcasts');

    cy.intercept(
      {
        method: 'GET',
        url: '**/lookup/json?id=1535809341&entity=podcastEpisode',
      },
      { fixture: 'onePodcastEpisodes.json' }
    ).as('newPodcastEpisodes');

    cy.intercept(
      {
        method: 'GET',
        url: '**/jbpod.libsyn.com/applepodcast',
      },
      { fixture: 'podcastInfo.xml' }
    ).as('newPodcastInfoXML');
  });
  it('Visits the initial project page', () => {
    cy.visit('/');
    cy.get('input').type('Joe');

    cy.get('.counter').should('contain.text', '1');

    cy.get('input').type('Joexxxxx');
    cy.get('.counter').should('contain.text', '0');

    cy.get('input').clear();
    cy.get('input').type('Joe');

    cy.get('.podcast-list').should('have.length', '1');
  });

  it('Visits the podcast project page', () => {
    cy.visit('/');
    cy.wait(500);

    cy.get('.podcast-list').get('.podcast').first().click();

    cy.wait(500);

    cy.get('.title').should('contain.text', 'Episodes');
    cy.get('.title').should('contain.text', '4');

    cy.get('tbody').children().should('have.length', 4);

    cy.get('img').should('exist');
    cy.get('.title.with-border').should(
      'contain.text',
      'The Joe Budden Podcast'
    );
    cy.get('.title.with-border').should(
      'contain.text',
      'The Joe Budden Network'
    );
    cy.get('.description-text').should(
      'contain.text',
      'Tune into Joe Budden and his friends. Follow'
    );
  });

  it.only('Visits the podcast epdisode page', () => {
    cy.visit('/');
    cy.wait(500);
    cy.get('.podcast-list').get('.podcast').first().click();
    cy.wait(500);
    cy.get('tbody > tr > td > a').first().click();
    cy.wait(500);

    cy.get('.main-container > .title').should(
      'contain.text',
      'The Joe Budden Podcast'
    );
    cy.get('.main-container > .description').should(
      'contain.text',
      'nions on NBA All-'
    );
    cy.get('.main-container > .track').should('exist');
  });
});
