import { expect, test } from "@playwright/test";
import { HomePage } from "../../vtigerPages/home.page";
import { LoginPage } from "../../vtigerPages/login.page";
import vtData from "../../testData/vtigerData.json";
import { ProductPage } from "../../vtigerPages/product.page";

test("create a new product", async ({ page }) => {
  //   let { url, uname, pass } = vtData;

  await page.goto(vtData.url);

  let lp = new LoginPage(page);
  await lp.userNameTxtField.fill(vtData.username);
  await lp.passwordTxtField.fill(vtData.password);
  await lp.submitBtn.click();
  await expect(page).toHaveTitle(
    " Administrator - Home - vtiger CRM 5 - Commercial Open Source CRM"
  );

  let hp = new HomePage(page);
  await hp.productPageLink.click();

  let prodPage = new ProductPage(page);
  await prodPage.createProdBtn.click();

  let randStr = Math.floor(Math.random() * 100);
  await prodPage.prodNameTextField.fill(`samsung${randStr}`);
  await prodPage.saveBtn.click();
  await expect(prodPage.prodInfoMsg).toContainText(`samsung${randStr}`);

  //   await page.waitForTimeout(2000);
});
