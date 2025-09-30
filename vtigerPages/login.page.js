export class LoginPage {
  /**
   * @param {import('playwright').Page} page
   */

  constructor(page) {
    this.page = page;
    this.userNameTxtField = page.locator("//input[@name='user_name']");
    this.passwordTxtField = page.locator("//input[@name='user_password']");
    this.submitBtn = page.locator("//input[@id='submitButton']");
  }
}
