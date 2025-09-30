import { test, expect } from "@playwright/test";

test("get input value", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  await page.getByPlaceholder("Enter EMail").fill("girija123@gmail.com");
  const value = await page.getByPlaceholder("Enter EMail").inputValue();
  console.log(value);

  await page.waitForTimeout(3000);
});
