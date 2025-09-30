import { test } from "@playwright/test";
// test("handling autosuggest options", async ({ page }) => {
//   await page.goto("https://amazon.com");

//   await page.getByRole("searchbox", { name: "Search Amazon" }).fill("shoes");
//   await page.locator('//div[@role="row"]').first().waitFor();

//   let elements = await page.locator('//div[@role="row"]').all();

//   for (let item of elements) {
//     let text = await item.textContent();
//     console.log(text);

//     if (text == "shoes for women") {
//       await item.click();
//       break;
//     }
//   }

//   //   await page.waitForTimeout(3000);

//   //   console.log(elements);
// });

test("handling autosuggest options", async ({ page }) => {
  await page.goto("https://flipkart.com");

  await page
    .getByPlaceholder("Search for Products, Brands and More")
    .fill("shoes for women");

  await page.locator('//li[@class="_3D0G9a"]').last().waitFor();

  let elements = await page.locator('//li[@class="_3D0G9a"]').all();

  for (let item of elements) {
    let text = await item.textContent();
    console.log(text);

    if (text.includes("shoes for women")) {
      await item.click();
      break;
    } else {
      console.log("search option not found");
    }
  }

  await page.waitForTimeout(3000);
});
