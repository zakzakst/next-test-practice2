import type { Meta, StoryObj } from "@storybook/react";

import { TestComponent } from "./";

const meta = {
  title: "TestComponent",
  component: TestComponent,
} satisfies Meta<typeof TestComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
