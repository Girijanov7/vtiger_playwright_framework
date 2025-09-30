import { test, expect } from "@playwright/test";

test("test 1", async ({ page }) => {
  await page.goto("https://flipkart.com");
  const title = await page.title();
  console.log(`title is : ${title}`);
});

test.skip("test 2", async ({ page }) => {
  await page.goto("https://amazon.com");
  const title = await page.title();
  console.log(`title is : ${title}`);
});

test.fixme("test 3", async ({ page }) => {
  await page.goto("https://www.myntra.com/");
  const title = await page.title();
  console.log(`title is : ${title}`);
});

test.fail("test 4", async ({ page }) => {
  await page.goto("https://www.facebook.com/");
  const title = await page.title();
  console.log(`title is : ${title}`);
});

test("faild testcases", async ({ page }) => {
  await page.goto("https://flipkart.com");

  let title = "Hello Flipkart";
  expect(await page.title()).toContain(title);
});
