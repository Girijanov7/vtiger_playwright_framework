import { test } from "@playwright/test";

test.describe.configure({ mode: "serial" });
test("test1 ", async () => {
  console.log("test 1 is executing");
});

test("test2 ", async () => {
  console.log("test 2 is executing");
});

test("test3 ", async () => {
  console.log("test 3 is executing");
});
