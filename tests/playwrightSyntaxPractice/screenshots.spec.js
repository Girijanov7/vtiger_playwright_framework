import { test, expect } from "@playwright/test";
import { log } from "console";

test("screenshot test", async ({ page }) => {
  await page.goto("https://www.flipkart.com/");
  await page
    .getByRole("textbox", { name: "Search for Products, Brands" })
    .click();
  await page
    .getByRole("textbox", { name: "Search for Products, Brands" })
    .fill("tv");
  await page
    .getByRole("textbox", { name: "Search for Products, Brands" })
    .press("Enter");
  let time = new Date().getTime();
  let time1 = new Date().getDate();
  let time2 = new Date().getMinutes();
  let time3 = new Date()
    .toLocaleTimeString()
    .replace(" ", "")
    .replaceAll(":", ".");
  let time4 = new Date().toLocaleDateString().replaceAll("/", "-");
  let time5 = new Date().getSeconds();
  console.log(time);
  console.log(time1);
  console.log(time2);
  console.log(time3);
  console.log(time4);
  console.log(time5);
  console.log(typeof time3);

  await page.screenshot({ path: `screenshots/flipkart-${time3}.png` });
});
