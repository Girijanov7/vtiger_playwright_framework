import { test, expect } from "@playwright/test";

test("handling popup window1", async ({ browser }) => {
  let context = await browser.newContext();
  let page = await context.newPage();
  await page.goto("https://testautomationpractice.blogspot.com/");

  let page2Promise = context.waitForEvent("page");
  await page.getByRole("button", { name: "Popup Windows" }).click();

  let page2 = await page2Promise;
  let heading = await page2
    .getByRole("heading", { name: "Selenium WebDriver" })
    .textContent();
  console.log(heading);

  await expect(
    page2.getByRole("heading", { name: "Selenium WebDriver" })
  ).toContainText("Selenium WebDriver");
});
