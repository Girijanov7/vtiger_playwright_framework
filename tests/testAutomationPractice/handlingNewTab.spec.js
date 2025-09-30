import { test, expect } from "@playwright/test";

test("handling new tab", async ({ browser }) => {
  let context = await browser.newContext();
  let page = await context.newPage();
  await page.goto("https://testautomationpractice.blogspot.com/");

  let page2Promise = context.waitForEvent("page");
  await page.getByRole("button", { name: "New Tab" }).click();

  let page2 = await page2Promise;
  let heading = await page2.locator("//h1[@class='title']").textContent();
  console.log(heading);
  await expect(page2.locator("//h1[@class='title']")).toContainText(
    "SDET-QA Blog"
  );
});
