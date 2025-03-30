import { http, HttpResponse } from "msw";
import { TestMock } from "@/mocks/testMock";

const url = "https://jsonplaceholder.typicode.com/todos/1";

const getTest = http.get(url, () => {
  return HttpResponse.json(TestMock);
});

const putTest = http.put(url, async ({ request }) => {
  const data = await request.json();
  console.log("put request", data);
  return HttpResponse.json(data);
});

const postTest = http.post(url, async ({ request }) => {
  const data = await request.json();
  console.log("post request", data);
  return HttpResponse.json(data);
});

const deleteTest = http.delete(url, () => {
  console.log("delete");
  return HttpResponse.json({ message: "success delete" });
});

export const testHandlers = [getTest, putTest, postTest, deleteTest];
