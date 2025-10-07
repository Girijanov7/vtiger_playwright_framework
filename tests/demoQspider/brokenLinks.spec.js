import { test, expect } from "@playwright/test";

test("broken links in demo Qspider", async ({ page, request }) => {
  //   await page.pause();
  await page.goto("https://demoapps.qspiders.com/ui/link/brokenLink?sublist=2");

  // let allLinks = await page.locator('//div[@id="broken-links"]//a').all();
  await page.locator("//a").last().waitFor({ state: "visible" });
  let allLinks = await page.locator("//a").all();
  // console.log(allLinks);
  for (let item of allLinks) {
    let href = await item.getAttribute("href");
    let completeUrl = `https://demoapps.qspiders.com${href}`;
    console.log(completeUrl);
  }

  let brokenLink = 0;
  let notBrokLink = 0;
  for (let item of allLinks) {
    let href = await item.getAttribute("href");
    let completeUrl = `https://demoapps.qspiders.com${href}`;
    //   if (
    //     !href ||
    //     href.includes("youtube") ||
    //     href == "#" ||
    //     href.startsWith("javascript:")
    //   )
    //     continue;

    let response = await request.get(await completeUrl);
    console.log(response.status());

    if (response.status() >= 400) {
      console.log(`${href} is broken link`);
      brokenLink++;
    } else {
      console.log(`${href} is not a broken link`);
      notBrokLink++;
    }
  }

  console.log(
    `Total ${brokenLink} Broken Link and ${notBrokLink} Not Broken Link`
  );
});
