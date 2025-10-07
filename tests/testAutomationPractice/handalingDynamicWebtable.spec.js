import { test } from "@playwright/test";

test("dynamic web table", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  await page
    .getByRole("heading", { name: "Pagination Web Table" })
    .scrollIntoViewIfNeeded();

  let row = await page
    .locator("//table[@id='productTable']//tbody//tr")
    .count();

  //   let count = 0;
  let allpage = await page.locator("//ul[@id='pagination']/li/a").count();
  for (let j = 0; j < allpage; j++) {
    await page.waitForTimeout(1000);
    await page.locator("//ul[@id='pagination']/li/a").nth(j).click();

    for (let i = 0; i < row; i++) {
      let row = page.locator("//table[@id='productTable']//tbody//tr").nth(i);
      let text = await row.textContent();
      //   console.log(text);
      // await page.pause();
      if (text.includes("Router")) {
        console.log(text);
        break;
        //   console.log("false");
      }
    }

    //   await page.waitForTimeout(2000);
  }
});
