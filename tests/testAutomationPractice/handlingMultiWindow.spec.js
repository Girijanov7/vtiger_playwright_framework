import { test, expect } from "@playwright/test";

test("multi window", async ({ browser }) => {
  let context = await browser.newContext();
  let page = await context.newPage();

  await page.goto("https://testautomationpractice.blogspot.com/");
  await page.locator("#Wikipedia1_wikipedia-search-input").fill("nayak");
  await page.keyboard.press("Enter");

  let page2Promise = context.waitForEvent("page");
  await page.getByText("Nayak").first().click();

  let page2 = await page2Promise;
  console.log(await page2.title());
  //   console.log(await page.title());
  //   await page.waitForTimeout(3000);

  await page.waitForTimeout(2000);
  let page3Promise = context.waitForEvent("page");
  await page.getByText("Nayak: The Real Hero").click();

  let page3 = await page3Promise;
  console.log(await page3.title());

  //   await page.waitForTimeout(2000);
  //   await page.close();
  await page.waitForTimeout(2000);
  await page2.close();
  await page.waitForTimeout(2000);
  await page3.close();

  await page.waitForTimeout(2000);
});
