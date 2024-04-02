import { TableBody } from "@mui/material";
import TabTableRow from "./TagTableRow";
import { TagModel } from "../models/TagModel";

const TagTableBody = ({ tags }: { tags: TagModel[] }) => {
  return (
    <TableBody>
      {tags.map((tag) => (
        <TabTableRow key={tag.name + tag.count} tag={tag} />
      ))}
    </TableBody>
  );
};

export default TagTableBody;
