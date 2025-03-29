import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { TestComponent } from "./";

describe("TestComponent", () => {
  test("ボタンが描画される", () => {
    render(<TestComponent />);
    expect(screen.getByRole("button", { name: "ボタン" })).toBeDefined();
  });
});
