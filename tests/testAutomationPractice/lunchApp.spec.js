import { test } from "@playwright/test";

test("Lunch Application", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
});
