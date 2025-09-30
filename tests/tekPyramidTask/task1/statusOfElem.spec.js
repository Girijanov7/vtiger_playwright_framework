import { test, expect } from "@playwright/test";

test("verify status of the element", async ({ page }) => {
  await page.goto("https://demoapps.qspiders.com/ui/dropdown?sublist=0");
  await expect.soft(page.locator("#select5")).toBeEnabled();
  await expect.soft(page.locator("#select5")).toBeDisabled();
  await expect.soft(page.locator("#select5")).toBeHidden();
  await expect.soft(page.locator("#select5")).toBeVisible();
});

test("verify css value of the element", async ({ page }) => {
  await page.goto("https://demoapps.qspiders.com/ui/button?sublist=0");
  await expect(page.getByRole("button", { name: "Yes" })).toHaveCSS(
    "border-width",
    "1px"
  );
  await expect(page.getByRole("button", { name: "Yes" })).toHaveCSS(
    "background-color",
    "rgb(253, 186, 116)"
  );
});
