import { test } from "@playwright/test";
import commData from "./testData/commonData.json";
import { LandingPage } from "./flipkartPages/landing.page";
import { FlightbookPage } from "./flipkartPages/flightBook.page";
import { writeDataToExcel } from "../../utility/excelData";
import excel from "exceljs";

test("search flight on flipkart", async ({ browser }) => {
  let context = await browser.newContext({
    permissions: [], //for notification permission not granted
  });
  let page = await context.newPage();

  await page.goto(commData.url);

  let landPage = new LandingPage(page);
  await landPage.flightBookLink.click();

  let fbookPage = new FlightbookPage(page);
  await fbookPage.fromPlace.click();
  await page.waitForTimeout(1000);
  await fbookPage.fromAirPort.click();
  await fbookPage.toPlace.click();
  await page.waitForTimeout(1000);
  await fbookPage.toAirPort.click();
  await fbookPage.onDate.click();
  await page.waitForTimeout(1000);
  await fbookPage.chooseDate.click();
  await fbookPage.searchBtn.click();

  await page
    .locator(
      '//div[@class="eivht0"]/div[@class="_16Yz0z"]//div[@class="jvoo4s"]/span[2]|//div[@class="eivht0"]/div[@class="_16Yz0z"]/div[@class="p23Ra6"]/div[@class="O+irE2"]'
    )
    .last()
    .waitFor({ state: "visible" });

  let allFlights = await page
    .locator(
      '//div[@class="eivht0"]/div[@class="_16Yz0z"]//div[@class="jvoo4s"]/span[2]'
    )
    .all();

  let flightPrice = await page
    .locator(
      '//div[@class="eivht0"]/div[@class="_16Yz0z"]/div[@class="p23Ra6"]/div[@class="O+irE2"]'
    )
    .all();

  let temp = 0;
  let workbook = new excel.Workbook();

  for (let flight of allFlights) {
    // console.log(await flight.textContent());
    let plane = await flight.textContent();
    let price = await flightPrice[temp].textContent();
    // writeDataToExcel("Sheet2", temp, 1, plane);
    // await workbook.xlsx.readFile("./testData/testData.xlsx");
    await workbook.xlsx.readFile(
      "./tests/scriptQuestionsTask/testData/flightResult.xlsx"
    );
    // let sheet = await workbook.addWorksheet(sheetName);
    let sheet = await workbook.getWorksheet("Sheet2");
    sheet.getRow(temp).getCell(1).value = plane;
    sheet.getRow(temp).getCell(2).value = price;
    await workbook.xlsx.writeFile(
      "./tests/scriptQuestionsTask/testData/flightResult.xlsx"
    );

    temp++;
  }

  await workbook.xlsx.writeFile(
    "./tests/scriptQuestionsTask/testData/flightResult.xlsx"
  );

  // writeDataToExcel()
  await page.waitForTimeout(3000);
});
