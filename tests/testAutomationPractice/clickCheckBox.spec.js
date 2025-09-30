import { test } from "@playwright/test";

test("fill data in textfield", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  await page.pause();

  await page.locator("#sunday").check(); //for radio btn and checkbox use check method.
  await page.locator("#monday").check(); //for radio btn and checkbox use check method.
});
