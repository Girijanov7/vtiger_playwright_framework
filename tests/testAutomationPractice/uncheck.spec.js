import { test } from "@playwright/test";

test("uncheck method", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  await page.pause();

  await page.locator("#sunday").check(); //for radio btn and checkbox use check method.
  await page.locator("#monday").check(); //for radio btn and checkbox use check method.
  await page.waitForTimeout(3000);
  await page.locator("#monday").uncheck();
  await page.waitForTimeout(3000);
});
