import { expect, test } from "@playwright/test";

test("keyboard actions", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  await page.getByPlaceholder("Enter Name").focus();
  await page.keyboard.type("Hello");

  await page.waitForTimeout(1000);
  await page.getByPlaceholder("Enter Name").clear();

  await page.waitForTimeout(1000);
  await page.keyboard.insertText("hello again");

  await page.waitForTimeout(1000);
  await page.getByPlaceholder("Enter Name").clear();

  await page.getByPlaceholder("Enter Name").focus();
  await page.keyboard.type("Girija");
  await page.waitForTimeout(1000);
  await page.keyboard.press("Control+a");
  await page.keyboard.press("Control+c");
  await page.getByPlaceholder("Enter EMail").focus();
  await page.keyboard.press("Control+v");
  await page.waitForTimeout(1000);
});
