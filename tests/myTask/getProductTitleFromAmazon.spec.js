import { test } from "@playwright/test";

test("get all product title from amazon", async ({ page }) => {
  await page.goto("https://www.amazon.in/");
  await page.getByPlaceholder("Search Amazon.in").fill("samsung tv");
  await page.keyboard.press("Enter");
  await page
    .locator(
      "//span[@data-component-type='s-search-results']//div[@class='sg-col-inner']//div[@data-cy='title-recipe']/a/h2/span"
    )
    .last()
    .waitFor({ state: "visible" });

  let alltitle = await page
    .locator(
      "//span[@data-component-type='s-search-results']//div[@class='sg-col-inner']//div[@data-cy='title-recipe']/a/h2/span"
    )
    .all();
  for (let item of alltitle) {
    console.log(await item.textContent());
  }
});
