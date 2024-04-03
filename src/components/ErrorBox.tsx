import { Box, Typography, useTheme } from "@mui/material";

const ErrorBox = ({ errorMessage }: { errorMessage: string }) => {
  const theme = useTheme();
  const errorColor = theme.palette.error.main;

  return (
    <Box
      border="2px solid"
      borderColor={errorColor}
      py={1}
      px={1}
      mt={2}
    >
      <Typography color={errorColor}>{errorMessage}</Typography>
    </Box>
  );
};

export default ErrorBox;
