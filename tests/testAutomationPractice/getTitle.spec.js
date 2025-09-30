import { test } from "@playwright/test";

test("Lunch Application", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  let title = await page.title();
  console.log(`Page title is : ${title}`);
});
