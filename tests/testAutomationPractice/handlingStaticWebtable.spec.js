import { test } from "@playwright/test";

test("static webtable", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  await page
    .getByRole("heading", { name: "Static Web Table" })
    .scrollIntoViewIfNeeded();

  let rowdata = await page.locator('//table[@name="BookTable"]//tr').count();

  for (let i = 1; i <= rowdata; i++) {
    let data = await page
      .locator(`xpath=//table[@name="BookTable"]//tr[${i}]/td`)
      .count();

    for (let j = 1; j <= data; j++) {
      let data2 = page.locator(
        `xpath=//table[@name="BookTable"]//tr[${i}]/td[${j}]`
      );
      console.log(await data2.textContent());
    }
    console.log("==================");
  }
});
