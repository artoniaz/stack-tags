import { Box, Table, TableBody } from "@mui/material";
import { useAppSelector } from "../../hooks/hooks";
import ErrorBox from "../../components/ErrorBox";
import Loading from "../../components/Loading";
import TagTableHead from "../../components/TagTableHead";
import TabTableRow from "../../components/TagTableRow";

const TagTableContainer = () => {
  const tags = useAppSelector((state) => state.tags);

  if (tags.status === "Loading") {
    return <Loading />;
  }
  if (tags.status === "Failed") {
    return <ErrorBox errorMessage={tags.error} />;
  } else if (tags.status === "Success") {
    return (
      <Table>
        <TagTableHead />
        <TableBody>
          {tags.data.items.map((tag) => (
            <TabTableRow key={tag.name + tag.count} tag={tag} />
          ))}
        </TableBody>
      </Table>
    );
  } else return <Box />;
};

export default TagTableContainer;
