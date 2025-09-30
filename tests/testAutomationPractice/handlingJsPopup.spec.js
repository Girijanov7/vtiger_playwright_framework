import { test, expect } from "@playwright/test";

test("simple alert", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  await page
    .getByRole("heading", { name: "Alerts & Popups" })
    .scrollIntoViewIfNeeded();

  page.on("dialog", async (dialog) => {
    console.log(dialog.message());
    console.log(dialog.type());
    await page.waitForTimeout(2000);
    await dialog.accept();
  });

  await page.getByRole("button", { name: "Simple Alert" }).click();
  await page.waitForTimeout(3000);
});

test("confirmation alert", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  await page
    .getByRole("heading", { name: "Alerts & Popups" })
    .scrollIntoViewIfNeeded();

  page.on("dialog", async (dialog) => {
    console.log(dialog.message());
    console.log(dialog.type());
    await page.waitForTimeout(2000);
    await dialog.dismiss();
  });

  await page.getByRole("button", { name: "Confirmation Alert" }).click();
  await page.waitForTimeout(3000);
});

test("prompt alert", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  page.on("dialog", async (dialog) => {
    console.log(dialog.message());
    console.log(dialog.type());
    await page.waitForTimeout(2000);
    await dialog.accept("Girija Nayak");
  });

  await page
    .getByRole("heading", { name: "Alerts & Popups" })
    .scrollIntoViewIfNeeded();

  await page.getByRole("button", { name: "Prompt Alert" }).click();
  await page.waitForTimeout(3000);

  await expect(page.locator("//p[@id='demo']")).toContainText("Girija Nayak");
});
