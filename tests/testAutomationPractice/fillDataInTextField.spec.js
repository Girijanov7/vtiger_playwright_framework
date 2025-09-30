import { test } from "@playwright/test";

test("fill data in textfield", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  await page.getByPlaceholder("Enter Name").fill("Girija Nayak");
  await page.getByPlaceholder("Enter EMail").fill("girija123@gmail.com");
  await page.getByPlaceholder("Enter Phone").fill("1234567890");
  await page.getByPlaceholder("Enter Name").fill("Girija Nayak");
  await page.locator('[id="textarea"]').fill("Hi Good Moring");
});
