import { RecipeProjPage } from './app.po';

describe('recipe-proj App', () => {
  let page: RecipeProjPage;

  beforeEach(() => {
    page = new RecipeProjPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
