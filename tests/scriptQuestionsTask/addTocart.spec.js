import { expect, test } from "@playwright/test";

test("add to cart product", async ({ browser }) => {
  let context = await browser.newContext();
  let page = await context.newPage();

  await page.goto("https://www.amazon.in/");
  await page.getByPlaceholder("Search Amazon.in").fill("samsung tv");

  await page.keyboard.press("Enter");
  console.log(await page.title());

  await page.waitForSelector(
    '(//span[@data-component-type="s-search-results"]//div[@class="sg-col-inner"]//button[@name="submit.addToCart"])[1]'
  );

  await page
    .locator(
      '(//span[@data-component-type="s-search-results"]//div[@class="sg-col-inner"]//button[@name="submit.addToCart"])[1]'
    )
    .click();

  await page.waitForTimeout(3000);
  await page.locator('//a[@href="/gp/cart/view.html?ref_=nav_cart"]').click();

  let prodTitle = await page
    .locator('//span[@class="a-truncate-cut"]')
    .textContent();

  await expect(prodTitle).toContain("Samsung");

  //   await page.pause();
  //   let page2Promise = context.waitForEvent("page");
  //   await page
  //     .locator(
  //       "(//span[@data-component-type='s-search-results']//div[@class='sg-col-inner']//div[@data-cy='title-recipe']/a/h2/span)[3]"
  //     )
  //     .click();

  //   await page.waitForTimeout(3000);
  //   let page2 = await page2Promise;
  //   await page2
  //     .locator("//div[@id='desktop_qualifiedBuyBox']//span[text()='Add to Cart']")
  //     .click();
  //   console.log(await page2.title());
  //   await page2.title()
  //   (//span[text()='Add to Cart'])[2]
  await page.waitForTimeout(3000);
});
