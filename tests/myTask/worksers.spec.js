import { test } from "@playwright/test";
// import test from 'node:test';

test("test1", async ({ page }) => {
  await page.goto("https://www.flipkar.com");
});

test("test2", async ({ page }) => {
  await page.goto("https://www.amazon.com");
});

test("test4", async ({ page }) => {
  await page.goto("https://www.google.com");
});
