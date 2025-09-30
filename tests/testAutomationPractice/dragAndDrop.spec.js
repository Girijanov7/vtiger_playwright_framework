import { test } from "@playwright/test";

test("drag and drop", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  await page.locator("#draggable").scrollIntoViewIfNeeded();
  await page.waitForTimeout(2000);
  await page.locator("#draggable").dragTo(page.locator("#droppable"));
  await page.waitForTimeout(2000);
});

test("drag and drop manually", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  await page.locator("#draggable").scrollIntoViewIfNeeded();
  await page.waitForTimeout(1000);
  await page.locator("#draggable").hover();
  await page.waitForTimeout(1000);
  await page.mouse.down();
  await page.waitForTimeout(1000);
  page.locator("#droppable").hover();
  await page.waitForTimeout(1000);
  await page.mouse.up();
  await page.waitForTimeout(2000);
});

test("drag and drop with move method", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  await page.locator("#draggable").scrollIntoViewIfNeeded();
  await page.waitForTimeout(1000);
  await page.locator("#draggable").hover();
  await page.waitForTimeout(1000);
  await page.mouse.down();
  await page.waitForTimeout(1000);
  let position = await page.locator("#droppable").boundingBox();
  console.log(position.x + 50, position.y + 50);

  await page.mouse.move(position.x + 75, position.y + 75);
  await page.waitForTimeout(1000);
  await page.mouse.up();
  await page.waitForTimeout(2000);
});
