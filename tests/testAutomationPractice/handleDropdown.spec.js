import { test } from "@playwright/test";

test("Handling dropdown with text", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  await page.locator("#country").scrollIntoViewIfNeeded();
  await page.waitForTimeout(3000);
  await page.locator("#country").selectOption("Japan");
  await page.waitForTimeout(3000);
});

test("Handling dropdown with index", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  await page.locator("#country").scrollIntoViewIfNeeded();
  await page.waitForTimeout(3000);
  await page.locator("#country").selectOption({ index: 3 });
  await page.waitForTimeout(3000);
});

test("Handling dropdown with value", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  await page.locator("#country").scrollIntoViewIfNeeded();
  await page.waitForTimeout(3000);
  await page.locator("#country").selectOption({ value: "china" });
  await page.waitForTimeout(3000);
});

test("Handling dropdown with multiple option", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  await page.locator("#colors").scrollIntoViewIfNeeded();
  await page.waitForTimeout(3000);
  await page.locator("#colors").selectOption([{ index: 1 }, { index: 2 }]);
  //or
  await page
    .locator("#colors")
    .selectOption([{ value: "red" }, { value: "green" }]);
  //or
  await page.locator("#colors").selectOption(["red", "green"]);

  await page.waitForTimeout(3000);
});
