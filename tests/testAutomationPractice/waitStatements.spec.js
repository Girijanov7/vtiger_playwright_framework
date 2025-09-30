import { expect, test } from "@playwright/test";

test("waits statements", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/p/gui-elements-ajax-hidden.html");
  await page.getByRole("button", { name: "Load AJAX Content" }).click();
  await page.waitForSelector("//h2[text()='AJAX Content Loaded']")
  // await page.locator(page.getByText("AJAX Content Loaded")).waitFor()
//   await page.waitForTimeout(6000);
//   await expect(page.getByText("AJAX Content Loaded")).toBeVisible();
  await expect(page.locator("//h2[text()='AJAX Content Loaded']")).toBeVisible();
});
