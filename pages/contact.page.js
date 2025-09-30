export class ContactPage {
  /**
   * @param {import('playwright').Page} page
   */

  constructor(page) {
    this.page = page;
    this.getInTouchHeading = page.getByText("Get In Touch");
    this.contactNametxtField = page.getByPlaceholder("Name");
    this.contactEmailtxtField = page.locator("//input[@data-qa='email']");
    this.contactSubjecttxtField = page.getByPlaceholder("Subject");
    this.contactMsgtxtField = page.getByPlaceholder("Your Message Here");
    this.contactUploadFileBtn = page.locator('//input[@name="upload_file"]');
    this.contactSubmitBtn = page.locator('//input[@data-qa="submit-button"]');
    this.contactSuccessMsg = page.locator(
      "//div[@class='status alert alert-success']"
    );
    this.contactHomeBtn = page.locator('//a[@class="btn btn-success"]');
  }
}
