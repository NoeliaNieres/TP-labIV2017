import { TpLab4Page } from './app.po';

describe('tp-lab4 App', () => {
  let page: TpLab4Page;

  beforeEach(() => {
    page = new TpLab4Page();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
