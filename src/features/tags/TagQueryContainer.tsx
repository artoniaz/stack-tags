import { FormEvent, useEffect, useState } from "react";
import { Order, SortCategory } from "../../models/GetTagsQueryModel";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import tagsActions from "./tagsActions";
import TagQueryForm from "../../components/TagQueryForm";

const TagQueryContainer = () => {
  const dispatch = useAppDispatch();
  const tags = useAppSelector((state) => state.tags);

  const [sortOrder, setSortOrder] = useState<Order>("asc");
  const [sortCategory, setSortCategory] = useState<SortCategory>("popular");
  const [pageSize, setPageSize] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  const dispachGetTagsAction = () => {
    dispatch(
      tagsActions.getTags({
        page: currentPage,
        pageSize: pageSize,
        order: sortOrder,
        sort: sortCategory,
      })
    );
  };

  const handleSubmitFormData = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispachGetTagsAction();
  };

  useEffect(() => {
    dispachGetTagsAction();
  }, [dispatch, currentPage]);

  return (
    <TagQueryForm
      sortOrder={sortOrder}
      status={tags.status}
      sortCategory={sortCategory}
      pageSize={pageSize}
      currentPage={currentPage}
      hasMore={tags.status === "Success" ? tags.data.hasMore : false}
      handleSubmitFormData={handleSubmitFormData}
      setSortOrder={setSortOrder}
      setSortCategory={setSortCategory}
      setPageSize={setPageSize}
      setCurrentPage={setCurrentPage}
    />
  );
};

export default TagQueryContainer;
