export class HomePage {
  /**
   * @param {import('playwright').Page} page
   */

  constructor(page) {
    this.page = page;
    this.contactPageLink = page.locator("//a[text()='Contacts']");
    this.productPageLink = page.locator("//a[text()='Products']");
    this.orgPageLink = page.locator("//a[text()='Organizations']");
  }
}
