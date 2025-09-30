import { test } from "@playwright/test";
import { readDataFromExcel } from "../../utility/excelData";

test("read data from excel", async () => {
  let data1 = await readDataFromExcel("Sheet1", 1, 1);
  let data2 = await readDataFromExcel("Sheet1", 2, 1);
  let data3 = await readDataFromExcel("Sheet1", 3, 1);

  console.log(data1, data2, data3);
});
