import { TableCell, TableRow, TableHead } from "@mui/material";
import { TagModel } from "../models/TagModel";

interface HeadCell {
  id: keyof TagModel;
  label: string;
}

const headCells: readonly HeadCell[] = [
  {
    id: "name",
    label: "name",
  },
  {
    id: "count",
    label: "count",
  },
];

const TagTableHead = () => {
  return (
    <TableHead>
      <TableRow>
        {headCells.map((cell) => (
          <TableCell key={cell.id}>{cell.label}</TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default TagTableHead;
