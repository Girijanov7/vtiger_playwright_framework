import { expect, test } from "@playwright/test";
import { HomePage } from "../../vtigerPages/home.page";
import { LoginPage } from "../../vtigerPages/login.page";
import vtData from "../../testData/vtigerData.json";
import { OrganizationPage } from "../../vtigerPages/organization.page";

test("create a new organization", async ({ page }) => {
  //   let { url, uname, pass } = vtData;

  await page.goto(vtData.url);

  let lp = new LoginPage(page);
  await lp.userNameTxtField.fill(vtData.username);
  await lp.passwordTxtField.fill(vtData.password);
  await lp.submitBtn.click();

  let hp = new HomePage(page);
  await hp.orgPageLink.click();

  let orgPage = new OrganizationPage(page);
  await orgPage.createOrgBtn.click();
  let randStr = Math.floor(Math.random() * 1000);
  await orgPage.OrgnameTextField.fill(`Mystore${randStr}`);
  await orgPage.saveBtn.click();
  await expect(orgPage.orgInfoMsg).toContainText(`Mystore${randStr}`);
  //   await page.waitForTimeout(2000);
});
