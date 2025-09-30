import { test } from "@playwright/test";

test("date picker1", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  await page.locator("#datepicker").scrollIntoViewIfNeeded();
  await page.locator("#datepicker").click();
  await page.waitForTimeout(2000);
  await page.locator('//a[@data-date="27"]').click();
  await page.waitForTimeout(3000);
});
