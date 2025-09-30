export class OrganizationPage {
  /**
   * @param {import('playwright').Page} page
   */

  constructor(page) {
    this.page = page;
    this.createOrgBtn = page.getByAltText("Create Organization...");
    this.OrgnameTextField = page.locator("//input[@name='accountname']");
    this.saveBtn = page.locator("(//input[@title='Save [Alt+S]'])[1]");
    this.orgInfoMsg = page.locator(".dvHeaderText");
  }
}
