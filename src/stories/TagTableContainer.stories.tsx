import { Meta, StoryFn, StoryObj } from "@storybook/react";
import TagTableContainer from "../features/tags/TagTableContainer";
import Mockstore, { MocedState } from "./MockData";

const meta: Meta<typeof TagTableContainer> = {
  component: TagTableContainer,
  title: "TagTableContainer",
  tags: ["autodocs"],
  decorators: [(story) => <>{story()}</>],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Loading: Story = {
  decorators: [
    (Story: StoryFn) => {
      return (
        <Mockstore state={{ ...MocedState, status: "Loading" }}>
          <Story />
        </Mockstore>
      );
    },
  ],
};

export const Error: Story = {
  decorators: [
    (Story: StoryFn) => {
      return (
        <Mockstore
          state={{
            ...MocedState,
            status: "Failed",
            error: "test error message",
          }}
        >
          <Story />
        </Mockstore>
      );
    },
  ],
};

export const Success: Story = {
  decorators: [
    (Story: StoryFn) => {
      return (
        <Mockstore
          state={{
            ...MocedState,
            status: "Success",
            data: {
              items: [
                { name: "test", count: 123 },
                { name: "test", count: 123 },
                { name: "test", count: 123 },
              ],
              hasMore: true,
            },
          }}
        >
          <Story />
        </Mockstore>
      );
    },
  ],
};
