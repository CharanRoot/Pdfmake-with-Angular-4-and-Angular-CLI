import { MyNewappPage } from './app.po';

describe('my-newapp App', () => {
  let page: MyNewappPage;

  beforeEach(() => {
    page = new MyNewappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
