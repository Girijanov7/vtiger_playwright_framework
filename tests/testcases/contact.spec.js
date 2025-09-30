import { test, expect } from "@playwright/test";
import { HomePage } from "../../pages/home.page";
import { LoginPage } from "../../pages/login.page";
import { ContactPage } from "../../pages/contact.page";

test("Contact Us Form", async ({ page }) => {
  await page.goto("https://automationexercise.com/");

  page.on("dialog", async (dialog) => {
    console.log(await dialog.message());

    // await page.waitForTimeout(2000);
    await dialog.accept();
  });

  let hp = new HomePage(page);
  await expect(page).toHaveTitle("Automation Exercise");
  await hp.contactUsLink.click();

  let cp = new ContactPage(page);
  // await page.waitForTimeout(1000);
  await cp.getInTouchHeading.waitFor({ state: "visible" });
  await expect(cp.getInTouchHeading).toBeVisible();

  // await cp.contactNametxtField.waitFor({ state: "visible" });
  // await page.pause();
  await cp.contactNametxtField.fill("Girija Nayak");
  await cp.contactEmailtxtField.fill("girija123@gmail.com");
  await cp.contactSubjecttxtField.fill("Hello");
  await cp.contactMsgtxtField.fill("Hi hello");
  await cp.contactSubmitBtn.waitFor({ state: "visible" });

  await cp.contactSubmitBtn.click();

  // await page.waitForTimeout(2000);
  let text = await cp.contactSuccessMsg.textContent();
  console.log(text);

  // await expect(cp.contactSuccessMsg).toBeVisible();
  await cp.contactHomeBtn.click();
  await expect(page).toHaveTitle("Automation Exercise");
});
