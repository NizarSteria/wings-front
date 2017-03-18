import { WingsFrontPage } from './app.po';

describe('wings-front App', () => {
  let page: WingsFrontPage;

  beforeEach(() => {
    page = new WingsFrontPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
