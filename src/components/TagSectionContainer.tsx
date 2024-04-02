import { Box } from "@mui/material";
import TagQueryContainer from "../features/tags/TagQueryContainer";
import TagTableContainer from "./TagTableContainer";

const TagSectionContainer = () => {
  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        minHeight: "300px",
        m: 2,
        maxWidth: "1000px",
      }}
    >
      <TagQueryContainer />
      <TagTableContainer />
    </Box>
  );
};

export default TagSectionContainer;
