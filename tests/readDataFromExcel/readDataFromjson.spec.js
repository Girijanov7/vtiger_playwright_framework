import { test } from "@playwright/test";
import jsondata from "../../testData/testDataJson.json";

test("Read data from JSON file", async () => {
  jsondata;
  //   console.log(jsondata);
  for (let item of jsondata) {
    let { name, age, role } = item;

    console.log(name, age, role);
    console.log("------------------------------");
  }
});
