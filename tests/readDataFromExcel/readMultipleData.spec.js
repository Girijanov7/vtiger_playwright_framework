import { test } from "@playwright/test";
import { readAllDataFromExcel } from "../../utility/excelData";

test("read all data", async () => {
  //   await writeDataToExcel("Sheet2", 5, 3, "Hiii");
  let data = await readAllDataFromExcel();
  console.log(data);
});
