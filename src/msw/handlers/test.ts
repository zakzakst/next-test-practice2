import { http, HttpResponse } from "msw";
import { TestMock } from "@/mocks/testMock";

const url = "https://jsonplaceholder.typicode.com/todos/1";

export const testHandler = http.get(url, () => {
  return HttpResponse.json(TestMock);
});
