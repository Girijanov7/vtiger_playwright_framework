import { test } from "@playwright/test";

test("get by level", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  await page.getByLabel("Name:").fill("Girija");
  await page.waitForTimeout(3000);
});
