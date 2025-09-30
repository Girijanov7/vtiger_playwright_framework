import { test, expect } from "@playwright/test";

test("double click", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  await page.waitForTimeout(3000);
  await page.getByText("Copy Text").dblclick();
  await page.waitForTimeout(3000);
});
