import { test } from "@playwright/test";

test("get by role", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  await page.getByRole("button", { name: "Point Me" }).hover();
  await page.waitForTimeout(3000);
});
