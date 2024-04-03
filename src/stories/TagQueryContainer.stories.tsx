import TagQueryContainer from "../features/tags/TagQueryContainer";
import { Meta, StoryFn, StoryObj } from "@storybook/react";
import Mockstore, { MocedState } from "./MockData";

const meta: Meta<typeof TagQueryContainer> = {
  component: TagQueryContainer,
  title: "TagQueryContainer",
  tags: ["autodocs"],
  decorators: [(story) => <>{story()}</>],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  decorators: [
    (Story: StoryFn) => {
      return (
        <Mockstore state={{ ...MocedState }}>
          <Story />
        </Mockstore>
      );
    },
  ],
};

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

export const Success: Story = {
  decorators: [
    (Story: StoryFn) => {
      return (
        <Mockstore
          state={{
            ...MocedState,
            status: "Success",
            data: {
              items: [],
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
