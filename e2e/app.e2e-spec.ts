import { SampleAgs2Page } from './app.po';

describe('sample-ags2 App', () => {
  let page: SampleAgs2Page;

  beforeEach(() => {
    page = new SampleAgs2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
