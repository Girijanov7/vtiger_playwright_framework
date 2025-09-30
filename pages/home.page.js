export class HomePage {
  /**
   * @param {import('playwright').Page} page
   */

  constructor(page) {
    this.page = page;
    this.loginLink = page.locator('//a[@href="/login"]');
    this.loggedUserLink = page.locator('//i[@class="fa fa-user"]/../b');
    this.logoutLink = page.getByText(" Logout");
    this.contactUsLink = page.getByText(" Contact us");
  }
}
