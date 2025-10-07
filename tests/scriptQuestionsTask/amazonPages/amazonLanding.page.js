export class AmazonLandingPage {
  /**
   * @param {import('playwright').Page} page
   */

  constructor(page) {
    this.page = page;
    this.flightBookLink = page.locator('//a[@aria-label="Flight Bookings"]');
  }
}
