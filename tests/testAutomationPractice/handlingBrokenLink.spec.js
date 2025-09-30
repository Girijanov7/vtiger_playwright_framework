import { test, expect } from "@playwright/test";

test.only("broken links", async ({ page, request }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  // let allLinks = await page.locator('//div[@id="broken-links"]//a').all();
  let allLinks = await page.locator("//a").all();
  // console.log(allLinks);
  for (let item of allLinks) {
    let href = await item.getAttribute("href");
    console.log(href);
  }

  for (let item of allLinks) {
    let href = await item.getAttribute("href");
    if (
      !href ||
      href.includes("youtube") ||
      href == "#" ||
      href.startsWith("javascript:")
    )
      continue;

    let response = await request.get(await item.getAttribute("href"));
    console.log(response.status());
    if (response.status() >= 400) {
      console.log(`${href} is broken link`);
    } else {
      console.log(`${href} is not a broken link`);
    }
  }
});

test("check for broken links", async ({ page, request }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  // Get all links on the page
  const links = await page.$$eval("a", (anchors) => anchors.map((a) => a.href));

  // console.log(`Found ${links.length} links.`);
  console.log(links);

  // for (const link of links) {
  //   if (!link || link.startsWith("javascript:")) continue; // skip empty or JS links

  //   const response = await request.get(link);
  //   const status = response.status();

  //   console.log(`🔗 Checking: ${link} → Status: ${status}`);

  //   // Assertion (if you want test to fail on broken links)
  //   expect(status, `Broken link found: ${link}`).toBeLessThan(400);
  // }
});

///////////////////////////////////////////////////////////////////////////////////

// test("check broken links using locator", async ({ page, request }) => {
//   await page.goto("https://testautomationpractice.blogspot.com/");

//   const links = page.locator("a");
//   const count = await links.count();

//   for (let i = 0; i < count; i++) {
//     const href = await links.nth(i).getAttribute("href");
//     if (!href || href.startsWith("javascript:")) continue;

//     const res = await request.get(href);
//     expect.soft(res.status(), `Broken link: ${href}`).toBeLessThan(400);
//   }

//   for (let i = 0; i < count; i++) {
//     let href = await links.nth(i).getAttribute("href");
//     if (!href || href.startsWith("javascript:") || href.startsWith("#"))
//       continue;

//     // Convert relative URL to absolute
//     href = new URL(href, page.url()).href;

//     const res = await request.get(href);
//     // expect.soft(res.status(), `Broken link: ${href}`).toBeGreaterThan(399);
//     console.log(res);
//   }
// });
