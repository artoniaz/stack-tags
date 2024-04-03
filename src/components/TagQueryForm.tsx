import { Box, Button, FormControl, MenuItem, TextField } from "@mui/material";
import { FormEvent } from "react";
import { Order, SortCategory } from "../models/GetTagsQueryModel";
import { Status } from "../models/FetchStateModel";
import PaginationContainer from "./PaginationContainer";

interface TagQueryProps {
  status: Status;
  sortOrder: Order;
  sortCategory: SortCategory;
  pageSize: number;
  currentPage: number;
  hasMore: boolean;
  handleSubmitFormData(e: FormEvent<HTMLFormElement>): void;
  setSortOrder(order: Order): void;
  setSortCategory(category: SortCategory): void;
  setPageSize(pageSize: number): void;
  setCurrentPage(currentPage: number): void;
}

const TagQueryForm = ({
  sortOrder,
  status,
  sortCategory,
  pageSize,
  currentPage,
  hasMore,
  handleSubmitFormData,
  setSortOrder,
  setSortCategory,
  setPageSize,
  setCurrentPage,
}: TagQueryProps) => {
  return (
    <FormControl
      component="form"
      onSubmit={(e) => handleSubmitFormData(e)}
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "space-between",
        "& .MuiFormControl-root": {
          mb: { xs: 2, md: 0 },
          mr: { xs: 0, md: 2 },
        },
      }}
    >
      <Box
        display="flex"
        sx={{
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <TextField
          select
          id="order"
          name="order"
          size="small"
          label="Sort order"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value as Order)}
          disabled={status === "Loading"}
          sx={{
            width: { xs: "100%", md: "150px" },
          }}
        >
          <MenuItem value="asc">asc</MenuItem>
          <MenuItem value="desc">desc</MenuItem>
        </TextField>
        <TextField
          select
          id="sort"
          name="sort"
          size="small"
          label="Sort category"
          value={sortCategory}
          onChange={(e) => setSortCategory(e.target.value as SortCategory)}
          disabled={status === "Loading"}
          sx={{
            width: { xs: "100%", md: "150px" },
          }}
        >
          <MenuItem value="popular">popular</MenuItem>
          <MenuItem value="activity">activity</MenuItem>
          <MenuItem value="name">name</MenuItem>
        </TextField>
        <TextField
          id="pageSize"
          name="pageSize"
          label="Page size"
          type="number"
          size="small"
          value={pageSize}
          onChange={(e) => setPageSize(Number(e.target.value))}
          disabled={status === "Loading"}
          InputProps={{
            inputProps: { min: 0 },
          }}
          sx={{
            width: { xs: "100%", md: "150px" },
          }}
        />
        <Button type="submit" disabled={status === "Loading"}>
          Submit
        </Button>
      </Box>
      <PaginationContainer
        status={status}
        currentPage={currentPage}
        hasMore={hasMore}
        setCurrentPage={setCurrentPage}
      />
    </FormControl>
  );
};

export default TagQueryForm;
