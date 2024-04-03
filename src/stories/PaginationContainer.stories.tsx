import { Meta, StoryFn, StoryObj } from "@storybook/react";
import PaginationContainer from "../components/PaginationContainer";
import { FetchState } from "../models/FetchStateModel";
import { TagsFetchResponseModel } from "../models/TagsDataModel";
import { MockstateProps } from "../models/MockstateProps";
import { Provider } from "react-redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";

const meta: Meta<typeof PaginationContainer> = {
  component: PaginationContainer,
  title: "PaginationContainer",
  tags: ["autodocs"],
  decorators: [(story) => <>{story()}</>],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    status: "Initial",
    currentPage: 1,
    hasMore: false,
    setCurrentPage: () => {},
  },
};

export const Loading: Story = {
  args: {
    status: "Loading",
    currentPage: 1,
    hasMore: true,
    setCurrentPage: () => {},
  },
};

export const HasMoreFalse: Story = {
  args: {
    status: "Success",
    currentPage: 2,
    hasMore: false,
    setCurrentPage: () => {},
  },
};

export const SinglePage: Story = {
  args: {
    status: "Success",
    currentPage: 1,
    hasMore: false,
    setCurrentPage: () => {},
  },
};
