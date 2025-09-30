import { test, expect } from "@playwright/test";
import path, { dirname } from "path";

test("single fileUpload popup", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  await page.locator("#singleFileInput").scrollIntoViewIfNeeded();
  //   await page
  //     .locator("#singleFileInput")
  //     .setInputFiles("C:/Users/Girija/Downloads/info.txt");  //direct file
  await page
    .locator("#singleFileInput")
    .setInputFiles(path.join(__dirname, "info.txt"));

  await page.getByRole("button", { name: "Upload Single File" }).click();
  await page.waitForTimeout(3000);
});

test("multiple fileUpload popup", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  await page.locator("#singleFileInput").scrollIntoViewIfNeeded();
  //   await page
  //     .locator("#singleFileInput")
  //     .setInputFiles("C:/Users/Girija/Downloads/info.txt");  //direct file
  await page
    .locator("#multipleFilesInput")
    .setInputFiles([
      path.join(__dirname, "info.txt"),
      path.join(__dirname, "Assignment.txt"),
    ]); //passing multiple file in an array

  await page.getByRole("button", { name: "Upload Multiple Files" }).click();

  let text = await page.locator("#multipleFilesStatus").textContent();
  console.log(text);

  await expect(page.locator("#multipleFilesStatus")).toContainText(
    "Assignment.txt",
    "info.txt"
  );

  await page.waitForTimeout(3000);
});
