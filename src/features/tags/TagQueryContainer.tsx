import { useEffect, useState } from "react";
import GetTagsQueryModel, {
  Order,
  SortCategory,
} from "../../models/GetTagsQueryModel";
import { FormControl, MenuItem, TextField } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import tagsActions from "./tagsActions";
import { Status } from "../../utils/stateStatus";
import PaginationContainer from "../../components/PaginationContainer";

const TagQueryContainer = () => {
  const dispatch = useAppDispatch();
  const { data, status } = useAppSelector((state) => state.tags);

  const [sortOrder, setSortOrder] = useState<Order>("asc");
  const [sortCategory, setSortCategory] = useState<SortCategory>("popular");
  const [pageSize, setPageSize] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  const tagsQuery: GetTagsQueryModel = {
    page: currentPage,
    pageSize: pageSize,
    order: sortOrder,
    sort: sortCategory,
  };

  useEffect(() => {
    dispatch(tagsActions.getTags(tagsQuery));
  }, [currentPage, sortOrder, sortCategory, pageSize]);

  return (
    <FormControl
      component="form"
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        "& .MuiFormControl-root": {
          mb: { xs: 2, md: 0 },
          mr: { xs: 0, md: 2 },
        },
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
        disabled={status === Status.Loading}
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
        disabled={status === Status.Loading}
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
        disabled={status === Status.Loading}
        InputProps={{
          inputProps: { min: 0 },
        }}
        sx={{
          width: { xs: "100%", md: "150px" },
        }}
      />
      <PaginationContainer
        status={status}
        currentPage={currentPage}
        hasMore={data.hasMore}
        setCurrentPage={setCurrentPage}
      />
    </FormControl>
  );
};

export default TagQueryContainer;
