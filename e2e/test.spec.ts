import {
  test,
  expect,
  http,
  HttpResponse,
} from "next/experimental/testmode/playwright/msw";
import { TestMock } from "@/mocks/testMock";

const url = "https://jsonplaceholder.typicode.com/todos/1";

test("/test", async ({ page, msw }) => {
  msw.use(
    http.get(url, () => {
      return HttpResponse.json(TestMock);
    })
  );

  await page.goto("http://localhost:3000/test");

  await expect(page.locator("body")).toHaveText(/id: 100 \/ click: 0/);
});
