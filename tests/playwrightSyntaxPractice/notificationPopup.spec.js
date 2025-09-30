import { test, expect } from "@playwright/test";

test("notification popup", async ({ browser }) => {
  //Note : to check notification popup always run script in headed mode, else it will show denied always
  let context = await browser.newContext({
    permissions: ["notifications"], //for notification permission granted
  });

  //   let context = await browser.newContext({
  //     permissions: [],  //for notification permission not granted
  //   });

  let page = await context.newPage();
  await page.goto("https://demoapps.qspiders.com/ui/browserNot?sublist=0");
  await page.locator("#browNotButton").click();

  let res = await page.evaluate(() => {
    return Notification.permission;
  });
  console.log(res);
});
