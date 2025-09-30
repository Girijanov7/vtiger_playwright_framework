import { test, expect } from "@playwright/test";

test("inner HTML", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  await page.getByPlaceholder("Enter EMail").fill("girija123@gmail.com");
  const value1 = await page.getByText("Mouse Hover").textContent();
  const value2 = await page.getByText("Mouse Hover").innerHTML();
  const value3 = await page.getByText("Mouse Hover").innerText();
  console.log(value1);
  console.log(value2);
  console.log(value3);

  // await page.waitForTimeout(2000);
});
