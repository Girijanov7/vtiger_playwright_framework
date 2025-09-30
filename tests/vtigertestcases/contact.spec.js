import { expect, test } from "@playwright/test";
import { HomePage } from "../../vtigerPages/home.page";
import { LoginPage } from "../../vtigerPages/login.page";
import { ContactPage } from "../../vtigerPages/contact.page";
import vtData from "../../testData/vtigerData.json";

test("create a new contact", async ({ page }) => {
  // let { url, uname, pass } = vtData;

  await page.goto(vtData.url);

  let lp = new LoginPage(page);
  await lp.userNameTxtField.fill(vtData.username);
  await lp.passwordTxtField.fill(vtData.password);
  await lp.submitBtn.click();

  let hp = new HomePage(page);
  await hp.contactPageLink.click();

  let contPage = new ContactPage(page);
  await contPage.createContactBtn.click();

  // console.log(randStr);
  let randStr = Math.floor(Math.random() * 100);
  await contPage.lastNameTxtField.fill(`nayak${randStr}`);
  await contPage.saveBtn.click();
  await expect(contPage.contactInfoMsg).toContainText(`nayak${randStr}`);
  // await page.waitForTimeout(2000);
});
