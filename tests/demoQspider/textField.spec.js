import { test, expect } from "@playwright/test";

test("enter data into Text field", async ({ page }) => {
  await page.goto("https://demoapps.qspiders.com/ui/login?scenario=1");
  await page.getByLabel("Email Id").fill("girija123@gmail.com");
  await page.getByLabel("Password").fill("123456");
  await page.getByRole("button", { name: "Login" }).click();
  await page.waitForTimeout(2000);
});

test("validate placeholder is present in the text field", async ({ page }) => {
  await page.goto("https://demoapps.qspiders.com/ui/login?scenario=1");
  await expect(page.getByLabel("Email Id")).toHaveAttribute("placeholder");
  await expect(page.getByLabel("Password")).toHaveAttribute("placeholder");
  await page.waitForTimeout(2000);
});

test("capture data from the text field in the console that you have sent", async ({
  page,
}) => {
  await page.goto("https://demoapps.qspiders.com/ui/login?scenario=1");
  await page.getByLabel("Email Id").fill("girija123@gmail.com");
  let emailval = await page.getByLabel("Email Id").getAttribute("value");
  await page.getByLabel("Password").fill("123456");
  let passval = await page.getByLabel("Password").getAttribute("value");
  console.log(emailval);
  console.log(passval);

  await page.waitForTimeout(2000);
});

test("click on the hide password icon", async ({ page }) => {
  await page.goto("https://demoapps.qspiders.com/ui/login?scenario=1");
  await page.waitForTimeout(2000);
  await page.getByRole("img", { name: "Show Password" }).click();
  await expect
    .soft(page.getByRole("img", { name: "Hide Password" }))
    .toBeVisible();
  await page.waitForTimeout(2000);
});

test.only("click on the show password icon", async ({ page }) => {
  await page.goto("https://demoapps.qspiders.com/ui/login?scenario=1");
  await page.waitForTimeout(2000);
  await page.getByRole("img", { name: "Show Password" }).click();
  await page.getByRole("img", { name: "Hide Password" }).click();
  await expect
    .soft(page.getByRole("img", { name: "Show Password" }))
    .toBeVisible();
  await page.waitForTimeout(2000);
});
