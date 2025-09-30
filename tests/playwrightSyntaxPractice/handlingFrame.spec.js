import { test } from "@playwright/test";
import { url } from "inspector";

test("frame handling", async ({ page }) => {
  await page.goto("https://ui.vision/demo/webtest/frames/");

  //Entering data into frame1
  let frame1 = await page.frame({
    url: "https://ui.vision/demo/webtest/frames/frame_1.html",
  });
  await frame1
    .locator("//input[@name='mytext1']")
    .fill("data in frame1 input field");
  //   await page.waitForTimeout(3000);

  //Entering data into frame2 in different way
  await page
    .frameLocator("//frame[@src='frame_2.html']")
    .locator("//input[@name='mytext2']")
    .fill("data in frame2 input field");
  await page.waitForTimeout(2000);

  //Entering data into frame4 in different way
  let frame4 = await page
    .locator("//frame[@src='frame_4.html']")
    .contentFrame();
  await frame4.locator("//input[@name='mytext4']").fill("data in frame 4");
  await page.waitForTimeout(2000);

  //Entering data into nested frame3 in different way
  let frame3 = page.frameLocator("//frame[@src='frame_3.html']");
  frame3.locator("//input[@name='mytext3']").fill("data in frame3");
  await page.waitForTimeout(2000);

  //   let nested = await frame3.frame({
  //     url: "https://docs.google.com/forms/d/e/1FAIpQLScP-K8zi-9ar0MCq93D3VIFhegSNPveBfdLqiMfTYR9Q1iSKQ/viewform?embedded=true",
  //   });

  //Note : for nested frame we need to use framelocator() or contentFrame()
  let nested = frame3.frameLocator(
    '//iframe[@src="https://docs.google.com/forms/d/1yfUq-GO9BEssafd6TvHhf0D6QLDVG3q5InwNE2FFFFQ/viewform?embedded=true"]'
  );
  await nested
    .locator("//span[text()='Web Testing']/../../../div[@id='i21']")
    .check();
  await page.waitForTimeout(2000);
});

test("handleing frame in demoQspider site", async () => {});
