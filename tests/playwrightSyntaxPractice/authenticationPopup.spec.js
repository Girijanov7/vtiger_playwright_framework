import { test, expect } from "@playwright/test";

test("authentication popup", async ({ browser }) => {
  let context = await browser.newContext({
    httpCredentials: {
      username: "admin",
      password: "admin",
    },
  });
  let page = await context.newPage();
  await page.waitForTimeout(3000);
  await page.goto(
    "https://basic-auth-git-main-shashis-projects-4fa03ca5.vercel.app/"
  );
  await page.waitForTimeout(3000);
});

test("authentication popup on heroku", async ({ browser }) => {
  let context = await browser.newContext({
    httpCredentials: {
      username: "admin",
      password: "admin",
    },
  });
  let page = await context.newPage();
  await page.waitForTimeout(3000);
  await page.goto("https://the-internet.herokuapp.com/basic_auth");
  await page.waitForTimeout(3000);
});

test("authentication in url itself", async ({ page }) => {
  await page.waitForTimeout(1000);
  await page.goto("https://admin:admin@the-internet.herokuapp.com/basic_auth");
  await page.waitForTimeout(3000);
});
