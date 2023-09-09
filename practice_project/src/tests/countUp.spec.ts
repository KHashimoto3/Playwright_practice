import { test, expect } from "@playwright/test";

//各テストの実行前に、localhost:3000に遷移
test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:5173");
});

test("カウントアップボタンをくりっくすると、カウントが増加すること", async ({
  page,
}) => {
  //data-testid属性が、count-up-buttonな要素をクリック
  await page.locator("data-testid=count-up-button").click();
  //data-testid属性が、countな要素のテキストが1になっていることを確認
  await expect(page.locator("data-testid=count")).toContainText("1");
});
