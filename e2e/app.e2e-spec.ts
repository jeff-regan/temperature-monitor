import { TemperatureMonitorPage } from './app.po';

describe('temperature-monitor App', () => {
  let page: TemperatureMonitorPage;

  beforeEach(() => {
    page = new TemperatureMonitorPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
