export class ProductPage {
  /**
   * @param {import('playwright').Page} page
   */

  constructor(page) {
    this.page = page;
    this.createProdBtn = page.getByAltText("Create Product...");
    this.prodNameTextField = page.locator("//input[@name='productname']");
    this.saveBtn = page.locator("(//input[@title='Save [Alt+S]'])[1]");
    this.prodInfoMsg = page.locator(".lvtHeaderText");
  }
}
