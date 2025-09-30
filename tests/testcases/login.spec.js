import { test, expect } from "@playwright/test";
import { HomePage } from "../../pages/home.page";
import { LoginPage } from "../../pages/login.page";

test("Login User with correct email and password", async ({ page }) => {
  await page.goto("https://automationexercise.com/");
  let hp = new HomePage(page);
  await expect(page).toHaveTitle("Automation Exercise");
  await hp.loginLink.click();

  let lp = new LoginPage(page);
  await expect(lp.loginFormTitle).toBeVisible();

  await lp.login();

  // await page.waitForTimeout(3000);
  await expect(hp.loggedUserLink).toContainText("Girija Nayak");

  await hp.logoutLink.click();

  await expect(hp.logoutLink).toBeHidden();

  // let msg = await hp.loggedUserLink.textContent();
  // console.log(msg);

  // await page.waitForTimeout(3000);
});
