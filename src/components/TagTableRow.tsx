import { TableCell, TableRow, Typography } from "@mui/material";
import { TagModel } from "../models/TagsDataModel";

const TabTableRow = ({ tag }: { tag: TagModel }) => {
  return (
    <TableRow key={tag.name}>
      <TableCell>
        <Typography>{tag.name}</Typography>
      </TableCell>
      <TableCell>
        <Typography>{tag.count}</Typography>
      </TableCell>
    </TableRow>
  );
};

export default TabTableRow;
