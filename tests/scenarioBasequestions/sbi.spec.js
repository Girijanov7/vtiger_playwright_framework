import { expect, test } from "@playwright/test";

test("sbi test", async ({ browser }) => {
  let context = await browser.newContext();
  let page = await context.newPage();
  await page.goto("https://onlinesbi.sbi.bank.in/");

  let promise2 = context.waitForEvent("page");
  await page
    .locator(
      "//div[@id='useful-links']/div[contains(@class,'lessGroup')]//a[text()='Banking Forms']"
    )
    .click();

  let page2 = await promise2;
  await page2.getByRole("link", { name: "click here" }).click();

  await expect(page.locator("//a[@id='logo']")).toBeVisible();
  //   <a href="https://bank.sbi/" title="Logo" id="logo" rel="external" aria-label="SBI Logo">&nbsp;</a>

  await page2.waitForTimeout(3000);
});
