import { test, expect } from "@playwright/test";
import path from "path";
import fs from "fs";

test("file download", async ({ page }) => {
  let customFolder = "C:/Users/Girija/Desktop/customFolder";
  let customFile = "some.txt";

  let fullpath = path.join(customFolder, customFile);

  await page.goto(
    "https://testautomationpractice.blogspot.com/p/download-files_25.html"
  );
  await page.locator("//textarea[@id='inputText']").fill("some text here");
  await page.locator("#generateTxt").click();
  let [downloadFile] = await Promise.all([
    page.waitForEvent("download"),
    page.locator("#txtDownloadLink").click(),
  ]);

  await downloadFile.saveAs(fullpath);

  if (fs.existsSync(fullpath)) {
    console.log("file exist");
  } else {
    console.log("file not exist");
  }
});
