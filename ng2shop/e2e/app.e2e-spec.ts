import { Ng2shopPage } from './app.po';

describe('ng2shop App', function() {
  let page: Ng2shopPage;

  beforeEach(() => {
    page = new Ng2shopPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
