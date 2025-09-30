import { test } from "@playwright/test";

test("scroll with mouse", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  //   await page.locator("#draggable").scrollIntoViewIfNeeded();
  await page.waitForTimeout(2000);
  await page.mouse.wheel(0, 1000);
  await page.waitForTimeout(2000);
});
