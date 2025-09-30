import { test, expect } from "@playwright/test";

test("fixture practie", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto("https://flipkart.com");

  let title = await page.title();
  console.log(title);

  expect(await page.title()).toContain(title);
  //   await expect(page).toHaveTitle(
  //     "Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!"
  //   );
});
