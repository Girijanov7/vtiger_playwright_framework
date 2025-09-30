import { test } from "@playwright/test";
import tdata from "../../testData/testDataJson.json";

tdata.forEach(({ pname }, i) => {
  test(`search product in flipkart ${i + 1}`, async ({ page }) => {
    await page.goto("https://www.flipkart.com/");
    // await page.pause();
    const pagetitle = await page.title();
    console.log(`The title is : ${pagetitle}`);

    await page
      .getByPlaceholder("Search for Products, Brands and More")
      .fill(pname);
    await page.keyboard.press("Enter");
    await page.waitForTimeout(2000);
  });
});
