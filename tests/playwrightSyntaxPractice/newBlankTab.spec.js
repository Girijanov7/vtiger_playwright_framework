import { expect, test } from "@playwright/test";

test("blank tab", async ({ browser }) => {
  let context = await browser.newContext();
  let page = await context.newPage();
  //   await page.pause();
  await page.goto("https://www.flipkart.com/");
  console.log(await page.title());

  let page2 = await context.newPage();
  await page2.goto("https://www.amazon.com");
  console.log(await page2.title());

  //   browser.newContext();
  await page.waitForTimeout(5000);
});
