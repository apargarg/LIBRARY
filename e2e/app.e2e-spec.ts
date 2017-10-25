import { LIBRARYPage } from './app.po';

describe('library App', () => {
  let page: LIBRARYPage;

  beforeEach(() => {
    page = new LIBRARYPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
