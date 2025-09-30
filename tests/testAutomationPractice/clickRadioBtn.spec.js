import { test } from "@playwright/test";

test("fill data in textfield", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  await page.pause();
  //   await page.getByRole("radio", { name: "male" }).check();

  await page.locator("#male").check(); //for radio btn and checkbox use check method.
});
