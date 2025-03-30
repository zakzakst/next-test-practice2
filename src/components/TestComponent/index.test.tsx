import { describe, expect, test, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { server } from "@/msw/setup/server";
import { http, HttpResponse } from "msw";
import { TestMock } from "@/mocks/testMock";
import { TestComponent } from "./";

const url = "https://jsonplaceholder.typicode.com/todos/1";

describe("TestComponent", () => {
  const mockFn = vi.fn();
  beforeEach(() => {
    server.use(
      http.get(url, () => {
        mockFn();
        return HttpResponse.json(TestMock);
      })
    );
  });
  test("ボタンが描画される", async () => {
    render(<TestComponent />);
    expect(screen.getByRole("button", { name: "ボタン" })).toBeDefined();
    await vi.waitFor(() => {
      expect(screen.getByText("id: 100 / click: 0")).toBeDefined();
      expect(mockFn).toHaveBeenCalledTimes(1);
    });
  });
});
