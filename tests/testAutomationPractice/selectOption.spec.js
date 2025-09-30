import { test, expect } from "@playwright/test";

test("select option", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  await page.locator('[id="country"]').selectOption("Germany");
  await page.waitForTimeout(3000);
});
