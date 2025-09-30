import { test, expect } from "@playwright/test";

test("hover on button", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  await page.getByRole("button", { name: "Point Me" }).hover();

  let alllinks = await page
    .locator("//div[@class='dropdown-content']//a")
    .all();

  for (let item of alllinks) {
    console.log(await item.textContent());
    await expect(item).toHaveText(await item.textContent());
  }

  await page.waitForTimeout(3000);
});
