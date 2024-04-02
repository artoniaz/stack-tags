import { Box, Table } from "@mui/material";
import { useAppSelector } from "../hooks/hooks";
import { Status } from "../utils/stateStatus";
import ErrorBox from "./ErrorBox";
import Loading from "./Loading";
import TagTableHead from "./TagTableHead";
import TagTableBody from "./TagTableBody";

const TagTableContainer = () => {
  const { data: tags, status, error } = useAppSelector((state) => state.tags);

  if (status === Status.Loading) {
    return <Loading />;
  }
  if (status === Status.Failed) {
    return <ErrorBox errorMessage={error!} />;
  } else if (status === Status.Success) {
    return (
      <Table>
        <TagTableHead />
        <TagTableBody tags={tags.items} />
      </Table>
    );
  } else return <Box />;
};

export default TagTableContainer;
