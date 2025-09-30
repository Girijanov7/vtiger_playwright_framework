import { test } from "@playwright/test";
import { writeDataToExcel } from "../../utility/excelData";

test("write data to excel", async () => {
  await writeDataToExcel("Sheet2", 5, 3, "Hiii");
});
