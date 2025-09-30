import { test } from "@playwright/test";

test("Lunch Application", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  //getting the initial page screen size
  let screenSize = page.viewportSize();
  console.log(
    `current screen size is => ${screenSize.width} : ${screenSize.height}`
  );

  //setting the page size to fullscreen
  await page.setViewportSize({
    width: 1980,
    height: 1080,
  });

  //getting the screen size after fullscreen
  let screenSize2 = page.viewportSize();
  console.log(
    `After increasing screen size is => ${screenSize2.width} : ${screenSize2.height}`
  );
});
