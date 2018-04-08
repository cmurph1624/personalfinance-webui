import { PersonalfinanceWebuiPage } from './app.po';

describe('personalfinance-webui App', () => {
  let page: PersonalfinanceWebuiPage;

  beforeEach(() => {
    page = new PersonalfinanceWebuiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
