import { test } from "@playwright/test";

test("get by placeholder", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  await page.getByPlaceholder("Enter Name").fill("Girija");
  await page.waitForTimeout(3000);
});
