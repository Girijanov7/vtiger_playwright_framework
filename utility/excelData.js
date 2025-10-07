import excel from "exceljs";

export async function readDataFromExcel(sheetName, rowNum, cellNum) {
  let workbook = new excel.Workbook();
  await workbook.xlsx.readFile("./testData/testData.xlsx");
  let sheet = await workbook.getWorksheet(sheetName);
  let data = await sheet.getRow(rowNum).getCell(cellNum).value;
  return data;
}

export async function writeDataToExcel(sheetName, rowNum, cellNum, value) {
  let workbook = new excel.Workbook();
  // await workbook.xlsx.readFile("./testData/testData.xlsx");
  await workbook.xlsx.readFile(
    "./tests/scriptQuestionsTask/testData/flightResult.xlsx"
  );
  // let sheet = await workbook.addWorksheet(sheetName);
  let sheet = await workbook.getWorksheet(sheetName);
  sheet.getRow(rowNum).getCell(cellNum).value = value;
  await workbook.xlsx.writeFile(
    "./tests/scriptQuestionsTask/testData/flightResult.xlsx"
  );
}

export async function readAllDataFromExcel() {
  let workbook = new excel.Workbook();
  // await workbook.xlsx.readFile("./testData/testData.xlsx");
  await workbook.xlsx.readFile(
    "./tests/scriptQuestionsTask/testData/flightResult.xlsx"
  );
  let sheet = await workbook.getWorksheet("Sheet1");

  let rownum = await sheet.rowCount;
  let data = [];
  for (let i = 1; i <= rownum; i++) {
    let rowData = [];
    let colNum = await sheet.columnCount;

    for (let j = 1; j <= colNum; j++) {
      let data1 = await sheet.getRow(i).getCell(j).value;
      if (!data1) continue;
      rowData.push(data1);
    }
    data.push(rowData);
  }

  return data;
}
