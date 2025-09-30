import { test } from "@playwright/test";

test("right click", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  await page.waitForTimeout(2000);
  await page.getByPlaceholder("Enter Name").click({ button: "right" });
  await page.waitForTimeout(2000);
});
