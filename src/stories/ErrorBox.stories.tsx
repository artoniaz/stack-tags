import type { Meta, StoryObj } from "@storybook/react";

import ErrorBox from "../components/ErrorBox";

const meta: Meta<typeof ErrorBox> = {
  component: ErrorBox,
  title: "ErrorBox",
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    errorMessage: "test error message",
  },
};
