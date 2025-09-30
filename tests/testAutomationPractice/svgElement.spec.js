//*[name()='svg']//*[name()='circle']
import { expect, test } from "@playwright/test";

test("svg element", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  let color = await page
    .locator("//*[name()='svg']//*[name()='circle']")
    .getAttribute("fill");

  //   console.log(color);
  expect(
    await page
      .locator("//*[name()='svg']//*[name()='circle']")
      .getAttribute("fill")
  ).toBe("red");

  expect(
    await page
      .locator("//*[name()='svg']//*[name()='rect']")
      .getAttribute("fill")
  ).toBe("green");

  expect(
    await page
      .locator("//*[name()='svg']//*[name()='polygon']")
      .getAttribute("fill")
  ).toBe("blue");
});
