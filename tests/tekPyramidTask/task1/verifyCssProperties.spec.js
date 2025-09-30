import { test, expect } from "@playwright/test";

test("verify css value of the elements", async ({ page }) => {
  await page.setViewportSize({
    width: 1920,
    height: 1080,
  });

  await page.goto("https://demoapps.qspiders.com/ui/button?sublist=0");
  await expect(page.getByRole("button", { name: "Yes" })).toHaveCSS(
    "border-width",
    "0.8px"
  );
  await expect(page.getByRole("button", { name: "Yes" })).toHaveCSS(
    "background-color",
    "rgb(253, 186, 116)"
  );

  await expect(page.getByRole("button", { name: "Yes" })).toHaveCSS(
    "border-radius",
    "6px"
  );
  await expect(page.getByRole("button", { name: "Yes" })).toHaveCSS(
    "font-weight",
    "700"
  );
  await expect(page.getByRole("button", { name: "Yes" })).toHaveCSS(
    "border-width",
    "0.8px"
  );
  await expect(page.getByRole("button", { name: "Yes" })).toHaveCSS(
    "font-size",
    "14px"
  );
  await expect(page.getByRole("button", { name: "Yes" })).toHaveCSS(
    "cursor",
    "pointer"
  );

  await page.getByRole("button", { name: "Yes" }).click();
  await expect(page.getByRole("button", { name: "Yes" })).toHaveCSS(
    "background-color",
    "rgb(134, 239, 172)"
  );
  await expect(page.getByRole("button", { name: "Yes" })).toHaveCSS(
    "text-transform",
    "none"
  );
  await expect(page.getByRole("button", { name: "Yes" })).toHaveCSS(
    "padding-right",
    "20px"
  );
});
