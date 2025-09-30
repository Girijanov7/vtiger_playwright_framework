import { test } from "@playwright/test";

test("get by text", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  let text = await page.getByText("Alerts & Popups").textContent();
  console.log(text);
});
