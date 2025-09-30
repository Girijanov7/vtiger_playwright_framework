export class ContactPage {
  /**
   * @param {import('playwright').Page} page
   */

  constructor(page) {
    this.page = page;
    this.createContactBtn = page.getByAltText("Create Contact...");
    this.lastNameTxtField = page.locator("//input[@name='lastname']");
    this.saveBtn = page.locator("(//input[@title='Save [Alt+S]'])[1]");
    this.contactInfoMsg = page.locator(".dvHeaderText");
  }
}
