import { SmartwatchbuttonconfigurerPage } from './app.po';

describe('smartwatchbuttonconfigurer App', () => {
  let page: SmartwatchbuttonconfigurerPage;

  beforeEach(() => {
    page = new SmartwatchbuttonconfigurerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
