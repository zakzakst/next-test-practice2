import type { Meta, StoryObj } from "@storybook/react";
import { within, expect } from "@storybook/test";
import { TestComponent } from "./";

const meta = {
  title: "TestComponent",
  component: TestComponent,
} satisfies Meta<typeof TestComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByRole("button", { name: "ボタン" })).toBeInTheDocument();
  },
};
