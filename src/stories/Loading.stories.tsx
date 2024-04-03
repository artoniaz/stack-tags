import type { Meta, StoryObj } from "@storybook/react";

import Loading from "../components/Loading";

const meta: Meta<typeof Loading> = {
  component: Loading,
  title: "Loading",
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
  },
};