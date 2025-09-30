import { test } from "@playwright/test";

test.beforeAll("Before all test", async () => {
  console.log("================Before all executing=================");
});

test.afterAll("After all test", async () => {
  console.log("================After all executing=================");
});

test.beforeEach("Before each test", async () => {
  console.log("================Before each test executing=================");
});

test.afterEach("After each test", async () => {
  console.log("================After each test executing=================");
});

test("test 1", async () => {
  console.log("================test 1 is executing=================");
});

test("test 2", async () => {
  console.log("================test 2 is executing=================");
});
