import { Box } from "@mui/material";
import { Status } from "../utils/stateStatus";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { IconButton } from "@mui/material";

interface PaginationContainer {
  status: Status;
  currentPage: number;
  hasMore: boolean;
  setCurrentPage(page: number): void;
}

const PaginationContainer = ({
  status,
  currentPage,
  hasMore,
  setCurrentPage,
}: PaginationContainer) => {
  const handleBackButton = () => setCurrentPage(currentPage - 1);
  const handleNextButton = () => setCurrentPage(currentPage + 1);

  return (
    <Box>
      <IconButton
        onClick={handleBackButton}
        disabled={currentPage === 1 || status === Status.Loading}
      >
        <ArrowBackIosIcon />
      </IconButton>
      {currentPage}
      <IconButton
        onClick={handleNextButton}
        disabled={!hasMore || status === Status.Loading}
      >
        <ArrowForwardIosIcon />
      </IconButton>
    </Box>
  );
};

export default PaginationContainer;
