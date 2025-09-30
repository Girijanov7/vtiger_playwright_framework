export class LoginPage {
  /**
   * @param {import('playwright').Page} page
   */

  constructor(page) {
    this.page = page;
    this.loginEmailTextField = page.locator('//input[@data-qa="login-email"]');
    this.loginPasswordTextField = page.locator(
      '//input[@data-qa="login-password"]'
    );
    this.loginBtn = page.getByRole("button", { name: "Login" });
    this.loginFormTitle = page.getByText("Login to your account");
  }

  async login() {
    await this.loginEmailTextField.fill("girija123@gmail.com");
    await this.loginPasswordTextField.fill("123456");
    await this.loginBtn.click();
  }
}
